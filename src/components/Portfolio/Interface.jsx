import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "../../config";

const categories = [
  { label: "Programming Languages", key: "programmingLanguages" },
  { label: "Technologies", key: "tech" },
  { label: "Frameworks & Libraries", key: "frameworksAndLibraries" },
  { label: "Languages", key: "languages" },
];

export const Interface = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollData = useScroll();

  // console.log("config.Skills:", config.Skills);

  useFrame(() => {
    setHasScrolled(scrollData.offset > 0);
  });

  return (
    <div className="interface">
      <div className="sections">
        {/* HOME SECTION */}
        <section className="section section--right">
          <div>
            <motion.div
              className="home"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              {Object.entries(config.Home).map(([key, value]) => (
                <div className="home-info-line" key={key}>
                  <span className="home-label">{key}:</span>
                  <span className="home-value">{value}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="scroll-down"
              initial={{ opacity: 0 }}
              animate={{ opacity: hasScrolled ? 0 : 1 }}
            >
              <motion.div
                className="scroll-down__wheel"
                initial={{ translateY: 0 }}
                animate={{ translateY: 4 }}
                transition={{
                  duration: 0.4,
                  repeatDelay: 0.5,
                  repeatType: "reverse",
                  repeat: Infinity,
                }}
              ></motion.div>
            </motion.div>
          </div>
        </section>
        {/* SKILLS */}
        <section className="section section--right">
          <motion.div
            className="skills"
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.3, once: false }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.6,
                  staggerDirection: -1,
                },
              },
            }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.key}
                className="skill-category"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <h2 className="category">{category.label}</h2>
                <div className="skill-list">
                  {config.Skills?.[category.key]?.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                    >
                      <div className="skill-label">
                        {skill.icon && (
                          <i
                            className={skill.icon}
                            style={{
                              fontSize: "25px",
                              marginTop: "0.3rem",
                              marginLeft: "0.5rem",
                            }}
                          />
                        )}
                        <h4 className="skill_label_name">{skill.name}</h4>
                        <div className="skill_label_level">
                          <motion.div
                            className="skill_level_bar"
                            variants={{
                              hidden: { width: 0 },
                              visible: { width: `${skill.level}%` },
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className="section section--left">ACADEMIC PROJECTS</section>
        <section className="section section--right">PERSONAL PROJECTS</section>
        <section className="section section--left">CONTACT</section>
      </div>
    </div>
  );
};
