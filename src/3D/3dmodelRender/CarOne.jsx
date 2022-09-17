import React from "react";
import { FirstCar } from "../3dmodel/FirstCar";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CarOne = () => {
  return (
    <Canvas camera={{ position: [-500, 100, 500], zoom: 1, scroll: true }}>
      <OrbitControls />
      {/* <color attach="background" args={["lightblue"]} /> */}
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[1, 1, 1]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <Suspense fallback={null}>
        <FirstCar />
      </Suspense>
    </Canvas>
  );
};

export default CarOne;
