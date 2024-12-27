import Styles from "./Projects.module.css";
import BtnMain from "../components/BtnMain";
import React from "react";

const page = () => {
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
              <p className={Styles.projectPara}>
                A comprehensive resume builder tool that helps users craft
                professional resumes effortlessly, featuring customizable
                templates, guided sections, and styling options to make an
                impactful impression.
              </p>
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
              <p className={Styles.projectPara}>
              A sleek ecommerce furniture platform offering a curated selection of stylish and functional home furnishings, simplifying the shopping experience to deliver quality, comfort, and elegance directly to your living space.
              </p>
              <a href="https://furniro-by-abd.vercel.app/"
              target="_blank" rel="noopener noreferrer">
                <BtnMain label="Furniro" />
              </a>
            </div>
            <div className={Styles.projectCard}>
              <h3>My Best Work</h3>
              <a
                href="https://blogabd-v2.vercel.app/"
                className={Styles.projectImg}
                target="_blank" rel="noopener noreferrer"
              >
                <img src="/assets/images/blogabd.png" alt="Blog Abd" />
              </a>
              <p className={Styles.projectPara}>
                A personal blog created by Muhammad Abdullah to share insights,
                knowledge, and updates on topics like technology, development,
                and career advice, offering readers valuable information and
                inspiration.
              </p>
              <a href="https://blogabd-v2.vercel.app/"
              target="_blank" rel="noopener noreferrer">
                <BtnMain label="Blog Abd" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
