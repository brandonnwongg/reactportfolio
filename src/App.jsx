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
import { Interface } from "./components/Portfolio/Interface";

function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 5], fov: 50 }}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 100, 150]} />
      <ambientLight intensity={6} />
      <Experience />
      <MouseHoverMovement>
        <ScrollControls
          pages={config.sections.length}
          damping={0.1}
          maxSpeed={0.2}
        >
          <MotionConfig
            transition={{
              type: "spring",
              mass: 5,
              stiffness: 50,
              damping: 1,
              restDelta: 0.00001,
            }}
          >
            <group position-y={-1}>
              <PortfolioExperience />
            </group>
          </MotionConfig>

          <Scroll html>
            <MotionConfig transition={{ duration: 1 }}>
              <Interface />
            </MotionConfig>
          </Scroll>
        </ScrollControls>
      </MouseHoverMovement>

      {/* <MacBookPro /> */}
    </Canvas>
  );
}

export default App;
