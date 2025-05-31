import { Grid, OrbitControls, useScroll } from "@react-three/drei";
import { PortfolioAvatar } from "./PortfolioAvatar";
import { useControls } from "leva";
import { Brain } from "./Brain";
import { PortfolioScene } from "./PortfolioScene";
import { Ground } from "./Ground";
import { Environment } from "@react-three/drei";
import { PortfolioHome } from "./PortfolioHome";
import { SectionTitle } from "./SectionTitle";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { config } from "../../config";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { PortfolioTV } from "./PortfolioTV";
import { PortfolioLaptop } from "./PortfolioLaptop";
import { useMobile } from "../../hooks/useMobile";

const SECTIONS_DISTANCE = 15;

export const PortfolioExperience = () => {
  const [section, setSection] = useState(config.sections[0]);
  const sceneContainer = useRef();
  const scrollData = useScroll();
  const { camera } = useThree();

  const sceneTransition = {
    delay: 0.5,
    duration: 2,
    ease: [0.22, 1, 0.36, 1],
  };

  // Motion values for camera
  const cameraX = useMotionValue(0);
  const lookAtX = useMotionValue(0);
  const cameraZ = useMotionValue(5);
  const cameraY = useMotionValue(0);

  useEffect(() => {
    if (section === "Skills") {
      animate(cameraX, -1, { duration: 4, ease: [0.22, 1, 0.36, 1] });
      animate(cameraZ, 3, { duration: 4, ease: [0.22, 1, 0.36, 1] });
      animate(cameraY, 1.5, { duration: 4, ease: [0.22, 1, 0.36, 1] }); // 👈 zoom in // 👈 zoom in
      animate(lookAtX, 2, { duration: 4, ease: [0.22, 1, 0.36, 1] });
    } else {
      animate(cameraX, 0, { duration: 4, ease: [0.22, 1, 0.36, 1] });
      animate(cameraY, 0.5, { duration: 4, ease: [0.22, 1, 0.36, 1] });
      animate(cameraZ, 5, { duration: 4, ease: [0.22, 1, 0.36, 1] }); // 👈 zoom out
      animate(lookAtX, 0, { duration: 4, ease: [0.22, 1, 0.36, 1] });
    }
  }, [section]);

  useEffect(() => {
    const handleHashChange = () => {
      const sectionIndex = config.sections.indexOf(
        window.location.hash.replace("#", "")
      );
      if (sectionIndex !== -1) {
        scrollData.el.scrollTo(
          0,
          (sectionIndex / (config.sections.length - 1)) *
            (scrollData.el.scrollHeight - scrollData.el.clientHeight)
        );
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  const lastSectionIndex = useRef(0);

  useFrame(() => {
    const currentIndex = Math.round(scrollData.offset * (scrollData.pages - 1));

    if (currentIndex !== lastSectionIndex.current) {
      lastSectionIndex.current = currentIndex;
      setSection(config.sections[currentIndex]);
    }
    if (isMobile) {
      sceneContainer.current.position.x =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
      sceneContainer.current.position.z = 0;
    } else {
      sceneContainer.current.position.z =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
      sceneContainer.current.position.x = 0;
    }

    camera.position.set(cameraX.get(), cameraY.get(), cameraZ.get());
    camera.lookAt(lookAtX.get(), 0, -2);
  });

  const { isMobile } = useMobile();

  return (
    <>
      {/* <Environment preset="sunset" /> */}
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
          sectionColor={"#4B713F"}
          sectionThickness={5}
          cellSize={1}
          cellThickness={0.6}
          infiniteGrid
          fadeDistance={200}
          fadeStrength={10}
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
          <PortfolioHome
            rotation-y={isMobile ? -1.6 : -0.75}
            position={isMobile ? [-2.5, 0, -2] : [-3.5, 0.3, -0.3]}
            scale={0.7}
          />
          <SectionTitle
            rotation-y={isMobile ? 0 : 0.75}
            position-z={0.5}
            position-x={isMobile ? 2 : 0}
            position-y={isMobile ? 2 : 0.5}
            scale={isMobile ? 0.8 : 1}
          >
            HOME
          </SectionTitle>
        </motion.group>
        {/* SKILLS */}
        <motion.group
          position-x={isMobile ? SECTIONS_DISTANCE : 1.5}
          position-z={isMobile ? -4 : SECTIONS_DISTANCE}
          position-y={-3.5}
          transition={sceneTransition}
          variants={{
            Skills: {
              y: 0,
            },
          }}
        >
          <group position-x={isMobile ? 5 : 0}>
            <Brain />
            <SectionTitle
              position-x={0.5}
              position-y={isMobile ? 1 : 1.5}
              rotation-y={-0.25}
            >
              SKILLS
            </SectionTitle>
          </group>
        </motion.group>
        {/* ACADMEIC PROJECTS */}
        <motion.group
          scale={0.5}
          position-x={isMobile ? 2 * SECTIONS_DISTANCE : 0}
          position-z={isMobile ? -3 : 2 * SECTIONS_DISTANCE}
          position-y={-7}
          transition={sceneTransition}
          variants={{
            AcademicProjects: {
              y: 0,
            },
          }}
        >
          <group scale={isMobile ? 0.7 : 1} position-x={isMobile ? 0.3 : 0}>
            <PortfolioTV
              scale={0.8}
              position={[-3, 0.45, -2]}
              rotation={[0, -1.2, 0]}
            />
            <group position={[3, 2, 2]}>
              <SectionTitle position-y={1}>ACADEMIC</SectionTitle>
              <SectionTitle>PROJECTS</SectionTitle>
            </group>
          </group>
        </motion.group>
        {/* PERSONAL PROJECTS */}
        <motion.group
          position-x={isMobile ? 3 * SECTIONS_DISTANCE : 0}
          position-z={isMobile ? -4 : 3 * SECTIONS_DISTANCE}
          scale={0.5}
          position-y={-3.5}
          transition={sceneTransition}
          variants={{
            PersonalProjects: {
              y: 0,
            },
          }}
        >
          <group position={isMobile ? [2.5, 1, 0] : [0, 0, 0]}>
            <PortfolioLaptop
              rotation={[0, 0.5, 0]}
              scale={1.5}
              position={[-3, 2, 0]}
            />
            <group position={[-1.5, 0, 4]}>
              <SectionTitle position-y={1}>PERSONAL</SectionTitle>
              <SectionTitle>PROJECTS</SectionTitle>
            </group>
          </group>
        </motion.group>
        {/* CONTACT */}
        <motion.group
          position-x={isMobile ? 4 * SECTIONS_DISTANCE : 0}
          position-z={isMobile ? -4 : 4 * SECTIONS_DISTANCE}
          scale={0.8}
          position-y={-3.5}
          transition={sceneTransition}
          variants={{
            Contact: {
              y: 0,
            },
          }}
        >
          <SectionTitle
            position-y={isMobile ? 4.2 : 2}
            position-x={isMobile ? 1.5 : 3}
          >
            CONTACT
          </SectionTitle>
        </motion.group>
      </motion.group>
    </>
  );
};
