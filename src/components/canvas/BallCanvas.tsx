import {
  Decal, Float, OrbitControls, Preload, useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import CanvasLoader from './CanvasLoader';

type BallProps = {
  imgUrl: string;
};

const Ball: React.FC<BallProps> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  icon: any;
};

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => (
  <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    <React.Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </React.Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
