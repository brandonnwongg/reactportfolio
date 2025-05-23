import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import { MacBookPro } from "./components/MacBookPro";
import { Experience } from "./Experience";
import { PortfolioAvatar } from "./components/Portfolio/PortfolioAvatar";
import { PortfolioExperience } from "./components/Portfolio/PortfolioExperience";
import { config } from "./config";
import { MouseHoverMovement } from "./components/MouseHoverMovement";

function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", -50, 60]} />
      <MouseHoverMovement />
      <ambientLight intensity={6} />
      <Experience />
      <MouseHoverMovement>
        <ScrollControls
          pages={config.sections.length}
          damping={0.2}
          maxSpeed={0.1}
        >
          <group position-y={-1}>
            <PortfolioExperience />
          </group>
        </ScrollControls>
      </MouseHoverMovement>
      {/* <MacBookPro /> */}
      {/* <Scroll html>
        <PortfolioInterface />
      </Scroll> */}
    </Canvas>
  );
}

export default App;
