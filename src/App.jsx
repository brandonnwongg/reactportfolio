import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import { MacBookPro } from "./components/MacBookPro";
import { Experience } from "./Experience";
// import { PortfolioInterface } from "./components/Portfolio/PortfolioInterface";
import { PortfolioAvatar } from "./components/Portfolio/PortfolioAvatar";
import { PortfolioExperience } from "./components/Portfolio/PortfolioExperience";

function App() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 60]} />
      <OrbitControls />
      <ambientLight intensity={5} />
      <Experience />
      <PortfolioExperience />
      {/* <MacBookPro /> */}
      {/* <Scroll html>
        <PortfolioInterface />
      </Scroll> */}
    </Canvas>
  );
}

export default App;
