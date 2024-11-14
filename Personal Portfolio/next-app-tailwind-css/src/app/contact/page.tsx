import Styles from "./Contact.module.css";

const page = () => {
  return (
    <section className={Styles.contactSection}>
      <div className={Styles.contactContainer}>
        <div className={Styles.contactMain}>
          <div className={Styles.contactContent}>
            <div className={Styles.contactHeading}>
              <h2><span>Contact</span> us at.</h2>
              <p className={Styles.contactPara}>
              I am actively present on various platforms, making sure to respond quickly and effectively to your messages. Whether its a small query or a detailed discussion, feel free to reach out! Your thoughts and feedback are always valued, and I look forward to hearing from you.
              </p>
            </div>
            <div className={Styles.contactLinks}>
              <li>
                <span>Email:</span>{" "}
                <a href="mailto:myselfabdullah360@gmail.com">
                  myselfabdullah360
                </a>
              </li>
              <li>
                <span>Linkedin:</span>{" "}
                <a href="https://www.linkedin.com/in/m-abdullah-nadeem/">
                  Muhammad Abdullah
                </a>
              </li>
            </div>
          </div>
          <form className={Styles.contactForm}>
            <div className={Styles.contactHeading}>
              <h2>Write us a <span>message!</span></h2>
            </div>
            <div className={Styles.contactFormInputs}>
              <div className={Styles.contactInputContainer}>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={Styles.contactInput}
                />
              </div>
              <div className={Styles.contactInputContainer}>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className={Styles.contactInput}
                />
              </div>
              <div className={Styles.contactInputContainer}>
                <textarea
                  cols={3}
                  rows={6}
                  placeholder="Write a message"
                  className={Styles.contactInput}
                ></textarea>
              </div>

              <div className={Styles.contactBtn}>
                <p>Contact Us</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
