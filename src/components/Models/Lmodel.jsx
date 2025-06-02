// ./Lmodel.js
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ fname, ...props }) {
  // Destructure fname
  const group = useRef();
  const { scene } = useGLTF(`/models/${fname}`); // Use fname to load the model

 

  return <primitive object={scene} ref={group} {...props} dispose={null} />;
}

