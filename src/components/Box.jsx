import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

export const Box = () => {
  const ref = useRef();
  useHelper(ref, THREE.BoxHelper, "cyan");

  const { position } = useControls({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

  return (
    <mesh ref={ref} position={[position.x, position.y, position.z]}>
      <boxGeometry />
      <meshBasicMaterial color="orange" transparent opacity={0.5} />
    </mesh>
  );
};
