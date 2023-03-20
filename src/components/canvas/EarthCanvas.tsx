import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import CanvasLoader from './CanvasLoader';

const Earth: React.FC = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas: React.FC = () => (
  <Canvas
    shadows
    frameloop="demand"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
  >
    <React.Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />

      <Preload all />
    </React.Suspense>
  </Canvas>
);

export default EarthCanvas;
