import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/components/Projects/",
  },
  {
    title: "About",
    href: "/components/Description/",
  },
  {
    title: "Contact",
    href: "/components/Contact/",
  },
]

export default function index() {


  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
            <div className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        >
                        </Link>
                      })
                    }
            </div>
        </div>
        <Curve />
    </motion.div>
  )
}