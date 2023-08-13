/* eslint-disable react/no-unknown-property */

import styles from "./ThreeTest.module.css"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"




const ThreeTest = () => {

  const handleClick = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className={styles.ThreeCntnr}>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={2.5}/>
        <directionalLight position={[3, 2, 1]}/>
        <mesh onClick={() => handleClick('https://github.com/ttiurt')}>
          <boxGeometry args={[5, 2.5, .05]}/>
          <meshStandardMaterial color="white"/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default ThreeTest