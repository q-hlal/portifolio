'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp, textShow } from './animation';
import { motion } from 'framer-motion';
import FlotingScene from './model/FlotingScene'
import AvatarScene from './model/AvatarScene';

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main style={{ background: "grey" }} variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <FlotingScene />
      <div className={styles.sliderContainer} >
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Web Desginer & Developer -</p>
          <p ref={secondText}>Web Desginer & Developer -</p>
        </div>
      </div>
      <AvatarScene />
      <motion.div variants={textShow} initial="initial" animate="animate" className={styles.description}>
        <p>Hello I'm Qasim</p>
        <p>3D Web Developer & Designer</p>
      </motion.div>
    </motion.main>
  )
}
