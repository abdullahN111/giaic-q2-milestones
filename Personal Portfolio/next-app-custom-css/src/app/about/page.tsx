import Styles from "./About.module.css";

const page = () => {
  return (
    <section className={Styles.aboutSection}>
      <div className={Styles.aboutContainer}>
        <div className={Styles.aboutMain}>
          <h1>
            <span>About</span> me
          </h1>
          <p>
            Hello! I&apos;m Muhammad Abdullah, a passionate Front-End Developer with
            a strong foundation in building interactive, responsive, and
            visually appealing websites. I&apos;m currently an undergraduate diving
            deep into the world of web development, and I love transforming
            creative ideas into functional, user-friendly interfaces. With
            expertise in Next.js, React.js, Python, and Tailwind CSS, I focus on
            writing clean, efficient, and scalable code that enhances the user
            experience. My goal is to merge my technical
            skills with my creative flair to deliver seamless digital
            experiences. I&apos;m always eager to learn and stay updated with the
            latest trends in the ever-evolving world of front-end development.
            When I&apos;m not coding, you can find me exploring new technologies,
            improving my skills, or contributing to open-source projects. I am
            open to collaboration, and I am constantly looking for opportunities
            to grow and take on new challenges.
          </p>
          <a href="#">Meet me</a>
          <p>I&apos;m here to connect and discuss how we can work together. Feel free to reach out if you&apos;re looking for a dedicated and detail-oriented front-end developer to bring your vision to life!</p>
        </div>
      </div>
    </section>
  );
};

export default page;
