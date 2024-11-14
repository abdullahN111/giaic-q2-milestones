import BtnMain from "./BtnMain";
import Styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={Styles.projectsSection}>
      <div className={Styles.projectsContainer}>
        <div className={Styles.projectsMain}>
          <div className={Styles.projectsHeading}>
            <h2>
              My <span>Projects</span>
            </h2>
          </div>
          <div className={Styles.projectsCards}>
            <div className={Styles.projectCard}>
              <h3>Latest Work</h3>
              <a
                href="https://resumeabd.vercel.app/"
                className={Styles.projectImg}
              >
                <img src="/assets/images/project1.jpg" alt="Resume Abd" />
              </a>
              <BtnMain label="Resume Abd" />
            </div>
            <div className={Styles.projectCard}>
              <h3>My Best Work</h3>
              <a
                href="https://resumeabd.vercel.app/"
                className={Styles.projectImg}
              >
                <img src="/assets/images/project1.jpg" alt="Ecommerce Abd" />
              </a>
              <BtnMain label="Ecommerce Abd" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
