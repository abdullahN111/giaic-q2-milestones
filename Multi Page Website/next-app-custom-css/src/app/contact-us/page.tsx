import Styles from './Contact.module.css'

function ContactUs() {
  return (
    <form className={Styles.contactFormContainer}>
      <div className={Styles.contactHeadingContainer}>
        <h1 className={Styles.contactHeading}>Write us a message</h1>
      </div>

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
    </form>
  );
}

export default ContactUs;
