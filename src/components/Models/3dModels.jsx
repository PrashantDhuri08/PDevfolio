import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three"; // For MathUtils.lerp
// import from "./m.css";
import "./Mod.css";

import Model from "./Lmodel"; // Your model component
import { div } from "framer-motion/client";

// Helper component for mouse interaction logic, now receives fname
const InteractiveModelScene = ({ fname, modelSensitivity = 0.1 }) => {
  const modelGroupRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = -(event.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (modelGroupRef.current) {
      const targetRotationX = mousePosition.y * modelSensitivity;
      const targetRotationY = mousePosition.x * modelSensitivity;

      modelGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        modelGroupRef.current.rotation.x,
        targetRotationX,
        0.1 // Smoothing factor
      );
      modelGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        modelGroupRef.current.rotation.y,
        targetRotationY,
        0.1 // Smoothing factor
      );
    }
  });

  return (
    <group ref={modelGroupRef}>
      <Model fname={fname} /> {/* Pass fname to your Model component */}
    </group>
  );
};

const Models = (props) => {
  // Define sensitivity for mouse interaction
  const mouseFollowSensitivity = 0.1; // Adjust as needed
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cameraPosition = isMobile ? [0, 1, 7] : [0, 1, 5];
  const cameraFov = isMobile ? 34 : 68;

  return (
    <motion.div className="relative w-full h-canvas-container ">
      <Canvas
        className="w-full h-full overflow-visible "
        style={{ touchAction: "auto", pointerEvents: "auto" }} // Disable default touch actions
        camera={{ position: cameraPosition, fov: cameraFov }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        {/* <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        /> */}
        <InteractiveModelScene
          fname={props.fname}
          modelSensitivity={mouseFollowSensitivity}
        />
      </Canvas>
    </motion.div>
  );
};

export default Models;
