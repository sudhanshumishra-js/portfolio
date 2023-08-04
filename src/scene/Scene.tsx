import { Canvas } from "@react-three/fiber";
import React from "react";

const Scene = () => {
  return (
    <div className="scene-parent">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <pointLight position={[10, 10, 10]} color="white" />
        <mesh>
          <cylinderGeometry args={[5, 5, 20, 32, 1, true]} />
          <meshBasicMaterial color="black" side={2} />
        </mesh>
        <mesh position={[0, 0, -10]}>
          <cylinderGeometry args={[4.9, 4.9, 20, 32, 1, true]} />
          <meshBasicMaterial color="purple" side={2} />
        </mesh>
        <mesh position={[0, 0, -20]}>
          <cylinderGeometry args={[4.8, 4.8, 20, 32, 1, true]} />
          <meshBasicMaterial color="blue" side={2} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Scene;
