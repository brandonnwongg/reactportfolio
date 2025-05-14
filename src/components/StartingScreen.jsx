import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { MovingStars } from "./MovingStars";
import { StaticStars } from "./StaticStars";

// "Low Poly Winter Scene" (https://skfb.ly/6R6MM) by EdwiixGG is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

export const StartingScreen = () => {
  const light = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    light.current.position.x = Math.sin(time * 0.8) * 1.5;
  });

  return (
    <>
      <StaticStars nbParticles={1000} />
      <MovingStars nbParticles={800} />
      <OrbitControls
        minDistance={3}
        maxDistance={12}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
      />

      <Environment preset="night" />
      <pointLight
        ref={light}
        position={[0, 1, 0.5]}
        intensity={2.5}
        decay={1}
      />

      <EffectComposer>
        <Bloom mipmapBlur intensity={1.2} luminanceThreshold={1} />
      </EffectComposer>
    </>
  );
};
