import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';

interface WorkflowSceneContentProps {
  activePhase?: number;
}

function WorkflowSceneContent({ activePhase = 0 }: WorkflowSceneContentProps) {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);

  const nodePositions: [number, number, number][] = [
    [0, 1.35, 0],    // Phase 1: Discovery
    [0.4, 0.45, 0.2], // Phase 2: Architecture
    [-0.3, -0.45, 0.1], // Phase 3: Delivery
    [0, -1.35, 0],   // Phase 4: Reliability
  ];

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;
    }

    nodesRef.current.forEach((mesh, idx) => {
      if (mesh) {
        mesh.rotation.x += delta * (0.4 + idx * 0.1);
        mesh.rotation.y += delta * (0.5 + idx * 0.1);
        const scale = idx === activePhase ? 1.25 + Math.sin(t * 3) * 0.1 : 1.0;
        mesh.scale.set(scale, scale, scale);
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={3.5} color="#FB7185" />
      <directionalLight position={[-3, -2, -2]} intensity={3.0} color="#3872B8" />

      <group ref={groupRef}>
        {/* Central Connecting Pipeline Strand */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 3.2, 16]} />
          <meshStandardMaterial
            color="#3872B8"
            emissive="#3872B8"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* 4 Polyhedral Stage Beacons */}
        {nodePositions.map((pos, idx) => {
          const isCurrent = idx === activePhase;
          const color = isCurrent ? '#FB7185' : idx % 2 === 0 ? '#3872B8' : '#E11D48';

          return (
            <group key={idx} position={pos}>
              {/* Outer Orbiting Halo for active or all stages */}
              <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[0.38, 0.012, 16, 48]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={isCurrent ? 1.0 : 0.4}
                />
              </mesh>

              {/* Node Geometry (Icosahedron / Octahedron) */}
              <mesh
                ref={(el) => {
                  if (el) nodesRef.current[idx] = el;
                }}
              >
                {idx === 0 && <octahedronGeometry args={[0.22, 0]} />}
                {idx === 1 && <dodecahedronGeometry args={[0.22, 0]} />}
                {idx === 2 && <icosahedronGeometry args={[0.22, 0]} />}
                {idx === 3 && <boxGeometry args={[0.28, 0.28, 0.28]} />}

                <meshPhysicalMaterial
                  color="#080F24"
                  emissive={color}
                  emissiveIntensity={isCurrent ? 0.8 : 0.35}
                  roughness={0.15}
                  metalness={0.85}
                  clearcoat={1.0}
                />
              </mesh>
            </group>
          );
        })}
      </group>

      <Preload all />
    </>
  );
}

export const WorkflowScene3D: React.FC<{ activePhase?: number }> = ({ activePhase = 0 }) => {
  return (
    <div className="w-full h-full relative min-h-[360px] sm:min-h-[440px]">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full pointer-events-none touch-pan-y"
      >
        <WorkflowSceneContent activePhase={activePhase} />
      </Canvas>
    </div>
  );
};

