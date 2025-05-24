import { Grid, OrbitControls, useScroll } from "@react-three/drei";
import { PortfolioAvatar } from "./PortfolioAvatar";
import { useControls } from "leva";
import { Brain } from "./Brain";
import { PortfolioScene } from "./PortfolioScene";
import { Ground } from "./Ground";
import { Environment } from "@react-three/drei";
import { PortfolioHome } from "./PortfolioHome";
import { SectionTitle } from "./SectionTitle";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { config } from "../../config";
import { motion } from "framer-motion-3d";

const SECTIONS_DISTANCE = 8;

export const PortfolioExperience = () => {
  const [section, setSection] = useState(config.sections[0]);
  const sceneContainer = useRef();
  const scrollData = useScroll();

  const sceneTransition = {
    delay: 0.3,
    duration: 1.5,
    ease: [0.22, 1, 0.36, 1],
  };

  useFrame(() => {
    sceneContainer.current.position.z =
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);

    setSection(
      config.sections[Math.round(scrollData.offset * (scrollData.pages - 1))]
    );
  });

  return (
    <>
      <Environment preset="sunset" />
      {/* <axesHelper /> */}
      <PortfolioAvatar />
      <motion.group ref={sceneContainer} animate={section}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-0.5}
          maxAzimuthAngle={0.5}
          rotateSpeed={0.5}
        />

        <Ground position={[0, -0.8, 0]} />
        <Grid
          position={[0, 0.1, 0]}
          sectionSize={1.5}
          sectionColor={"#9D00FF"}
          sectionThickness={5}
          cellSize={1}
          cellThickness={0.6}
          infiniteGrid
          fadeDistance={100}
          fadeStrength={15}
        />
        <PortfolioScene position={[0, 0, 15]} rotation={[0, Math.PI, 0]} />
        {/* HOME */}
        <motion.group
          position-y={-3.5}
          transition={sceneTransition}
          variants={{
            Home: {
              y: 0,
            },
          }}
        >
          <motion.group
            position-x={-10}
            scale={0}
            transition={{
              delay: 0.3,
              duration: 3,
              ease: [0.22, 1, 0.36, 1],
            }}
            variants={{
              Home: {
                x: 0,
                scale: 1,
              },
            }}
          >
            <PortfolioHome />
          </motion.group>
          <SectionTitle>HOME</SectionTitle>
        </motion.group>
        {/* SKILLS */}
        <motion.group
          position-z={SECTIONS_DISTANCE}
          position-y={-3.5}
          transition={sceneTransition}
          variants={{
            Skills: {
              y: 0,
            },
          }}
        >
          <Brain />
          <SectionTitle>SKILLS</SectionTitle>
        </motion.group>
        {/* ACADMEIC PROJECTS */}
        <motion.group
          scale={0.5}
          position-z={2 * SECTIONS_DISTANCE}
          position-y={-3.5}
          transition={sceneTransition}
          variants={{
            AcademicProjects: {
              y: 0,
            },
          }}
        >
          <SectionTitle position-y={0.8}>ACADEMIC</SectionTitle>
          <SectionTitle>PROJECTS</SectionTitle>
        </motion.group>
        {/* PERSONAL PROJECTS */}
        <motion.group
          scale={0.5}
          position-z={3 * SECTIONS_DISTANCE}
          position-y={-3.5}
          transition={sceneTransition}
          variants={{
            PersonalProjects: {
              y: 0,
            },
          }}
        >
          <SectionTitle position-y={0.8}>PERSONAL</SectionTitle>
          <SectionTitle>PROJECTS</SectionTitle>
        </motion.group>
        {/* CONTACT */}
        <motion.group
          scale={0.8}
          position-z={4 * SECTIONS_DISTANCE}
          position-y={-3.5}
          transition={sceneTransition}
          variants={{
            Contact: {
              y: 0,
            },
          }}
        >
          <SectionTitle>CONTACTS</SectionTitle>
        </motion.group>
      </motion.group>
    </>
  );
};
