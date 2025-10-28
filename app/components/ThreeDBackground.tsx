"use client";

import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Floating Sphere Component
function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#00D4FF"
        emissive="#00D4FF"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Rotating Purple Cube
function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.6;
      meshRef.current.rotation.z += delta * 0.4;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 2;
      groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <group ref={groupRef} position={[2.5, 0, 2.5]}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.4}
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

// Spinning Torus Ring
function SpinningTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.z += delta * 0.6;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.2) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[-2.5, 0, -2.5]}>
      <mesh ref={meshRef}>
        <torusGeometry args={[1, 0.2, 16, 100]} />
        <meshStandardMaterial
          color="#00FFFF"
          emissive="#00FFFF"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

// Wireframe Outline Cube
function WireframeCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 1.5, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial
        wireframe
        color="#00D4FF"
        emissive="#00D4FF"
        emissiveIntensity={0.3}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

// Scene content
function Scene() {
  return (
    <>
      {/* Lights */}
      <ambientLight color="#00D4FF" intensity={0.2} />
      <pointLight color="#00D4FF" position={[5, 5, 5]} intensity={1.5} />
      <pointLight color="#8B5CF6" position={[-5, -5, -5]} intensity={1.5} />
      <directionalLight color="#ffffff" position={[0, 5, 0]} intensity={0.5} />

      {/* 3D Shapes */}
      <FloatingSphere />
      <RotatingCube />
      <SpinningTorus />
      <WireframeCube />
    </>
  );
}

// Main Component
export default function ThreeDBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}


