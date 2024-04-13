import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from '../../animation';

export default function Index({data}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={styles.link} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <Link href={href}>{title}</Link>
        <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143"><path d="M546.214 89.072c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5 273.357.5c150.695 0 272.857 39.655 272.857 88.572z"/></svg>
      </motion.div>
    )
}