import { useState } from "react";

import "./App.css";
// import RubiksCube from "./components/RubiksCube";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import About from "./components/About";
// import Scene from "./components/Models/3dModels";
import FadeInSection from "./components/Fadein";
// import Background3D from "./components/Background/BG";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

// / Background3D component to render GLB model
function Background3D() {
  // Replace '/path/to/model.glb' with your actual GLB model path
  const { scene } = useGLTF("/models/earth.glb");
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive
        object={scene}
        scale={[1, 1, 1]} // Adjust scale as needed
        position={[0, 0, -5]} // Position model in background
        rotation={[0, 0, 0]} // Adjust rotation as needed
      />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

function App() {
  return (
    <>
      <div className="w-lvw flex justify-center flex-row">
        {/* <Background3D className="  z-[-1]" /> */}
        {/* <Background3D/> */}
        <Navbar />
        <div className="min-h-screen  from-black to-cyan-500 flex items-center  justify-center flex-col bg-gradient-to-r animate-gradient">
          {/* <div className="min-h-screen bg-gradient-to-r flex items-center w-full justify-center flex-col"> */}
          {/* <Scene /> */}
          {/* <Background3D /> */}
          <section id="Profile">
            <FadeInSection>
              <Profile />
            </FadeInSection>
          </section>
          <section id="Projects">
            <FadeInSection>
              <Projects />
            </FadeInSection>
          </section>
          <section id="About">
            <FadeInSection>
              <About />
            </FadeInSection>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
