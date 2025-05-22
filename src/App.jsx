import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import { MacBookPro } from "./components/MacBookPro";
import { Experience } from "./Experience";
import { PortfolioAvatar } from "./components/Portfolio/PortfolioAvatar";
import { PortfolioExperience } from "./components/Portfolio/PortfolioExperience";
import { config } from "./config";

function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", -50, 100]} />
      {/* <OrbitControls
        minDistance={0}
        maxDistance={100}
        enablePan={false}
        enableDamping={true}
        maxPolarAngle={Math.PI / 2}
      /> */}
      <ambientLight intensity={6} />
      <Experience />
      <ScrollControls
        pages={config.sections.length}
        damping={0.1}
        maxSpeed={0.2}
      >
        <group position-y={-1}>
          <PortfolioExperience />
        </group>
      </ScrollControls>
      {/* <MacBookPro /> */}
      {/* <Scroll html>
        <PortfolioInterface />
      </Scroll> */}
    </Canvas>
  );
}

export default App;
