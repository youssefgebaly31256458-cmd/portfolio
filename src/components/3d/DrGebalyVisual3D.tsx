import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  hovered?: boolean;
}

function DrGebalyScalesScene({ hovered = false }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const beamRef = useRef<THREE.Group>(null);
  const leftPanRef = useRef<THREE.Group>(null);
  const rightPanRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const speed = hovered ? 1.4 : 1.0;

    // Gentle floating and subtle slow turntable angle
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.9) * 0.04;
      groupRef.current.rotation.y = -0.15 + Math.sin(t * 0.35 * speed) * 0.12;
    }

    // Smooth, realistic harmonic tilt/sway on the balance beam
    const beamAngle = Math.sin(t * 0.8 * speed) * 0.04; // Delicate ~2.3 degrees tilt
    if (beamRef.current) {
      beamRef.current.rotation.z = beamAngle;
    }

    // Keep the balance pans hanging vertically straight down despite beam oscillation
    const armLength = 0.62;
    const leftPanY = -0.45 - Math.sin(beamAngle) * armLength;
    const rightPanY = -0.45 + Math.sin(beamAngle) * armLength;

    if (leftPanRef.current) {
      leftPanRef.current.rotation.z = -beamAngle;
      leftPanRef.current.position.y = leftPanY;
    }

    if (rightPanRef.current) {
      rightPanRef.current.rotation.z = -beamAngle;
      rightPanRef.current.position.y = rightPanY;
    }
  });

  return (
    <>
      {/* Prestige Legal Lighting: Polished Metallic Gold + Judicial Warm Fill */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[3.5, 4, 3]} intensity={4.5} color="#F59E0B" />
      <directionalLight position={[-3.5, 2, -2]} intensity={2.8} color="#38BDF8" />
      <directionalLight position={[0, 4.5, 1.5]} intensity={3.0} color="#FFFFFF" />
      <pointLight position={[0, 0.2, 1.2]} intensity={2.2} color="#D97706" distance={4} />

      {/* Main Judicial Balance Assembly (Pure, Clean & Perfectly Framed) */}
      <group ref={groupRef} position={[0, -0.05, 0]} scale={[1.15, 1.15, 1.15]}>

        {/* ========================================================= */}
        {/* 1. Solid Polished Dark-Wood Circular Pedestal              */}
        {/* ========================================================= */}
        {/* Lower Stepped Dark Mahogany / Walnut Base */}
        <mesh position={[0, -0.96, 0]}>
          <cylinderGeometry args={[0.52, 0.58, 0.12, 36]} />
          <meshPhysicalMaterial
            color="#1F1109"
            emissive="#0D0704"
            emissiveIntensity={0.2}
            roughness={0.25}
            metalness={0.1}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Upper Stepped Wood Tier with Beveled Profile */}
        <mesh position={[0, -0.87, 0]}>
          <cylinderGeometry args={[0.38, 0.46, 0.08, 36]} />
          <meshPhysicalMaterial
            color="#28150B"
            emissive="#120904"
            emissiveIntensity={0.2}
            roughness={0.22}
            metalness={0.1}
            clearcoat={0.9}
          />
        </mesh>

        {/* Gleaming Polished Brass Base Collar */}
        <mesh position={[0, -0.81, 0]}>
          <cylinderGeometry args={[0.18, 0.24, 0.05, 28]} />
          <meshPhysicalMaterial
            color="#F59E0B"
            emissive="#D97706"
            emissiveIntensity={0.4}
            metalness={0.96}
            roughness={0.12}
            clearcoat={0.9}
          />
        </mesh>

        {/* ========================================================= */}
        {/* 2. Central Fluted Brass Pillar / Mast                     */}
        {/* ========================================================= */}
        {/* Vertical Fluted Brass Column */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.034, 0.044, 1.5, 24]} />
          <meshPhysicalMaterial
            color="#F59E0B"
            emissive="#D97706"
            emissiveIntensity={0.35}
            metalness={0.96}
            roughness={0.14}
            clearcoat={0.95}
          />
        </mesh>

        {/* Pillar Decorative Mid-Collar */}
        <mesh position={[0, 0.12, 0]}>
          <sphereGeometry args={[0.065, 20, 20]} />
          <meshPhysicalMaterial
            color="#F59E0B"
            emissive="#B45309"
            emissiveIntensity={0.45}
            metalness={0.96}
            roughness={0.12}
          />
        </mesh>

        {/* Top Fulcrum Pivot Swivel Head */}
        <mesh position={[0, 0.69, 0]}>
          <sphereGeometry args={[0.075, 24, 24]} />
          <meshPhysicalMaterial
            color="#F59E0B"
            emissive="#D97706"
            emissiveIntensity={0.5}
            metalness={0.96}
            roughness={0.12}
          />
        </mesh>

        {/* ========================================================= */}
        {/* 3. Symmetrical Top Crossbeam (Balance Bar)                */}
        {/* ========================================================= */}
        <group ref={beamRef} position={[0, 0.62, 0]}>
          {/* Horizontal Tapered Beam Rod */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.018, 0.024, 1.3, 24]} />
            <meshPhysicalMaterial
              color="#F59E0B"
              emissive="#D97706"
              emissiveIntensity={0.35}
              metalness={0.96}
              roughness={0.14}
              clearcoat={1.0}
            />
          </mesh>

          {/* Left Pan Suspension Loop / Eyelet */}
          <mesh position={[-0.62, 0, 0]}>
            <torusGeometry args={[0.034, 0.007, 16, 24]} />
            <meshStandardMaterial color="#FDE68A" emissive="#F59E0B" emissiveIntensity={0.6} metalness={0.95} />
          </mesh>

          {/* Right Pan Suspension Loop / Eyelet */}
          <mesh position={[0.62, 0, 0]}>
            <torusGeometry args={[0.034, 0.007, 16, 24]} />
            <meshStandardMaterial color="#FDE68A" emissive="#F59E0B" emissiveIntensity={0.6} metalness={0.95} />
          </mesh>
        </group>

        {/* ========================================================= */}
        {/* 4. Left Suspended Balance Pan & Fine Cords                */}
        {/* ========================================================= */}
        <group ref={leftPanRef} position={[-0.62, 0.17, 0]}>
          {/* 3 Fine Symmetrical Suspension Chains/Cords */}
          <mesh position={[-0.07, 0.22, 0.04]} rotation={[0.08, 0, -0.15]}>
            <cylinderGeometry args={[0.003, 0.003, 0.45, 8]} />
            <meshStandardMaterial color="#FEF08A" emissive="#F59E0B" emissiveIntensity={0.5} metalness={0.9} />
          </mesh>
          <mesh position={[0.07, 0.22, 0.04]} rotation={[0.08, 0, 0.15]}>
            <cylinderGeometry args={[0.003, 0.003, 0.45, 8]} />
            <meshStandardMaterial color="#FEF08A" emissive="#F59E0B" emissiveIntensity={0.5} metalness={0.9} />
          </mesh>
          <mesh position={[0, 0.22, -0.07]} rotation={[-0.15, 0, 0]}>
            <cylinderGeometry args={[0.003, 0.003, 0.45, 8]} />
            <meshStandardMaterial color="#FEF08A" emissive="#F59E0B" emissiveIntensity={0.5} metalness={0.9} />
          </mesh>

          {/* Concave Mirror-Polished Brass Weighing Pan */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.13, 0.038, 28]} />
            <meshPhysicalMaterial
              color="#F59E0B"
              emissive="#D97706"
              emissiveIntensity={0.35}
              metalness={0.96}
              roughness={0.12}
              clearcoat={0.95}
            />
          </mesh>
        </group>

        {/* ========================================================= */}
        {/* 5. Right Suspended Balance Pan & Fine Cords               */}
        {/* ========================================================= */}
        <group ref={rightPanRef} position={[0.62, 0.17, 0]}>
          {/* 3 Fine Symmetrical Suspension Chains/Cords */}
          <mesh position={[-0.07, 0.22, 0.04]} rotation={[0.08, 0, -0.15]}>
            <cylinderGeometry args={[0.003, 0.003, 0.45, 8]} />
            <meshStandardMaterial color="#FEF08A" emissive="#F59E0B" emissiveIntensity={0.5} metalness={0.9} />
          </mesh>
          <mesh position={[0.07, 0.22, 0.04]} rotation={[0.08, 0, 0.15]}>
            <cylinderGeometry args={[0.003, 0.003, 0.45, 8]} />
            <meshStandardMaterial color="#FEF08A" emissive="#F59E0B" emissiveIntensity={0.5} metalness={0.9} />
          </mesh>
          <mesh position={[0, 0.22, -0.07]} rotation={[-0.15, 0, 0]}>
            <cylinderGeometry args={[0.003, 0.003, 0.45, 8]} />
            <meshStandardMaterial color="#FEF08A" emissive="#F59E0B" emissiveIntensity={0.5} metalness={0.9} />
          </mesh>

          {/* Concave Mirror-Polished Brass Weighing Pan */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.13, 0.038, 28]} />
            <meshPhysicalMaterial
              color="#F59E0B"
              emissive="#D97706"
              emissiveIntensity={0.35}
              metalness={0.96}
              roughness={0.12}
              clearcoat={0.95}
            />
          </mesh>
        </group>

      </group>

      <Preload all />
    </>
  );
}

export const DrGebalyVisual3D: React.FC<{ hovered?: boolean }> = ({ hovered }) => {
  return (
    <div className="w-full h-full relative min-h-[300px] sm:min-h-[360px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full pointer-events-none touch-pan-y"
      >
        <DrGebalyScalesScene hovered={hovered} />
      </Canvas>
    </div>
  );
};
