"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Html } from "@react-three/drei";
import { useRef } from "react";
import { Mesh, Group } from "three";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiGo, SiTypescript, SiDocker } from "react-icons/si";
import { IconType } from "react-icons";

interface FloatingIconProps {
  Icon: IconType;
  position: [number, number, number];
  yOffset?: number;
}

function FloatingIcon({ Icon, position, yOffset = 0 }: FloatingIconProps) {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={2}
      position={[position[0], position[1] + yOffset, position[2]]}
    >
      <group scale={[0.4, 0.4, 0.4]}>
        <Html transform>
          <div className="text-[#9333EA] text-3xl">
            <Icon />
          </div>
        </Html>
      </group>
    </Float>
  );
}

function Blob() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={[2.2, 2.2, 2.2]}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#9333EA"
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0}
          metalness={0.9}
          emissive="#9333EA"
          emissiveIntensity={0.4}
        />
      </mesh>

      <FloatingIcon Icon={FaReact} position={[2, 0, 0]} />
      <FloatingIcon Icon={SiGo} position={[-2, 0, 0]} />
      <FloatingIcon Icon={FaNodeJs} position={[1.5, 1.5, 0]} />
      <FloatingIcon Icon={SiTypescript} position={[-1.5, -1.5, 0]} />
      <FloatingIcon Icon={FaPython} position={[0, 2, 0]} />
      <FloatingIcon Icon={SiDocker} position={[0, -2, 0]} />
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6] }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Blob />
      </Canvas>
    </div>
  );
}
