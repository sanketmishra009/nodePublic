import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Color, DirectionalLight, DodecahedronGeometry } from 'three';


const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      console.log('running');
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  }
  );

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry />
      <meshLambertMaterial color='#468585' emissive={'#468585'} />
    </mesh>
  );
}


const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate enableDamping />
      <directionalLight position={[1, 1, 1]} intensity={10} color={'#CD6BA9'} />
      <color attach='background' args={['#F0F0F0']} />
      <RotatingCube />

    </Canvas>
  )
}

export default App
