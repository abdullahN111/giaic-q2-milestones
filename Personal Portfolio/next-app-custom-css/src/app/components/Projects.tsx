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
                target="_blank" rel="noopener noreferrer"
              >
                <img src="/assets/images/project1.jpg" alt="Resume Abd" />
              </a>
              <a href="https://resumeabd.vercel.app/"
              target="_blank" rel="noopener noreferrer">
                <BtnMain label="Resume Abd" />
              </a>
            </div>
            <div className={Styles.projectCard}>
              <h3>My Best Work</h3>
              <a
                href="https://furniro-by-abd.vercel.app/"
                className={Styles.projectImg}
                target="_blank" rel="noopener noreferrer"
              >
                <img src="/assets/images/furniro.png" alt="Furniro" />
              </a>
              <a href="https://furniro-by-abd.vercel.app/"
              target="_blank" rel="noopener noreferrer">
                <BtnMain label="Furniro" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
