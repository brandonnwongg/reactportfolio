import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import { MacBookPro } from "./components/MacBookPro";
import { Experience } from "./Experience";
import { PortfolioInterface } from "./components/PortfolioInterface";

function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 50]} />
      <OrbitControls />
      <ambientLight intensity={2} />
      {/* <Experience />
      <Avatar />
      <MacBookPro /> */}
      <Scroll html>
        <PortfolioInterface />
      </Scroll>
    </Canvas>
  );
}

export default App;
