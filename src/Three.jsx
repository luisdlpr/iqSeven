import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "model_compressed.gltf", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("gltfLoader/gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  return <primitive object={gltf.scene} scale={3} />;
};

export default function MyThree() {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Scene />
          <OrbitControls />
          <Environment preset="forest" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
