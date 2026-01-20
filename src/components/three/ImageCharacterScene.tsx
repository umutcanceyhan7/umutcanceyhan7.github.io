"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import ImageCharacter from "./ImageCharacter";

export default function ImageCharacterScene() {
    const [contextLost, setContextLost] = useState(false);

    return (
        <div className="w-full h-full min-h-[300px]">
            {contextLost && (
                <div className="w-full h-full flex items-center justify-center">
                    <p className="text-[var(--dark-purple)] font-body text-sm">
                        3D character loading...
                    </p>
                </div>
            )}
            <Canvas
                camera={{ position: [0, 0, 3.5], fov: 60 }}
                style={{ background: "transparent" }}
                gl={{
                    antialias: true,
                    alpha: true,
                    preserveDrawingBuffer: false,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true,
                }}
                onCreated={({ gl }) => {
                    // Handle context loss
                    const handleContextLost = (event: Event) => {
                        event.preventDefault();
                        console.warn("WebGL context lost");
                        setContextLost(true);
                    };

                    const handleContextRestored = () => {
                        console.log("WebGL context restored");
                        setContextLost(false);
                        // Force re-render
                        window.location.reload();
                    };

                    gl.domElement.addEventListener("webglcontextlost", handleContextLost);
                    gl.domElement.addEventListener("webglcontextrestored", handleContextRestored);

                    return () => {
                        gl.domElement.removeEventListener("webglcontextlost", handleContextLost);
                        gl.domElement.removeEventListener("webglcontextrestored", handleContextRestored);
                    };
                }}
                dpr={[1, 2]}
                frameloop="always"
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1.2} />
                    <directionalLight position={[5, 5, 5]} intensity={0.4} />
                    <ImageCharacter />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 2}
                        enableDamping={true}
                        dampingFactor={0.05}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
