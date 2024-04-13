'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Cinema",
    src: "img(22).png",
    type : "Design & Development",
    color: "#EFE8D3",
    imgArray : ["img(22).png" , "img(23).png" , "img(24).png"],
    descrption: "  Cinema app built using React.js. this app made a seamless fusion of modern design and responsive CSS, ensuring an optimal viewing experience on any device. Explore a meticulously curated selection of films spanning genres, from timeless classics to the latest releases. "
  },
  {
    title: "E-Commertiol",
    src: "img1.png",
    type : "Design & Development",
    color: "#000000",
    imgArray : ["img1.png" , "img2.png" , "img4.png", "img5.png"],
    descrption: "Discover an immersive e-commerce journey with our React-powered app. Seamlessly blending modern design with interactive features, it offers a personalized shopping experience. Engage, explore, and indulge in a world of endless possibilities, all at your fingertips."
  },
  {
    title: "MOD",
    src: "img(15).png",
    type : " 3D Design & Development",
    color: "#706D63",
    imgArray : ["img(14).png" , "img(15).png" , "img(16).png" , "img(17).png"],
    descrption: "Experience the future of defense with our MOD landing page, blending React, Three.js, and Drie for immersive 3D interactions , add animation useing gsap edit with modern layout designed to inform and inspire."
}
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Projects() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

  return (
  <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return (
            <Link href={{ pathname : `/components/Projects/${index + 1}`, 
            query:{
            title : project.title ,
            descrption : project.descrption,
            imgArray: JSON.stringify(project.imgArray)           
          },
            }}>
             <Project index={index} title={project.title} manageModal={manageModal} key={index} descrption={project.descrption} type={project.type}/>
            </Link>
          )
        })
      }
    </div>
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Image 
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  </main>
  )
}
