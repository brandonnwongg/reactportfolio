import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";

export const Box = () => {
  const groupRef = useRef();

  // Optional: live tweaking with Leva
  const { position, rotation, scale, visible, opacity, color } = useControls(
    "Cone Controls",
    {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1,
      opacity: { value: 1, min: 0, max: 1 },
      color: "#ffa500", // orange
      visible: true,
    }
  );

  // Show helper
  useHelper(groupRef, THREE.BoxHelper, "cyan");

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
      scale={scale}
      visible={visible}
    >
      {/* Centered cone (base on bottom, tip up) */}
      <mesh position={[0, 0.5, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color={color} transparent opacity={opacity} />
      </mesh>
    </group>
  );
};
