import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/Avatar";
import { MacBookPro } from "./components/MacBookPro";
import { Experience } from "./Experience";
import { PortfolioAvatar } from "./components/Portfolio/PortfolioAvatar";
import { PortfolioExperience } from "./components/Portfolio/PortfolioExperience";
import { config } from "./config";
import { MouseHoverMovement } from "./components/MouseHoverMovement";
import { MotionConfig } from "framer-motion";

function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", -50, 60]} />
      {/* <MouseHoverMovement /> */}
      <ambientLight intensity={6} />
      <Experience />
      <MouseHoverMovement>
        <MotionConfig
          transition={{
            type: "spring",
            mass: 5,
            stiffness: 50,
            damping: 1,
            restDelta: 0.00001,
          }}
        >
          <ScrollControls
            pages={config.sections.length}
            damping={0.1}
            maxSpeed={0.2}
          >
            <group position-y={-1}>
              {/* <MotionConfig transition={{ duration: 1.2 }}> */}
              <PortfolioExperience />
              {/* </MotionConfig> */}
            </group>
          </ScrollControls>
        </MotionConfig>
      </MouseHoverMovement>
      {/* <MacBookPro /> */}
      {/* <Scroll html>
        <PortfolioInterface />
      </Scroll> */}
    </Canvas>
  );
}

export default App;
