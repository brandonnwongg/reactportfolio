export const Menu = () => {
  return (
    <div className="menu">
      <h2 className="menu__logo"> BRANDON </h2>
      <div className="menu__buttons">
        <a className="menu__button" href="#Home">
          HOME
        </a>
        <a className="menu__button" href="#Skills">
          SKILLS
        </a>
        <a className="menu__button" href="#AcademicProjects">
          ACADEMIC PROJECTS
        </a>
        <a className="menu__button" href="#PersonalProjects">
          PERSONAL PROJECTS
        </a>
        {/* <a className="menu__button" href="#Contact">
          CONTACT
        </a> */}
      </div>
    </div>
  );
};
