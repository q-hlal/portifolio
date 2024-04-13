import { Canvas } from '@react-three/fiber'
import React from 'react'
import {Model} from './Avatar'
import styles from '../style.module.scss'

const AvatarScene = () => {

  return (
    <div className={styles.model} >
     <Canvas camera={{ position: [0, 2, 6], fov: 25 }} >
        <ambientLight intensity={3}/>
        <Model/>
     </Canvas>
    </div>
  )
}

export default AvatarScene