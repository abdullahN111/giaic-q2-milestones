import Styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={Styles.heroSection}>
      <div className={Styles.heroContainer}>
        <div className={Styles.heroMain}>
          <div className={Styles.heroLeft}>
            <h1 className={Styles.heroHeading}>Muhammad Abdullah</h1>
            <span>Front End Developer</span>
            <p className={Styles.heroPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              fugit corrupti. Eum ea in omnis fugiat quos asperiores nesciunt
              facere minus, officiis et earum eveniet assumenda, dolorem placeat
              dolor iure! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatum, aliquid.
            </p>
            <div className={Styles.heroButtons}>
              <p className={`${Styles.hireBtn} ${Styles.btnMain}`}>Hire me</p>
              <p className={Styles.resumeBtn}>My Resume</p>
            </div>
          </div>
          <div className={Styles.heroRight}>
            <div className={Styles.heroImage}>
              <img src='/assets/images/heroImage.png' alt="A man" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero