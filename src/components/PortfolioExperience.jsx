import { OrbitControls } from "@react-three/drei";
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
      <group>
        <PortfolioAvatar animation={animation} />
      </group>
      <Brain />
    </>
  );
};
