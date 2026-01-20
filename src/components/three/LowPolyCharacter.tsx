"use client";

import { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// Preload the GLB model for better performance
useGLTF.preload("/umutcan-ceyhan-low-poly-character.glb");

function CharacterModel() {
  const groupRef = useRef<any>(null);

  // Load the GLB model - useGLTF caches the model, so we can use it directly
  const { scene } = useGLTF("/umutcan-ceyhan-low-poly-character.glb");

  useFrame((state) => {
    if (groupRef.current) {
      // Reduce circle diameter - smaller vertical movement
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05 - 0.5;

      // Main rotation on X axis + small Y and Z rotations
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.y = -Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.015;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0.5]} scale={[3.5, 3.5, 3.5]} rotation={[0, -Math.PI / 2, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function LowPolyCharacter() {
  return (
    <Suspense fallback={null}>
      <CharacterModel />
    </Suspense>
  );
}
