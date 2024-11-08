import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "model.gltf");

  return <primitive object={gltf.scene} scale={3} />;
};

export default function MyThree() {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="forest" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
