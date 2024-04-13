"use client";
import styles from './style.module.scss'
import { FaFacebook , FaLinkedin , FaFileDownload} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { PiStrategyBold } from "react-icons/pi";
import { TbZoomQuestion } from "react-icons/tb";
import { MdSecurityUpdateGood } from "react-icons/md";
import gsap from 'gsap';
import { useEffect } from 'react';



const page = () => {

  useEffect(() => {
    gsap.fromTo('.left', { opacity: 0, x: -1000 }, { opacity: 1, x: 0, duration: 1.5, ease: 'power4.out' });
    gsap.fromTo('.right', { opacity: 0, x: 1000 }, { opacity: 1, x: 0, duration: 1.5, ease: 'power4.out' });
    gsap.fromTo('.right div', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' , stagger: 0.3});
  }, []);
  

  return (
    <div className={styles.aboutMe}>
        <div className={styles.body}>
          <div className={`${styles.left} left`}>
                <div className={styles.top}>
                    <img src='/images/Qasim.jpg'/>
                    <div>
                    <a href="/images/cv.png" download><i><FaFileDownload />CV</i></a>
                    <h3>alweys look's for more</h3>
                       <nav>
                        <Link href="https://www.facebook.com/profile.php?id=100050964399885"  target='_blank'><i><FaFacebook/></i></Link>
                        <Link href="https://www.linkedin.com/in/qasim-hlal-5301b9253/" target='_blank'><i><FaLinkedin/></i></Link>
                        <Link href="https://twitter.com/wWMF4QWTapn78HK" target='_blank' > <i><FaSquareXTwitter/></i></Link>
                      </nav>
                    </div>
                </div>
                <div className={styles.buttom}>
                <h1>Profile</h1>
                <p><b>Hello, I'm Qasim a Front-end Developer from Iraq</b> a passionate developer with 3 years of experience Web Design and development. Specializing in building dynamic and user-centric web applications, I thrive on bringing ideas to life through code.With expertise in HTML CSS & Java Script, I aim to deliver captivating experiences that leave a lasting impression. Beyond front-end development, I'm also skilled in 3D Design, sculpting immersive digital environments and designing sleek UI elements.</p>
                </div>
            </div>
            <div className={`${styles.right} right`}>
              <h1>The Process of My Work</h1>
              <div>
                <div>
                  <h3><PiStrategyBold/>Strategy</h3>
                  <p>My work process begins with the inception of the app idea. I brainstorm various concepts and meticulously analyze their potential, aiming to refine and modernize them to their fullest extent. I immerse myself in a pool of innovative ideas, constantly seeking inspiration and refining my thoughts to ensure the best possible outcome.</p>
                </div>
                <div>
                  <h3><TbZoomQuestion/>Ideation</h3>
                  <p>Once I gather all necessary insights and ideas, the main concept of the app starts to crystallize. I blend together various elements, exploring different angles and possibilities to shape a coherent and compelling vision for the project. This phase is crucial for laying down a solid foundation that aligns with the project's objectives and user needs.</p>
                </div>
                <div>
                  <h3><MdSecurityUpdateGood/>Results</h3>
                  <p>My ultimate goal is to deliver tangible results that surpass expectations. I prioritize the delivery of high-quality solutions that not only fulfill project requirements but also delight users and achieve business goals. By focusing on tangible outcomes, I ensure that every step of the process contributes to the overall success of the project.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page