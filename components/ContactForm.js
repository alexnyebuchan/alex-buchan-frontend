import styles from '@/styles/ContactForm.module.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jfgkb9f',
        'template_io18brl',
        form.current,
        'vm2Kp0Jqd19jQ4LfD'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, '3000');
  };

  return (
    <div className={styles.contactContainer}>
      <p>
        For anything, it's{' '}
        <a
          className={styles.email}
          target="_blank"
          href="mailto: alexnyebuchan@gmail.com"
        >
          alexnyebuchan@gmail.com
        </a>{' '}
        - otherwise please fill out the form below and I'll get back to you as
        soon as possible.
      </p>
      <form
        className={styles.form}
        id="contact-form"
        // onSubmit={this.handleSubmit.bind(this)}
        method="POST"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className={styles.formInputs}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="user_name">
              Name:
            </label>
            <input
              type="text"
              className={styles.formControl}
              required
              name="user_name"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="user_email">
              Email:
            </label>
            <input
              type="email"
              className={styles.formControl}
              required
              name="user_email"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="user_message">
              Message:
            </label>
            <textarea
              className={styles.formControl}
              name="user_message"
            ></textarea>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
      {sent && (
        <div className={styles.sent}>Thank you, your email has been sent.</div>
      )}
    </div>
  );
}

export default ContactForm;
