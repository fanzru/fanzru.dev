"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Html, Stars } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Mesh, Group, Color, MeshStandardMaterial } from "three";
import { FaReact, FaNodeJs, FaPython, FaEthereum } from "react-icons/fa";
import {
  SiGo,
  SiTypescript,
  SiDocker,
  SiSolana,
  SiRust,
  SiWeb3Dotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

// Clear background helper component
function ClearBackground() {
  const { gl } = useThree();

  useEffect(() => {
    gl.setClearColor(0x000000, 0); // Transparent background
  }, [gl]);

  return null;
}

interface FloatingIconProps {
  Icon: IconType;
  position: [number, number, number];
  yOffset?: number;
  color?: string;
  scale?: number;
}

function FloatingIcon({
  Icon,
  position,
  yOffset = 0,
  color = "#9333EA",
  scale = 0.4,
}: FloatingIconProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={1.5}
      position={[position[0], position[1] + yOffset, position[2]]}
    >
      <group
        scale={[scale, scale, scale]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Html transform distanceFactor={10}>
          <div
            className={`text-3xl transition-all duration-300 ${
              hovered ? "scale-125" : "scale-100"
            }`}
            style={{
              color: color,
              filter: hovered ? "drop-shadow(0 0 8px #9333EA)" : "none",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon />
          </div>
        </Html>
      </group>
    </Float>
  );
}

function Blob() {
  const meshRef = useRef<Mesh>(null);
  const [initialized, setInitialized] = useState(false);

  // Initialize with full scale immediately
  useEffect(() => {
    if (meshRef.current && !initialized) {
      meshRef.current.scale.set(2.2, 2.2, 2.2);
      setInitialized(true);
    }
  }, [initialized]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;

      // Subtle pulsating effect
      const pulseScale = 2.2 + Math.sin(state.clock.getElapsedTime()) * 0.03;
      meshRef.current.scale.set(pulseScale, pulseScale, pulseScale);

      // Subtle color shifting between purple and blue
      const hue = 270 + Math.sin(state.clock.getElapsedTime() * 0.2) * 15;
      const color = new Color().setHSL(hue / 360, 0.8, 0.5);

      const material = meshRef.current.material as MeshStandardMaterial;
      if (material) {
        material.color = color;
        material.emissive = color;
      }
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
          speed={2}
          roughness={0}
          metalness={0.9}
          emissive="#9333EA"
          emissiveIntensity={0.4}
          transparent={true}
          opacity={1}
        />
      </mesh>

      <FloatingIcon
        Icon={SiSolana}
        position={[2, 0, 0]}
        scale={0.6}
        color="#14F195"
      />
      <FloatingIcon Icon={SiWeb3Dotjs} position={[-2, 0, 0]} />
      <FloatingIcon
        Icon={FaEthereum}
        position={[1.5, 1.5, 0]}
        color="#7B3FE4"
      />
      <FloatingIcon Icon={SiTypescript} position={[-1.5, -1.5, 0]} />
      <FloatingIcon Icon={SiRust} position={[0, 2, 0]} color="#FF4A00" />
      <FloatingIcon Icon={FaReact} position={[0, -2, 0]} color="#61DAFB" />
    </group>
  );
}

export default function ThreeScene() {
  const [mounted, setMounted] = useState(false);

  // Only render the Canvas on the client-side after mounting
  useEffect(() => {
    setMounted(true);

    // Make sure we clean up any canvas elements on unmount
    return () => {
      const canvases = document.querySelectorAll("canvas");
      canvases.forEach((canvas) => {
        if (canvas.parentNode) {
          const parent = canvas.parentNode;
          if (parent.parentNode) {
            parent.parentNode.removeChild(parent);
          }
        }
      });
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] lg:h-[500px]">
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 6] }}
          gl={{
            alpha: true,
            antialias: true,
            premultipliedAlpha: false,
            preserveDrawingBuffer: false,
          }}
          style={{
            background: "transparent",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <ClearBackground />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Stars
            radius={100}
            depth={50}
            count={500}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <Blob />
        </Canvas>
      )}
    </div>
  );
}
