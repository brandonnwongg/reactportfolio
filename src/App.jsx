import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./components/StartingScreen/Avatar";
import { MacBookPro } from "./components/MacBookPro";
import { PortfolioExperience } from "./components/Portfolio/PortfolioExperience";
import { config } from "./config";
import { MouseHoverMovement } from "./components/MouseHoverMovement";
import { MotionConfig } from "framer-motion";
import { Interface } from "./components/Portfolio/Interface";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import StartingExperience from "./components/StartingScreen/StartingExperience";
import { Menu } from "./components/Portfolio/Menu";
import { useState } from "react";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
      <Canvas camera={{ position: [0, 0.5, 5], fov: 50 }}>
        <EffectComposer>
          <Bloom
            intensity={1}
            kernelSize={3}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.025}
            mipmapBlur
          />
        </EffectComposer>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 100, 150]} />
        <ambientLight intensity={6} />
        <MouseHoverMovement>
          {!showPortfolio && (
            <StartingExperience onStart={() => setShowPortfolio(true)} />
          )}

          {showPortfolio && (
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
          )}
        </MouseHoverMovement>
      </Canvas>
      {/* <Menu /> */}
    </>
  );
}

export default App;
