import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGlTF} from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = () => {
  //pass in the computer scene (path to gltf file)
  const computer = useGlTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight 
      intensity={0.15}
      groundColor='black' />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
         />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop='demand'
      shadows
      dpr={[1, 2]}
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
      >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
        <Computers />

      </Suspense>
      <Preload all />
    </Canvas>
  );
;}

export default ComputersCanvas