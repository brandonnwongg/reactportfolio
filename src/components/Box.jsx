import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

export const Box = () => {
  const ref = useRef();
  useHelper(ref, THREE.BoxHelper, "cyan");

  const { position, rotation } = useControls({
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
  });

  return (
    <group
      ref={ref}
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      {/* Shift the cone up by half its height (0.5) */}
      {/* <mesh position={[0, 0.5, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshBasicMaterial color="orange" transparent opacity={1} />
      </mesh> */}
    </group>
  );
};
