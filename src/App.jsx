import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useMediaQuery } from '@mui/material'

export default function App() {
  const gltf = useLoader(
    GLTFLoader,
    'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/models/monkey.glb'
  )
  const isDesktop = useMediaQuery('(min-width:1120px)')
  return (
    <div
      id="canvas-container"
      style={{
        position: 'relative',
        width: '100vw',
        maxHeight: '905px',
        height: isDesktop ? '100%' : '50vh'
      }}>
      <Canvas camera={{ rotation: [0, 0.0, 0], position: [0, 0, 3], fov: 45, far: 10000 }}>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI * 0.5} minDistance={2} maxDistance={5}></OrbitControls>
        <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
          background
          blur={1.0}></Environment>
        <primitive object={gltf.scene} position={[0, 1, 0]} />
        {/* <directionalLight position={[3.3, 1.0, 4.4]} /> */}

        {/* <OrbitControls target={[0, 1, 0]} autoRotate /> */}
        {/* <axesHelper args={[5]} />
      <Stats /> */}
      </Canvas>
    </div>
  )
}
