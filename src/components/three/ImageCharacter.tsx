"use client";

import { useRef, Suspense, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function ImageCharacterModel() {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);

    // Load the PNG texture
    const texture = useTexture("/umutcan-ceyhan-character.png");

    // Configure texture settings for better quality
    useMemo(() => {
        if (texture) {
            texture.flipY = true; // Don't flip texture
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
        }
    }, [texture]);

    useFrame((state) => {
        if (groupRef.current) {
            // Reduce circle diameter - smaller vertical movement
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;

            // Main rotation on X axis + small Y and Z rotations
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.015;
        }

        // Billboard effect: Make the plane always face camera (optional)
        // Uncomment the lines below if you want the image to always face the camera
        // if (meshRef.current && state.camera) {
        //     meshRef.current.lookAt(state.camera.position);
        // }
    });

    // Calculate aspect ratio from texture if available
    const aspectRatio = useMemo(() => {
        if (texture && texture instanceof THREE.Texture && texture.image) {
            const img = texture.image as HTMLImageElement;
            return img.width / img.height;
        }
        return 1;
    }, [texture]);

    return (
        <group ref={groupRef} position={[0, 0, 0]} scale={[3.5, 3.5, 3.5]}>
            {/* Main character plane */}
            <mesh ref={meshRef} position={[0, -0.15, 0]}>
                <planeGeometry args={[aspectRatio, 1]} />
                <meshLambertMaterial
                    map={texture}
                    transparent={true}
                    side={THREE.DoubleSide}
                    alphaTest={0.1}
                />
            </mesh>

            {/* Optional: Add a subtle shadow plane underneath for depth
            <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[aspectRatio * 0.8, 0.8]} />
                <meshBasicMaterial
                    color="#000000"
                    transparent={true}
                    opacity={0.2}
                />
            </mesh> */}
        </group>
    );
}

export default function ImageCharacter() {
    return (
        <Suspense fallback={null}>
            <ImageCharacterModel />
        </Suspense>
    );
}
