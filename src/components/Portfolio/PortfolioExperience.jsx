import { Grid, OrbitControls } from "@react-three/drei";
import { PortfolioAvatar } from "./PortfolioAvatar";
import { useControls } from "leva";
import { Brain } from "./Brain";
import { PortfolioScene } from "./PortfolioScene";
import { Ground } from "./Ground";
import { useRef } from "react";
import { Environment } from "@react-three/drei";
import { PortfolioHome } from "./PortfolioHome";

export const PortfolioExperience = () => {
  const { animation } = useControls({
    animation: {
      value: "Entering Fall",
      options: ["Entering Fall", "Standing", "Neutral", "Fall", "Waving"],
    },
  });

  const sceneContainer = useRef();

  return (
    <>
      <Environment preset="sunset" />
      <OrbitControls />
      <Ground position={[0, -0.8, 0]} />
      <Grid
        position={[0, 0.1, 0]}
        sectionSize={1.5}
        sectionColor={"#9D00FF"}
        sectionThickness={5}
        cellSize={1}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />
      <PortfolioScene rotation={[0, Math.PI, 0]} />
      {/* <axesHelper /> */}
      <group>
        <PortfolioAvatar animation={animation} />
      </group>
      {/* <Brain />
      <PortfolioHome /> */}
    </>
  );
};
