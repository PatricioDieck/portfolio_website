import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"


const Earth = () => {
  const earth = useGLTF("./manhattan/scene.gltf")
  
  return (
    <mesh>
      <hemisphereLight 
        skyColor={'#FFDAB9'} // peachy color
        groundColor='orange' 
        intensity={0.9}
      />
      <directionalLight
        position={[-50, 75, 100]} // set the direction of the light
        color={'#FFD700'} // golden color
        intensity={0.5}
        castShadow
      />
      <spotLight
        position={[-20, 50, 90]}
        angle={0.08}
        penumbra={2}
        intensity={0.5} 
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        position={[0, 0, 0]}
        camera={{fov: 45, near: 0.1, far: 200, position: [0, 43, 76]}}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop="demand"
      gl= {{preserveDrawingBuffer: true}}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate={true}
          autoRotateSpeed={0.2}
          enableZoom={false}
          minDistance={6.8} maxDistance={6.8}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} 
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas