import { Canvas } from "@react-three/fiber";
import Model from "./Bmodels";
import { OrbitControls } from "@react-three/drei";

const Background3D = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full">
      <ambientLight intensity={1} />
      <directionalLight position={[2, 5, 2]} />
      <Model scale={[5, 5, 5]} position={[0, -1, -5]} />{" "}
      {/* Adjust as needed */}
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
};

export default Background3D;
