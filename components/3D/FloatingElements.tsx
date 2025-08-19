import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xff7f50 }); // Orange color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.position.y = Math.sin(Date.now()  0.001)  1; // Floating effect
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.h1 
        className="text-4xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to GlamCS
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-700 mb-8" 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover high-end cosmetics that elevate your beauty routine. 
        Our luxurious products are designed to accentuate your natural beauty.
      </motion.p>
      <Canvas className="w-full h-96">
        <OrbitControls />
        <ambientLight />
        <FloatingSphere />
      </Canvas>
    </div>
  );
};

const FloatingSphere: React.FC = () => {
  return (
    <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#ff7f50" />
    </mesh>
  );
};

export default FloatingElements;