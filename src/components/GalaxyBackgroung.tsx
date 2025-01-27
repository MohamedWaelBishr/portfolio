"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { size } = useThree();

  // Generate random particle positions
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / size.width) * 2 - 1;
      const y = -(e.clientY / size.height) * 2 + 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size.width, size.height]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.1;
      pointsRef.current.rotation.y += delta * 0.1;
      pointsRef.current.position.x = mousePos.x * 0.5;
      pointsRef.current.position.y = mousePos.y * 0.5;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles}>
      {/* Use AdditiveBlending & a warm color to simulate sun rays */}
      <PointMaterial
        transparent
        color="#dddddd"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function ParticlesBackground() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <Suspense fallback={null}>
        <Particles />
        {/* Bloom pass to enhance the glow */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.5}
            luminanceSmoothing={2}
            intensity={2}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
