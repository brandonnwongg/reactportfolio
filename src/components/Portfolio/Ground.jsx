// Ground.jsx
import { MeshReflectorMaterial } from "@react-three/drei";

export const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[14, 150]} />
      <MeshReflectorMaterial
        blur={[1, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={20}
        roughness={1}
        depthScale={3}
        minDepthThreshold={0.2}
        maxDepthThreshold={0.9}
        color="#050505"
        metalness={0.1}
      />
    </mesh>
  );
};
