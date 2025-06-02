// RubiksCube.jsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges, RoundedBox } from "@react-three/drei"; // Added RoundedBox
import * as THREE from "three";

// Updated Rubik's Cube colors for a slightly darker feel
const COLORS = {
  RED: "#B71C1C",
  GREEN: "#2E7D32",
  BLUE: "#1565C0",
  YELLOW: "#FBC02D", // Darker Yellow
  ORANGE: "#EF6C00",
  WHITE: "#E0E0E0", // Greyish White
  BLACK: "#1A1A1A",
};

const RUBIK_COLORS = [
  COLORS.RED,
  COLORS.GREEN,
  COLORS.BLUE,
  COLORS.YELLOW,
  COLORS.ORANGE,
  COLORS.WHITE,
];

const getRandomRubikColor = () =>
  RUBIK_COLORS[Math.floor(Math.random() * RUBIK_COLORS.length)];

// Component for a single small cube (cubelet)
function Cubelet({ position, size = 0.95, roundness = 0.05 }) {
  const materials = useMemo(() => {
    return Array(6)
      .fill(null)
      .map(
        () =>
          new THREE.MeshStandardMaterial({
            color: getRandomRubikColor(),
            metalness: 0.1, // Lower metalness for plastic look
            roughness: 0.7, // Higher roughness for matte plastic
          })
      );
  }, []);

  return (
    <RoundedBox
      args={[size, size, size]} // width, height, depth
      radius={roundness} // Radius of the rounded corners
      smoothness={4} // Subdivisions for the rounded parts
      material={materials} // Array of materials for each face
      position={position}
    >
      <Edges
        scale={1.001} // Slightly scale up to avoid z-fighting with rounded surface
        threshold={15} // Angle threshold for edges to be drawn
        color={COLORS.BLACK}
      />
    </RoundedBox>
  );
}

// Main Rubik's Cube component
function ScrambledRubiksCube() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const baseCubeletSize = 1; // Conceptual size of grid cell for each cubelet
  const cubeletRenderSize = 0.92; // Actual size of the visible cubelet (slightly smaller than cell)
  const cubeletRoundness = 0.05; // How much to round the edges of each cubelet

  const cubelets = useMemo(() => {
    const tempCubelets = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) {
            continue; // Skip the invisible center piece
          }
          tempCubelets.push({
            id: `${x}-${y}-${z}`,
            position: [
              x * baseCubeletSize, // Position based on grid cell
              y * baseCubeletSize,
              z * baseCubeletSize,
            ],
          });
        }
      }
    }
    return tempCubelets;
  }, [baseCubeletSize]);

  return (
    <group ref={groupRef}>
      {cubelets.map((cubelet) => (
        <Cubelet
          key={cubelet.id}
          position={cubelet.position}
          size={cubeletRenderSize}
          roundness={cubeletRoundness}
        />
      ))}
    </group>
  );
}

export default function RubiksCubeScene() {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "#444444" }}>
      {" "}
      {/* Darker background */}
      <Canvas camera={{ position: [4.5, 4.5, 4.5], fov: 30 }}>
        {" "}
        {/* Slightly closer camera, smaller FOV */}
        <ambientLight intensity={0.9} /> {/* Reduced ambient light */}
        <directionalLight
          position={[8, 12, 6]}
          intensity={1.8} /* Reduced directional light */
          castShadow
        />
        <ScrambledRubiksCube />
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
}
