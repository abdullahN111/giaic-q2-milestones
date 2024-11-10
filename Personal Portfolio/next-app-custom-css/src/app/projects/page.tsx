import Styles from './Projects.module.css'
import BtnMain from '../components/BtnMain'
import React from 'react'

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
              >
                <img src="/assets/images/project1.jpg" alt="Resume Abd" />
              </a>
              <p>A comprehensive resume builder tool that helps users craft professional resumes effortlessly, featuring customizable templates, guided sections, and styling options to make an impactful impression.</p>
              <BtnMain label="Resume Abd" />
            </div>
            <div className={Styles.projectCard}>
              <h3>My Best Work</h3>
              <a
                href="https://303delivery.vercel.app/"
                className={Styles.projectImg}
              >
                <img src="/assets/images/303delivery.png" alt="303 Delivery" />
              </a>
              <p>A dynamic food delivery platform connecting users with local restaurants and diverse cuisine options, streamlining the ordering process to provide a quick, reliable, and enjoyable dining experience at home.</p>
              <BtnMain label="303 Delivery" />
            </div>
            <div className={Styles.projectCard}>
              <h3>My Best Work</h3>
              <a
                href="https://blogabd-v1.vercel.app/"
                className={Styles.projectImg}
              >
                <img src="/assets/images/blogabd.png" alt="Blog Abd" />
              </a>
              <p>A personal blog created by Muhammad Abdullah to share insights, knowledge, and updates on topics like technology, development, and career advice, offering readers valuable information and inspiration.</p>
              <BtnMain label="Blog Abd" />
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default page