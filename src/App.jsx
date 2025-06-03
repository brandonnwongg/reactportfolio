import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PortfolioExperience } from "./components/Portfolio/PortfolioExperience";
import { config } from "./config";
import { MouseHoverMovement } from "./components/MouseHoverMovement";
import { MotionConfig } from "framer-motion";
import { Interface } from "./components/Portfolio/Interface";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Menu } from "./components/Portfolio/Menu";
import { LoadingScreen } from "./components/Portfolio/LoadingScreen";

function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ position: [0, 0.5, 5], fov: 50 }}>
        <EffectComposer>
          <Bloom
            intensity={0.2}
            kernelSize={3}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.025}
            mipmapBlur
          />
        </EffectComposer>
        <color attach="background" args={["#243407"]} />
        <fog attach="fog" args={["#d0d9e6", 50, 300]} />
        <fogExp2 attach="fog" args={["#d0d9e6", 0.003]} />
        <ambientLight intensity={6} />
        <MouseHoverMovement>
          <ScrollControls
            pages={config.sections.length}
            damping={0.1}
            maxSpeed={0.2}
          >
            <MotionConfig transition={{ duration: 1 }}>
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
      </Canvas>
      <Menu />
    </>
  );
}

export default App;
