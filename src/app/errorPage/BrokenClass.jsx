import React from 'react'
import { Float, useGLTF } from '@react-three/drei'

export function BrokenClass(props) {
  const { nodes } = useGLTF('/model/brokenClass.glb')

  const setMaterialProperties = (material) => {
    material.transparent = true; 
    material.opacity = 0.5;
  };

  Object.values(nodes).forEach((node) => {
    if (node.material) {
      setMaterialProperties(node.material);
    }
  });

  return (
    <group {...props} dispose={null}>
      <Float>
        {Object.values(nodes).map((node, index) => (
          <mesh key={index} geometry={node.geometry} material={node.material} position={[0.016, -0.082, 0]} />
        ))}
      </Float>
    </group>
  )
}

useGLTF.preload('/model/brokenClass.glb');
