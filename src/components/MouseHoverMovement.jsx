import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function MouseHoverMovement({ children }) {
  const group = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!group.current) return;

    const targetY = mouse.x * 0.1; // left-right

    // Smoothly interpolate rotation
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.05
    );
  });

  return <group ref={group}>{children}</group>;
}
