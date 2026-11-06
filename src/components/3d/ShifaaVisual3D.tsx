import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  hovered?: boolean;
}

function ShifaaStethoscopeScene({ hovered = false }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pulseCoreRef = useRef<THREE.MeshStandardMaterial>(null);

  // Generate a smooth 3D spline curve for the stethoscope rubber tube looping around the capsule
  const tubeCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.42, -0.62, 0.3),   // Stethoscope Chestpiece Base
      new THREE.Vector3(0.72, -0.35, 0.22),  // Looping Right
      new THREE.Vector3(0.68, 0.2, -0.25),   // Behind the capsule
      new THREE.Vector3(0.1, 0.52, -0.35),   // Top-back curve
      new THREE.Vector3(-0.55, 0.3, -0.2),   // Looping Left-back
      new THREE.Vector3(-0.7, -0.15, 0.15),  // Around Left flank
      new THREE.Vector3(-0.4, -0.55, 0.35),  // Lower-front loop
      new THREE.Vector3(-0.05, -0.25, 0.38), // Ascending to Y-junction
      new THREE.Vector3(0, 0.22, 0.35),      // Y-bifurcation stem
    ]);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const speed = hovered ? 1.6 : 1.0;

    if (groupRef.current) {
      // Gentle, continuous floating motion without sharp frames
      groupRef.current.position.y = Math.sin(t * 1.1) * 0.08;

      // Subtle slow turntable angle
      groupRef.current.rotation.y = -0.2 + Math.sin(t * 0.4 * speed) * 0.16;
      groupRef.current.rotation.x = 0.08 + Math.sin(t * 0.6 * speed) * 0.04;
    }

    // Subtle clinical pulse breathing (heartbeat rate)
    if (pulseCoreRef.current) {
      pulseCoreRef.current.emissiveIntensity = 0.85 + Math.sin(t * 3.2) * 0.35;
    }
  });

  return (
    <>
      {/* Lighting Setup: Clinical Crimson Pink key + Medical Cyan fill */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[3.5, 3.5, 3]} intensity={4.2} color="#FB7185" />
      <directionalLight position={[-3.5, -2, -2]} intensity={3.0} color="#38BDF8" />
      <directionalLight position={[0, 4, 1.5]} intensity={2.5} color="#FFFFFF" />
      <pointLight position={[0, 0, 0.5]} intensity={2.2} color="#E11D48" distance={4} />

      {/* Main 3D Medical Assembly (Proportioned to fit 100% inside viewport) */}
      <group ref={groupRef} position={[0, -0.05, 0]} scale={[1.15, 1.15, 1.15]}>
        
        {/* ========================================================= */}
        {/* 1. Translucent Frosted Glass Medical Capsule / EHR Core    */}
        {/* ========================================================= */}
        <mesh position={[0, 0, 0]}>
          <capsuleGeometry args={[0.52, 0.85, 16, 32]} />
          <meshPhysicalMaterial
            transparent={true}
            opacity={0.58}
            transmission={0.88}
            roughness={0.16}
            thickness={1.4}
            ior={1.42}
            color="#E0F2FE"
            attenuationColor="#3872B8"
            attenuationDistance={2.4}
            metalness={0.08}
            clearcoat={1.0}
            clearcoatRoughness={0.08}
          />
        </mesh>

        {/* Illuminated Clinical Medical Cross inside the Capsule */}
        <group position={[0, 0, 0]}>
          {/* Vertical Cross Bar */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.18, 0.65, 0.16]} />
            <meshStandardMaterial
              ref={pulseCoreRef}
              color="#FB7185"
              emissive="#E11D48"
              emissiveIntensity={1.0}
              roughness={0.15}
              metalness={0.4}
            />
          </mesh>

          {/* Horizontal Cross Bar */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.65, 0.18, 0.16]} />
            <meshStandardMaterial
              color="#FB7185"
              emissive="#E11D48"
              emissiveIntensity={1.0}
              roughness={0.15}
              metalness={0.4}
            />
          </mesh>

          {/* Core Cyan Vital Metric Bead */}
          <mesh position={[0, 0, 0]}>
            <octahedronGeometry args={[0.14, 0]} />
            <meshStandardMaterial
              color="#38BDF8"
              emissive="#0284C7"
              emissiveIntensity={1.6}
            />
          </mesh>
        </group>

        {/* ========================================================= */}
        {/* 2. Doctor's Stethoscope: Chestpiece (Bell & Diaphragm)    */}
        {/* ========================================================= */}
        <group position={[0.42, -0.62, 0.3]} rotation={[0.4, -0.3, 0.2]}>
          {/* Chrome Metal Outer Ring */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.24, 0.26, 0.07, 32]} />
            <meshPhysicalMaterial
              color="#E2E8F0"
              metalness={0.96}
              roughness={0.1}
              clearcoat={1.0}
            />
          </mesh>

          {/* Diaphragm Acoustic Face */}
          <mesh position={[0, 0.036, 0]}>
            <cylinderGeometry args={[0.21, 0.21, 0.01, 32]} />
            <meshStandardMaterial
              color="#0F172A"
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>

          {/* Rear Stem Connector to Rubber Tube */}
          <mesh position={[0, -0.05, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.08, 16]} />
            <meshStandardMaterial
              color="#E2E8F0"
              metalness={0.95}
              roughness={0.12}
            />
          </mesh>
        </group>

        {/* ========================================================= */}
        {/* 3. Flexible Stethoscope Tubing Looping Around Capsule     */}
        {/* ========================================================= */}
        <mesh>
          <tubeGeometry args={[tubeCurve, 64, 0.042, 12, false]} />
          <meshStandardMaterial
            color="#090D1A"
            emissive="#0F172A"
            emissiveIntensity={0.25}
            roughness={0.35}
            metalness={0.2}
          />
        </mesh>

        {/* ========================================================= */}
        {/* 4. Y-Bifurcation & Binaural Headset (Dual Ear Tubes)      */}
        {/* ========================================================= */}
        <group position={[0, 0.22, 0.35]}>
          {/* Chrome Y-Junction Collar */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.055, 0.045, 0.08, 16]} />
            <meshStandardMaterial color="#E2E8F0" metalness={0.95} roughness={0.1} />
          </mesh>

          {/* Left Metallic Ear Tube */}
          <group position={[-0.14, 0.32, -0.1]} rotation={[0.1, 0, 0.22]}>
            <mesh>
              <cylinderGeometry args={[0.022, 0.022, 0.62, 16]} />
              <meshPhysicalMaterial
                color="#E2E8F0"
                metalness={0.98}
                roughness={0.08}
                clearcoat={1.0}
              />
            </mesh>
            {/* Left Soft Ear Tip */}
            <mesh position={[0, 0.32, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshStandardMaterial color="#020617" roughness={0.6} />
            </mesh>
          </group>

          {/* Right Metallic Ear Tube */}
          <group position={[0.14, 0.32, -0.1]} rotation={[0.1, 0, -0.22]}>
            <mesh>
              <cylinderGeometry args={[0.022, 0.022, 0.62, 16]} />
              <meshPhysicalMaterial
                color="#E2E8F0"
                metalness={0.98}
                roughness={0.08}
                clearcoat={1.0}
              />
            </mesh>
            {/* Right Soft Ear Tip */}
            <mesh position={[0, 0.32, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshStandardMaterial color="#020617" roughness={0.6} />
            </mesh>
          </group>

          {/* Chrome Tension Spring Arch Bridge between binaural tubes */}
          <mesh position={[0, 0.26, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.16, 0.012, 12, 24, Math.PI]} />
            <meshStandardMaterial color="#CBD5E1" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>

      </group>

      <Preload all />
    </>
  );
}

export const ShifaaVisual3D: React.FC<{ hovered?: boolean }> = ({ hovered }) => {
  return (
    <div className="w-full h-full relative min-h-[300px] sm:min-h-[360px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full pointer-events-none touch-pan-y"
      >
        <ShifaaStethoscopeScene hovered={hovered} />
      </Canvas>
    </div>
  );
};
