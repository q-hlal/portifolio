"use client";
import { useRef, useState } from 'react';
import styles from './style.module.scss';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";


const Page = () => {
  const service = process.env.NEXT_PUBLIC_SERVICE_KEY
  const template = process.env.NEXT_PUBLIC_TEMPLATE_KEY
  const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD_KEY


  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handelSubmit = e => {
    e.preventDefault();
    emailjs.sendForm( service, template, ref.current, PASSWORD)
    .then((result) => {
      console.log(result.text)
      setSuccess(true)
    }, (error) => {
      console.log(error.text);
      setSuccess(false)
    });
  }

  return (
    <motion.div 
      className={styles.getTouch}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.body}>
        <div className={styles.left}>
          <motion.div
            className={styles.contactTitle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1>Welcome Here</h1>
            <p>Dear Mrs/Mr feel very comfortable to leave me a message, whether to motivate me in my work or to advice me , to make me giveing the best in this feild .</p>
          </motion.div>
          <div className={styles.contactInfo}>
            <div className={styles.icongroup}>
              <motion.div
                className={styles.iconContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <FaPhone className={styles.icon} />
              </motion.div>
              <div className={styles.details}> 
                <span>Number</span>
                <span>+968 782 352 7603</span>
              </div>
            </div>
            <div className={styles.icongroup}>
              <motion.div
                className={styles.iconContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <MdEmail className={styles.icon} />
              </motion.div>
              <div className={styles.details}> 
                <span>Email</span>
                <span>qhlal881@gmail.com</span>
              </div>
            </div>
            <div className={styles.icongroup}>
              <motion.div
                className={styles.iconContainer}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <FaLocationDot className={styles.icon} />
              </motion.div>
              <div className={styles.details}> 
                <span>Location</span>
                <span>IRAQ / WASIT-KUT/ AL-ZHRAA Street</span>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <form  ref={ref} className={styles.form} onSubmit={handelSubmit}>
            <h2 className={styles.title}>Contact Me</h2>
            <motion.input
              placeholder='Name'
              name='name'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <motion.input
              placeholder='Email'
              name='email'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <motion.textarea
              placeholder='Write message for me'
              rows={9}
              name='message'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.button
              type='submit'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Send
            </motion.button>
            {success !== null && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className={success ? styles.successMessage : styles.errorMessage}
              >
                {success ? "Your message has been sent successfully. I will answer soon. Thank you for your time." : "An error occurred while sending the message. Please try again later."}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Page;
