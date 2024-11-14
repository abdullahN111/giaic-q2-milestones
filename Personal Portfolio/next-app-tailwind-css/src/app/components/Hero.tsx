import Styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={Styles.heroSection}>
      <div className={Styles.heroContainer}>
        <div className={Styles.heroMain}>
          <div className={Styles.heroLeft}>
            <h1 className={Styles.heroHeading}>Muhammad Abdullah</h1>
            <span>Front End Developer</span>
            <p className={Styles.heroPara}>
              Bringing creativity and technology together to build seamless,
              engaging digital experiences. From responsive interfaces to
              scalable, clean code, I&apos;m here to elevate your vision in the
              digital world. With expertise in Next.js, React.js, and Tailwind
              CSS, I craft solutions that are as functional as they are visually
              captivating. Let&apos;s create something remarkable together!
            </p>
            <div className={Styles.heroButtons}>
              <p className={`${Styles.hireBtn} ${Styles.btnMain}`}>Hire me</p>
              <p className={Styles.resumeBtn}>My Resume</p>
            </div>
          </div>
          <div className={Styles.heroRight}>
            <div className={Styles.heroImage}>
              <img src="/assets/images/heroImage.png" alt="A man" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
