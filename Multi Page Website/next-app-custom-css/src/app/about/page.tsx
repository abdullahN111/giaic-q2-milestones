import Styles from "./About.module.css";

function About() {
  return (
    <main className={Styles.aboutMain}>
      <div className={Styles.aboutContainer}>
        <h1 className={Styles.aboutHeading}>About Us</h1>
        <p className={Styles.aboutPara}>
          We are a dedicated team committed to sharing valuable insights,
          practical tips, and fresh perspectives across a wide range of topics.
          Our mission is to empower, inspire, and engage readers by delivering
          well-researched, thoughtful content that makes a difference. Each post
          is crafted with care, focusing on quality, relevance, and clarity. We
          believe in fostering a community where knowledge is shared openly, and
          ideas are welcomed. Join us as we explore, learn, and grow together
          through the power of words.
        </p>
        <p className={Styles.emailBtn}>
          Contact us: 
          <a
            href="mailto:myselfabdullah360@gmail.com"
            className={Styles.contactBtn}
          >
          myselfabdullah360@gmail.com
          </a>
        </p>
        <p className={Styles.contactPageBtn}>
          Or see our:
          <a href="/contact-us">
            <span className={Styles.contactBtn}> Contact Page</span>
          </a>
        </p>
      </div>
    </main>
  );
}

export default About;
