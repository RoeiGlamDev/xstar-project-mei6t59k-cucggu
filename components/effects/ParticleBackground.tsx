import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Sprite[] = [];
    const particleCount = 2000;

    const particleTexture = new THREE.TextureLoader().load('path/to/your/particle-texture.png');
    
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Sprite(new THREE.SpriteMaterial({ map: particleTexture, color: 0xffa500 }));
      particle.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      particle.scale.set(0.5, 0.5, 1);
      particles.push(particle);
      scene.add(particle);
    }

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach(particle => {
        particle.position.y += 0.01  Math.sin(Date.now()  0.001 + particle.position.x);
        particle.position.x += 0.01  Math.sin(Date.now()  0.001 + particle.position.y);
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <motion.div 
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-white mb-4">Welcome to GlamCS</h1>
        <p className="text-xl text-white mb-8">Elevate your beauty with our luxurious cosmetics.</p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out">
          Shop Now
        </button>
      </motion.div>
    </div>
  );
};

export default ParticleBackground;