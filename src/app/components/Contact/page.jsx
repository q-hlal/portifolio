"use client";
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/Qasim(2).jpg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Link href="/components/Contact/GetTouch/">
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                        </Link>
                    </motion.div>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>qhlal881@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>+964 782 352 7603</p>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <Link href="/">
                      <p>&#8593; Back Home</p>
                    </Link>
                    <div>
                        <Link href="https://www.linkedin.com/in/qasim-hlal-5301b9253/" target='_blank' >
                            <Magnetic>
                                <p>LinkedIn</p>
                            </Magnetic>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100050964399885"  target='_blank'>
                            <Magnetic>
                                <p>Facebook</p>
                            </Magnetic>
                        </Link>
                        <Link href="https://twitter.com/wWMF4QWTapn78HK" target='_blank' >
                            <Magnetic>
                                <p>Twitter</p>
                            </Magnetic>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
