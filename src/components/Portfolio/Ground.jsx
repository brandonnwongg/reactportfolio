// Ground.jsx
import { MeshReflectorMaterial } from "@react-three/drei";

export const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[70, 70]} />
      <MeshReflectorMaterial
        blur={[100, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={250}
        roughness={1}
        depthScale={2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
      />
    </mesh>
  );
};
