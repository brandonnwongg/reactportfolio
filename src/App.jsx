import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import { MacBookPro } from "./components/MacBookPro";

function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
      <color attach="background" args={["#f5f3ee"]} />
      <fog attach="fog" args={["#f5f3ee", 10, 50]} />
      <OrbitControls />
      <ambientLight intensity={2} />
      <Avatar />
      <MacBookPro />
    </Canvas>
  );
}

export default App;
