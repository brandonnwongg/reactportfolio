// import { Environment, Gltf, OrbitControls } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import { MovingStars } from "../MovingStars";
// import { StaticStars } from "../StaticStars";
// import { Box } from "../Box";
// import { Avatar } from "./Avatar";
// import { MeshReflectorMaterial } from "@react-three/drei";
// import { Html } from "@react-three/drei";
// import { Laptop } from "./Laptop";

// // "Low Poly Winter Scene" (https://skfb.ly/6R6MM) by EdwiixGG is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// export default function StartingExperience({ onStart }) {
//   const light = useRef();

//   // useFrame(({ clock }) => {
//   //   const time = clock.getElapsedTime();
//   //   light.current.position.x = Math.sin(time * 0.8) * 1.5;
//   // });

//   return (
//     <>
//       <Box />
//       <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//         <planeGeometry args={[50, 50]} />
//         <MeshReflectorMaterial
//           blur={[1, 10]}
//           resolution={3000}
//           mixBlur={1}
//           mixStrength={50}
//           roughness={0.3}
//           depthScale={5}
//           minDepthThreshold={0.5}
//           maxDepthThreshold={1}
//           color="#050505"
//           metalness={0.6}
//         />
//       </mesh>
//       <Html>
//         <button
//           onClick={onStart}
//           style={{
//             padding: "1em 2em",
//             fontSize: "1.2em",
//             background: "#FF00FF",
//             border: "none",
//             color: "white",
//             borderRadius: "8px",
//             cursor: "pointer",
//           }}
//         >
//           Check Portfolio
//         </button>
//       </Html>
//       <Avatar position-x={0.7} position-z={1.5} position-y={-0.5} />
//       {/* <StaticStars nbParticles={1000} /> */}
//       {/* <MovingStars nbParticles={800} /> */}
//       <Environment preset="night" />
//       <Laptop />
//       {/* <pointLight
//         ref={light}
//         position={[0, 1, 0.5]}
//         intensity={0.1}
//         decay={1}
//       /> */}
//     </>
//   );
// }
