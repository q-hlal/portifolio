'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function page() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <Link href="/">
            <div className={styles.logo}>
                <img src='/images/logo.png' />
            </div>
            </Link>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/components/Projects/">Work</Link>
                        <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143"><path d="M546.214 89.072c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5 273.357.5c150.695 0 272.857 39.655 272.857 88.572z"/></svg>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/components/Description/">About</Link>
                        <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143"><path d="M546.214 89.072c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5 273.357.5c150.695 0 272.857 39.655 272.857 88.572z"/></svg>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/components/Contact/">Contact</Link>
                        <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143"><path d="M546.214 89.072c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5 273.357.5c150.695 0 272.857 39.655 272.857 88.572z"/></svg>
                    </div>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
