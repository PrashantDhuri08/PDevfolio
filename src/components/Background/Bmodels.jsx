// ./Lmodel.js

import { useGLTF } from '@react-three/drei';

export default function Model() { // Destructure fname
  
  const { scene } = useGLTF(`/models/earth.glb`); // Use fname to load the model

  // If your model needs specific positioning/scaling within this component:
  // scene.position.set(0, -1, 0); // Example: move model down
  // scene.scale.set(0.5, 0.5, 0.5); // Example: scale model down

  return <primitive object={scene} />;
}

// Preload models if you know them beforehand (optional, but good for performance)
// if (someCondition) {
//   useGLTF.preload('/path/to/model1.glb');
//   useGLTF.preload('/path/to/model2.glb');
// }