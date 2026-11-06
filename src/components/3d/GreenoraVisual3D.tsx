import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, Preload } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  hovered?: boolean;
}

function TurfModel({ hovered = false }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/turf.glb');

  // Clone scene so it remains isolated and ensure materials are double-sided
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              mat.side = THREE.DoubleSide;
            });
          } else {
            mesh.material.side = THREE.DoubleSide;
          }
        }
      }
    });
    return clone;
  }, [scene]);

  // Calibrate scale based on model bounding box so the grass patch fits comfortably without clipping
  const calibratedScale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      // Calibrated target size of ~3.1 units to fit within camera view comfortably
      return 3.1 / maxDim;
    }
    return 1.5;
  }, [clonedScene]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle ambient rotation
      const rotationSpeed = hovered ? 0.005 : 0.003;
      groupRef.current.rotation.y += rotationSpeed;

      // Mouse parallax with smooth isometric viewing angle
      const targetRotX = 0.38 - state.pointer.y * 0.15;
      const targetRotZ = -state.pointer.x * 0.12;

      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        4,
        delta
      );
      groupRef.current.rotation.z = THREE.MathUtils.damp(
        groupRef.current.rotation.z,
        targetRotZ,
        4,
        delta
      );

      // Gentle floating bob
      const t = state.clock.elapsedTime;
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.06;
    }
  });

  return (
    <group ref={groupRef} scale={calibratedScale}>
      <Center>
        <primitive object={clonedScene} />
      </Center>
    </group>
  );
}

export const GreenoraVisual3D: React.FC<{ hovered?: boolean }> = ({ hovered }) => {
  return (
    <div className="w-full h-full relative min-h-[300px] sm:min-h-[360px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 2.2, 4.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full pointer-events-none touch-pan-y"
      >
        {/* Studio Lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.4} />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} />

        {/* Ambient shadow beneath the floating turf patch */}
        <mesh position={[0, -0.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.5, 32]} />
          <meshBasicMaterial color="#020617" transparent opacity={0.45} />
        </mesh>

        <Suspense fallback={null}>
          <TurfModel hovered={hovered} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

// Preload the turf GLB asset
useGLTF.preload('/turf.glb');
