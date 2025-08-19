import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  return (
    <div className="relative w-full h-screen bg-white">
      <motion.h1 
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-orange-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>

      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/ Add your 3D models here /}
        <mesh position={[-1.2, 0, 0]} onClick={() => alert('Lipstick clicked!')} className="hover:scale-105 transition-transform duration-300">
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        <OrbitControls />
      </Canvas>

      <footer className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-lg text-gray-600">Explore the world of luxury cosmetics with GlamCS.</p>
        <a href="#shop" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
          Shop Now
        </a>
      </footer>
    </div>
  );
};

export default Scene;