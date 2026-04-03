import { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import styles from '../styles/ContactSection.module.css';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });

  const currentTime = useMemo(
    () =>
      new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date()),
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState({
        status: 'error',
        message:
          'Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to enable email sending from this form.',
      });
      return;
    }

    setSubmitState({ status: 'loading', message: 'Sending your message...' });

    try {
      // EmailJS credentials come from Vite environment variables at build time.
      await emailjs.send(
        serviceId,
        templateId,
        {
          ...formData,
          time: currentTime,
        },
        {
          publicKey,
        },
      );

      setSubmitState({
        status: 'success',
        message: 'Your message has been sent successfully.',
      });
      setFormData(initialForm);
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: 'Something went wrong while sending the message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful"
          description="Have a project, internship opportunity, or collaboration in mind? Reach out here."
        />

        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className={styles.contactCopy}>
            <span className={styles.kicker}>Open to learning, building, and collaborating.</span>
            <h3>Send a message</h3>
            <p>
              Got a project in mind or just want to connect? I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <div className={styles.details}>
              <a href="mailto:chandasrija730@gmail.com" title="Email me">
                <FaEnvelope size={24} />
              </a>
              <a href="https://github.com/SRIJA-CHANDA" target="_blank" rel="noreferrer" title="Visit my GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/srija-chanda-73308a315/" target="_blank" rel="noreferrer" title="Connect on LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </label>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help?"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your idea..."
                rows="5"
                required
              />
            </label>

            <button type="submit" className={styles.submitButton} disabled={submitState.status === 'loading'}>
              {submitState.status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {submitState.message ? (
              <p
                className={
                  submitState.status === 'success' ? styles.successMessage : styles.errorMessage
                }
              >
                {submitState.message}
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
