"use client";
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { slideUp, opacity  , imgShow} from './animation';
import Rounded from '../../common/RoundedButton';
import Link from 'next/link';
import { AiFillCode } from "react-icons/ai";
import { FaCube } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { LuArrowDownRightFromCircle } from "react-icons/lu";
import { MdCompareArrows } from "react-icons/md";




export default function Description() {
  const [TextChang , setTextChang] = useState(false)

    const handleClick = () => {
        setTextChang(prevState => !prevState);
      };

    const phrase = ["All the services " ,<FaCube  className={styles.icon} title=' Web desgien'/> ,<AiFillCode className={styles.icon} title='Web development'/> , <MdSecurity className={styles.icon} title='Securety & Api'/>  , " you need and more are here want to know more about me ", <LuArrowDownRightFromCircle className={styles.icon}/> , " , or contact me just go" ,<Link href="/components/Contact/GetTouch"><div>Here.</div></Link>]
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description} >
            <div className={styles.body}>
              <div className={styles.left}>
                <div>
                {
                    phrase.map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </div>
                { !TextChang ?
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>  I immerse myself in the realms of development, diving deep into coding and problem-solving. From crafting efficient algorithms to architecting robust systems, I bring ideas to life with precision and innovation. 🚀 Let's not just write code, but create impactful solutions together! 💻✨.</motion.p> :
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}> Besides developing apps, I also focus on design and provide several solutions to showcase good and responsive layouts, as well as well-done modren edits. 🎨✨ .</motion.p>}
               { TextChang ? <motion.img  variants={imgShow} initial="initial" animate={isInView ? "animate" : "exit"} src="/images/deveolped.png" className={styles.bgImg}/> :
                <motion.img variants={imgShow} initial="initial" animate={isInView ? "animate" : "exit"} src="/images/desgin.png" className={styles.bgImg}/>
                }
              </div>
              <motion.div className={styles.right} variants={opacity} animate={isInView ? "open" : "closed"}>
                <div>
                <div className={styles.flibIcon} onClick={handleClick}><MdCompareArrows/></div>
                    <img src='/images/Qasim(2).jpg' width={400} alt='img'/>
                    <Link href="/components/Description/AboutMe">
                    <Rounded className={styles.button}>
                        <p>Get more</p>
                    </Rounded>
                    </Link>
                </div>
              </motion.div>
            </div>
        </div>
    )
}
