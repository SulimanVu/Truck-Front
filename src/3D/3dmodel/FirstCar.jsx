import React from "react";
import { useGLTF } from "@react-three/drei";

export function FirstCar(props) {
  const { nodes, materials } = useGLTF("/carOne/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.99, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes["Jumbo-Car001_jumbo-car_0"].geometry}
              material={materials["jumbo-car"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
