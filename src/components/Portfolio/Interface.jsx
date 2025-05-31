import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "../../config";
import { atom } from "jotai";
import { useAtom } from "jotai";

const categories = [
  { label: "Programming Languages", key: "programmingLanguages" },
  { label: "Technologies", key: "tech" },
  { label: "Frameworks & Libraries", key: "frameworksAndLibraries" },
  { label: "Languages", key: "languages" },
];

export const projectAtom = atom(config.AcademicProjects[0]);

export const Interface = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollData = useScroll();

  const [_project, setProject] = useAtom(projectAtom);

  useFrame(() => {
    setHasScrolled(scrollData.offset > 0);
  });

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      setComments([...comments, { name, text }]);
      setName("");
      setText("");
    }
  };

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
            viewport={{ amount: 0.1, once: false }}
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

        {/* ACADEMIC PROJECTS */}
        <section className="section section--left">
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
          >
            {config.AcademicProjects.map((project, idx) => (
              <motion.div
                onMouseEnter={() => setProject(project)}
                key={project.title}
                className="academic-project"
                initial={{ opacity: 0 }}
                variants={{
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 1, delay: idx * 0.5 }}
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
                    {/* <h4 className="academic-project-module">
                      Module: <br />
                      {project.module}
                    </h4> */}
                    <p className="academic-project-description">
                      {project.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PERSONAL PROJECTS */}
        <section className="section section--right">
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
                <a href={project.pref} target="_blank">
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
        <section className="section section--left--contact">
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
              <a href={config.Contact.socials.cv} target="_blank">
                <img
                  className="contact__socials__icon"
                  src="images/cv.png"
                  alt="cv"
                />
              </a>
            </div>
            <p className="contact__comment">{config.Contact.comment}</p>
            <form className="comment-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="comment-input"
                maxLength={10}
              />
              <input
                type="text"
                placeholder="Comment"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="comment-input"
                maxLength={30}
              />
              <button type="submit" className="comment-submit">
                Submit
              </button>
            </form>
          </motion.div>
          <div className="comment-strip">
            {comments.map((comment, index) => (
              <div key={index} className="comment-marquee">
                <div className="comment-scroll">
                  <span className="comment-name">
                    {comment.name.charAt(0).toUpperCase() +
                      comment.name.slice(1)}
                  </span>
                  <br />
                  <span className="comment-says">&nbsp;says:&nbsp;</span>
                  <br />
                  <span className="comment-text">{comment.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
