import styles from '@/styles/ContactForm.module.css';

function ContactForm() {
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
      >
        <div className={styles.formInputs}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="exampleInputEmail1">Email:</label>
            <input
              type="email"
              className={styles.formControl}
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea className={styles.formControl} rows="5"></textarea>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
