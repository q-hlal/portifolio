import { Canvas } from '@react-three/fiber'
import React from 'react'
import { BrokenClass } from './BrokenClass'
import styles from '../page.module.scss'

const classPage = () => {
 
  
  return (
    <div className={styles.model}>
        <Canvas orthographic  camera={{position: [0, 0, 1], zoom: 800}}>
           <directionalLight intensity={3} position={[0, 0.1, 1]} /> 
            <BrokenClass/>
        </Canvas>
    </div>
  )
}

export default classPage