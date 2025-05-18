import { Grid, OrbitControls } from "@react-three/drei";
import { PortfolioAvatar } from "./PortfolioAvatar";
import { useControls } from "leva";
import { Brain } from "./Portfolio/Brain";

export const PortfolioExperience = () => {
  const { animation } = useControls({
    animation: {
      value: "Entering Fall",
      options: ["Entering Fall", "Standing", "Neutral", "Fall", "Waving"],
    },
  });

  return (
    <>
      <OrbitControls />
      <Grid
        sectionSize={1.5}
        sectionColor={"#39FF14"}
        sectionThickness={3}
        cellSize={1}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />
      <axesHelper />
      <group>
        <PortfolioAvatar animation={animation} />
      </group>
      <Brain />
    </>
  );
};
