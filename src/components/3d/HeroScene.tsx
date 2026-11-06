import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';

interface SceneContentProps {
  mouse: { x: number; y: number };
}

function SceneContent({ mouse }: SceneContentProps) {
  const orbRef = useRef<THREE.Mesh>(null);
  const slatsGroupRef = useRef<THREE.Group>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Perpetual rotation & floating physics on the Orb
    if (orbRef.current) {
      orbRef.current.rotation.y += delta * 0.35;
      orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
      orbRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;

      // Mouse interactive tilt
      const targetX = mouse.x * 0.35;
      const targetZ = -mouse.y * 0.3;
      orbRef.current.position.x = THREE.MathUtils.lerp(orbRef.current.position.x, 0.4 + targetX, 0.05);
      orbRef.current.position.z = THREE.MathUtils.lerp(orbRef.current.position.z, -0.2 + targetZ, 0.05);
    }

    if (haloRef.current) {
      haloRef.current.rotation.z += delta * 0.15;
      haloRef.current.rotation.x = Math.PI / 2 + mouse.y * 0.15;
    }

    // Parallax response on the glass slats
    if (slatsGroupRef.current) {
      const targetSlatX = mouse.x * 0.3;
      const targetSlatY = -mouse.y * 0.2;
      slatsGroupRef.current.position.x = THREE.MathUtils.lerp(slatsGroupRef.current.position.x, targetSlatX, 0.06);
      slatsGroupRef.current.position.y = THREE.MathUtils.lerp(slatsGroupRef.current.position.y, targetSlatY, 0.06);
      slatsGroupRef.current.rotation.y = THREE.MathUtils.lerp(slatsGroupRef.current.rotation.y, mouse.x * 0.12, 0.06);
    }
  });

  // Calculate slat spacing (5 vertical translucent shards)
  const slatCount = 5;
  const slatWidth = 0.34;
  const slatGap = 0.12;
  const startX = -((slatCount - 1) * (slatWidth + slatGap)) / 2 - 0.45;

  return (
    <>
      {/* Dynamic Lighting Setup for Metallic Iridescence & Glass Refraction */}
      <ambientLight intensity={0.5} />
      {/* Warm Crimson Pink Light on the right / rim */}
      <directionalLight position={[4, 2.5, 3]} intensity={4.2} color="#FB7185" />
      {/* Steel / Seal Blue Light on the left */}
      <directionalLight position={[-4, 2, -1]} intensity={3.0} color="#3872B8" />
      {/* Inner Glowing Core Point Light */}
      <pointLight position={[0.4, 0, -0.2]} intensity={2.5} distance={5} color="#E11D48" />
      {/* Specular Top Rim Highlight */}
      <pointLight position={[0, 4, 3]} intensity={2.0} color="#FFFFFF" />

      {/* Floating Orbital Halo Ring */}
      <mesh ref={haloRef} position={[0.4, 0, -0.2]} rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[1.9, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#FB7185"
          emissive="#E11D48"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Main 3D Metallic & Iridescent Orb */}
      <mesh ref={orbRef} position={[0.4, 0, -0.2]}>
        <sphereGeometry args={[1.45, 64, 64]} />
        <meshPhysicalMaterial
          color="#080F24"
          emissive="#E11D48"
          emissiveIntensity={0.18}
          roughness={0.14}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.08}
          reflectivity={0.95}
        />
      </mesh>

      {/* Fluted Glass Ribs (5 vertical translucent shards with realistic refraction) */}
      <group ref={slatsGroupRef} position={[0, 0, 0.95]}>
        {Array.from({ length: slatCount }).map((_, i) => (
          <mesh
            key={i}
            position={[startX + i * (slatWidth + slatGap), 0, (i - 2) * 0.04]}
          >
            <boxGeometry args={[slatWidth, 3.8, 0.07]} />
            <meshPhysicalMaterial
              transparent={true}
              transmission={0.94}
              roughness={0.06}
              thickness={1.5}
              ior={1.45}
              color="#F8FAFC"
              attenuationColor="#FB7185"
              attenuationDistance={2.8}
              metalness={0.05}
              clearcoat={1.0}
              clearcoatRoughness={0.04}
            />
          </mesh>
        ))}
      </group>

      <Preload all />
    </>
  );
}

interface HeroSceneProps {
  mouse: { x: number; y: number };
}

export const HeroScene: React.FC<HeroSceneProps> = ({ mouse }) => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full pointer-events-none touch-pan-y"
      >
        <SceneContent mouse={mouse} />
      </Canvas>
    </div>
  );
};
