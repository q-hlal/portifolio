"use client";
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

const Page = () => {
  const params = useSearchParams();
  const title = params.get("title");
  const descrption = params.get("descrption");
  const images = JSON.parse(params.get("imgArray"));

  return (
    <div className={styles.singlePage}>
      <motion.div 
        className={styles.body}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className={styles.title}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className={styles.imgContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {images.map((img, index) => (
            <div key={index}>
            <motion.img 
              src={`/images/${img}`} 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            />
          </div>
          ))}
        </motion.div>
        <motion.p 
          className={styles.descrption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {descrption}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Page;
