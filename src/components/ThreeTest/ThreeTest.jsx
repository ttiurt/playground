import React from "react"
import styles from "./ThreeTest.module.css"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"




const ThreeTest = () => {
  return (
    <div className={styles.ThreeCntnr}>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3, 2, 1]}/>
        <mesh>
          <boxGeometry args={[5, 2.5, .05]}/>
          <meshStandardMaterial color="white"/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default ThreeTest