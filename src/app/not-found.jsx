"use client"
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import ClassPage from './errorPage/ClassPage'
import gsap from 'gsap'

const Page = () => {
  
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('h1', { scale: 0,}, { scale: 1 });
    tl.fromTo('h3', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 });
  }, []);

  return (
    <div className={styles.errorPage}>
      <h1>404</h1>
      <h3>It's broken. The link you are trying to access does not exist!</h3>
      <h3>Go back, or navigate to another page.</h3>
      <ClassPage/>
    </div>
  );
};

export default Page;
