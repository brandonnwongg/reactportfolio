import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { MovingStars } from "./MovingStars";
import { StaticStars } from "./StaticStars";
import { Box } from "./Box";
// "Low Poly Winter Scene" (https://skfb.ly/6R6MM) by EdwiixGG is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

export const StartingScreen = () => {
  // const light = useRef();

  // useFrame(({ clock }) => {
  //   const time = clock.getElapsedTime();
  //   light.current.position.x = Math.sin(time * 0.8) * 1.5;
  // });

  return (
    <>
      <Box />
      <StaticStars nbParticles={1000} />
      {/* <MovingStars nbParticles={800} /> */}
      {/* <Environment preset="night" /> */}
      {/* <pointLight
        ref={light}
        position={[0, 1, 0.5]}
        intensity={1.5}
        decay={1}
      /> */}

      <EffectComposer>
        <Bloom
          intensity={1}
          kernelSize={3}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.025}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
};
