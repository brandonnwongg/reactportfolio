import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef, use } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { config } from "../../config";
import { atom } from "jotai";
import { useAtom } from "jotai";
import { useMobile } from "../../hooks/useMobile";
import useMeasure from "react-use-measure";
import { useScrollingCarousel } from "../../hooks/useScrollingCarousel";

const categories = [
  { label: "Programming Languages", key: "programmingLanguages" },
  { label: "Technologies", key: "tech" },
  { label: "Frameworks & Libraries", key: "frameworksAndLibraries" },
  { label: "Languages", key: "languages" },
];

export const projectAtom = atom(config.AcademicProjects[0]);

export const Interface = ({ setShowNotAvailable }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollData = useScroll();
  const { isMobile } = useMobile();

  // laptop rendering project video
  const [_project, setProject] = useAtom(projectAtom);

  // horizontal scrolling carousel
  const [skillsRef, { width: skillsWidth }] = useMeasure();
  const xSkills = useMotionValue(0);

  const [academicsRef, { width: academicsWidth }] = useMeasure();
  const xAcademics = useMotionValue(0);

  const [personalRef, { width: personalWidth }] = useMeasure();
  const xPersonal = useMotionValue(0);

  const carouselduration = 25;
  const slowcarousel = 500;

  const [duration, setDuration] = useState(carouselduration);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useScrollingCarousel({
    width: skillsWidth,
    xTranslation: xSkills,
    duration,
    mustFinish,
    setMustFinish,
    rerender,
    setRerender,
  });

  useScrollingCarousel({
    width: academicsWidth,
    xTranslation: xAcademics,
    duration,
    mustFinish,
    setMustFinish,
    rerender,
    setRerender,
  });

  // mobile rendering project video since there isn't hover mode
  const [touchedProject, setTouchedProject] = useState(null);

  const handleProjectInteraction = (proj, e) => {
    if (isMobile) {
      if (touchedProject !== proj.title) {
        e.preventDefault();
        setProject(proj);
        setTouchedProject(proj.title);

        setMustFinish(true);
        setDuration(slowcarousel);

        setTimeout(() => {
          setTouchedProject(null);
          setDuration(carouselduration);
        }, 2000);

        return;
      }
    }
  };

  // hover mode mobile rendering till here

  return (
    <div className="interface">
      <div className="sections">
        {/* HOME SECTION */}
        <section className="section section--right mobile--section--bottom--home">
          <div className="home-wrapper">
            <motion.div
              className="home"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <p className="home-text">{config.Home.Text}</p>
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
              />
            </motion.div>
          </div>
        </section>
        {/* SKILLS */}
        <section className="section section--bottom  mobile--section--bottom">
          <motion.div
            className="skills"
            whileInView={"visible"}
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
              },
            }}
            viewport={{
              margin: isMobile ? "-70px 0px 0px 0px" : undefined,
            }}
          >
            <motion.div
              className="horizontal-scroll-container-skills"
              ref={skillsRef}
              style={{ x: xSkills }}
              onHoverStart={() => {
                setMustFinish(true);
                setDuration(slowcarousel);
              }}
              onHoverEnd={() => {
                setMustFinish(true);
                setDuration(carouselduration);
              }}
            >
              {[...categories, ...categories].map((category, idx) => (
                <motion.div
                  key={`${category.key}-${idx}`}
                  className="skill-category"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: { opacity: 1 },
                  }}
                  transition={{
                    duration: 1,
                    delay: isMobile ? 0 : idx * 0.5,
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
          </motion.div>
        </section>

        {/* ACADEMIC PROJECTS */}
        <section className="section section--bottom mobile--section--bottom">
          <motion.div
            className="academics"
            whileInView={"visible"}
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
              },
            }}
            viewport={{
              margin: isMobile ? "-70px 0px 0px 0px" : undefined,
            }}
          >
            <motion.div
              className="horizontal-scroll-container-academics"
              ref={academicsRef}
              style={{ x: xAcademics }}
              onHoverStart={() => {
                setMustFinish(true);
                setDuration(slowcarousel);
              }}
              onHoverEnd={() => {
                setMustFinish(true);
                setDuration(carouselduration);
              }}
            >
              {[...config.AcademicProjects, ...config.AcademicProjects].map(
                (project, idx) => (
                  <motion.div
                    onMouseEnter={() => !isMobile && setProject(project)}
                    onClick={(e) => {
                      if (!project.link || project.link === "/notavailable") {
                        e.preventDefault();
                        setShowNotAvailable(true);
                        setTimeout(() => setShowNotAvailable(false), 2000);
                      } else {
                        handleProjectInteraction(project, e);
                      }
                    }}
                    key={`${project.title}-${idx}`}
                    className="academic-project"
                    initial={{ opacity: 0 }}
                    variants={{
                      visible: { opacity: 1 },
                    }}
                    transition={{
                      duration: 1,
                      delay: isMobile ? 0 : idx * 0.5,
                    }}
                  >
                    <a href={project.link} target="_blank">
                      <img
                        className="academic-project-image"
                        src={project.image}
                        alt={project.title}
                      />
                      <div className="academic-project-details">
                        <h3 className="academic-project-title">
                          -{project.title}-
                        </h3>
                        <p className="academic-project-description">
                          {project.description}
                        </p>
                        {touchedProject === project.title && (
                          <p className="project-tap-overlay">
                            TAP TO
                            <br />
                            VIEW
                            <br />
                            SOURCE CODE
                          </p>
                        )}
                      </div>
                    </a>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </section>

        {/* PERSONAL PROJECTS */}
        <section className="section section--right mobile--section--bottom">
          <motion.div
            className="personal"
            whileInView={"visible"}
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
              },
            }}
            viewport={{
              margin: isMobile ? "-70px 0px 0px 0px" : undefined,
            }}
          >
            {config.PersonalProjects.map((project, idx) => (
              <motion.div
                key={project.ptitle}
                className="personal-project"
                initial={{ opacity: 0 }}
                variants={{
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 1, delay: idx * 0.5 }}
              >
                <a
                  href={project.pref || "#"}
                  target={project.pref ? "_blank" : undefined}
                  rel={project.pref ? "noreferrer noopener" : undefined}
                  className="personal-project-link-wrapper"
                  onClick={(e) => {
                    if (!project.pref) {
                      e.preventDefault();
                      setShowNotAvailable(true);
                      setTimeout(() => setShowNotAvailable(false), 2000);
                    }
                  }}
                >
                  <div className="personal-project-details">
                    <h3 className="personal-project-title">
                      -{project.ptitle}-
                    </h3>
                    <p className="personal-project-description">
                      {project.pdescription}
                    </p>
                    <p className="personal-project-link">{project.plink}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className="section section--left--contact mobile--section--bottom--contact">
          <motion.div
            className="contact"
            whileInView={"visible"}
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
              },
            }}
            viewport={{
              margin: isMobile ? "-70px 0px 0px 0px" : undefined,
            }}
          >
            <h1 className="contact__name">{config.Contact.contactname}</h1>
            <p className="contact__address">{config.Contact.address}</p>
            <br />
            <div className="contact__socials">
              <a href={config.Contact.socials.linkedin} target="_blank">
                <img
                  className="contact__socials__icon"
                  src="images/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href={config.Contact.socials.github} target="_blank">
                <img
                  className="contact__socials__icon"
                  src="images/github.png"
                  alt="git"
                />
              </a>
              <a href={`mailto:${config.Contact.mail}`} target="_blank">
                <img
                  className="contact__socials__icon"
                  src="images/email.png"
                  alt="email"
                />
              </a>
              <a href={config.Contact.socials.insta} target="_blank">
                <img
                  className="contact__socials__icon"
                  src="images/insta.png"
                  alt="insta"
                />
              </a>
              <a
                href={config.Contact.socials.cv || "#"}
                target={config.Contact.socials.cv ? "_blank" : undefined}
                rel={
                  config.Contact.socials.cv ? "noreferrer noopener" : undefined
                }
                onClick={(e) => {
                  if (!config.Contact.socials.cv) {
                    e.preventDefault();
                    setShowNotAvailable(true);
                    setTimeout(() => setShowNotAvailable(false), 2000);
                  }
                }}
              >
                <img
                  className="contact__socials__icon"
                  src="images/cv.png"
                  alt="cv"
                />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
