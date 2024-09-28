"use client";
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { slideUp , animateLeft , animateRight , showText } from './anim';

const words = ["Dev Qasim", "Dev Qasim"];

export default function Index() {
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }


    return (

        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
                {dimension.width > 0 && (
                    <div className={styles.loader}>
                        <motion.div variants={animateLeft} initial="initial" animate="exit" className={styles.topClip}>
                            <div className={styles.marquee}>
                                <div className={styles.marqueeContainer}>
                                    {words.map((item, Index) => (
                                        <motion.span variants={showText} initial="initial" animate="exit" key={Index}>{item}</motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={animateRight} initial="initial" animate="exit" className={styles.middleClip}>
                            <div className={styles.marquee}>
                                <div className={styles.marqueeContainer}>
                                    {words.map((item, Index) => (
                                        <motion.span variants={showText} initial="initial" animate="exit" key={Index}>{item}</motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={animateLeft} initial="initial" animate="exit" className={styles.bottomClip}>
                            <div className={styles.marquee}>
                                <div className={styles.marqueeContainer}>
                                    {words.map((item, Index) => (
                                        <motion.span variants={showText} initial="initial" animate="exit" key={Index}>{item}</motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                      <svg>
                       <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                     </svg>
                    </div>
            )}
        </motion.div>
    );
}
