import { Environment } from "@react-three/drei";
import { Avatar } from "./components/Avatar";

export const Experience = () => {
  return (
    <>
      <Environment preset="city" />
      <Avatar />
    </>
  );
};
