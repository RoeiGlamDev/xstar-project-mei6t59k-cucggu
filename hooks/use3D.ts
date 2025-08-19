import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for handling 3D interactions in GlamCS cosmetics website.
 * This hook sets up a 3D scene using Three.js to enhance the user experience 
 * and provide an elegant, luxury feel that aligns with the GlamCS brand.
 *
 * @module use3D
 * @returns {void}
 */
const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

    useEffect(() => {
        // Create the 3D scene
        sceneRef.current = new THREE.Scene();
        
        // Set up the camera
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current.position.z = 5;

        // Create the renderer
        rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(rendererRef.current.domElement);

        // Add lighting to create a luxurious effect
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        sceneRef.current.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        sceneRef.current.add(directionalLight);

        // Create a 3D object (e.g., a cosmetics product)
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // GlamCS orange
        const cube = new THREE.Mesh(geometry, material);
        sceneRef.current.add(cube);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            rendererRef.current?.render(sceneRef.current, cameraRef.current!);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            cameraRef.current!.aspect = width / height;
            cameraRef.current!.updateProjectionMatrix();
            rendererRef.current!.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);
        
        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
                document.body.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
        renderer: rendererRef.current,
    };
};

export default use3D;