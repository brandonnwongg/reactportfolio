// import { Instance, Instances, useTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useMemo, useRef } from "react";
// import { AdditiveBlending, Color } from "three";
// import { lerp, randFloat, randFloatSpread } from "three/src/math/MathUtils.js";

// export const StaticStars = ({ nbParticles = 1000 }) => {
//   const texture = useTexture("textures/staticstars.png");
//   const particles = useMemo(
//     () =>
//       Array.from({ length: nbParticles }, (_, idx) => ({
//         position: [randFloat(40, 80), randFloatSpread(50), 4],
//         rotation: [0, randFloat(0, Math.PI * 2), 0],
//         size: randFloat(1, 3),
//         lifetime: randFloat(3, 6),
//       })),
//     []
//   );

//   return (
//     <Instances range={nbParticles} limit={nbParticles} instanceColor>
//       <planeGeometry args={[1, 1]} />
//       <meshBasicMaterial
//         alphaMap={texture}
//         transparent
//         depthWrite={false}
//         blending={AdditiveBlending}
//       />
//       {particles.map((props, i) => (
//         <Particle key={i} {...props} />
//       ))}
//     </Instances>
//   );
// };

// const colorStart = new Color("orange").multiplyScalar(30);
// const colorEnd = new Color("blue").multiplyScalar(30);

// const Particle = ({ position, size, rotation, lifetime }) => {
//   const ref = useRef();
//   const age = useRef(0);

//   useFrame(({ camera }, delta) => {
//     age.current += delta;
//     if (!ref.current) {
//       return;
//     }
//     const lifetimeProgression = age.current / lifetime;
//     ref.current.scale.x =
//       ref.current.scale.y =
//       ref.current.scale.z =
//         lifetimeProgression < 0.5
//           ? lerp(0, size, lifetimeProgression) // scale in
//           : lerp(size, 0, lifetimeProgression); // scale out

//     ref.current.color.r = lerp(colorStart.r, colorEnd.r, lifetimeProgression);
//     ref.current.color.g = lerp(colorStart.g, colorEnd.g, lifetimeProgression);
//     ref.current.color.b = lerp(colorStart.b, colorEnd.b, lifetimeProgression);

//     if (age.current > lifetime) {
//       age.current = 0;
//     }
//     ref.current.lookAt(camera.position);
//   });

//   return (
//     <group rotation={rotation}>
//       <Instance ref={ref} position={position} scale={size} />
//     </group>
//   );
// };

// useTexture.preload("textures/staticstars.png");
