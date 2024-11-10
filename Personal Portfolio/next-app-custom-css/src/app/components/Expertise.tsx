import Styles from "./Expertise.module.css";

const Expertise = () => {
  return (
    <section className={Styles.expertiseSection}>
      <div className={Styles.expertiseHeading}>
        <h2>
          Skills <span>&</span> Expertise
        </h2>
      </div>
      <div className={Styles.expertiseContainer}>
        <div className={Styles.expertiseMain}>
          <img
            src="/assets/logos/next.png"
            alt="next js logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/python.png"
            alt="python logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/react.webp"
            alt="react js logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/tailwind.png"
            alt="tailwind css logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/typescript.png"
            alt="typescript logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/next.png"
            alt="next js logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/python.png"
            alt="python logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/react.webp"
            alt="react js logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/tailwind.png"
            alt="tailwind css logo png"
            className={Styles.img}
          />
          <img
            src="/assets/logos/typescript.png"
            alt="typescript logo png"
            className={Styles.img}
          />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
