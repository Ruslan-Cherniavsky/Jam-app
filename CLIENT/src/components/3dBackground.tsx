import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// import { EffectComposer, RenderPass, BloomPass } from 'postprocessing';

const Background3d = () => {
    const sceneRef: React.MutableRefObject<any> = useRef();
    const rendererRef: React.MutableRefObject<any> = useRef();
    const cameraRef: React.MutableRefObject<any> = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            100,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 10);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;

        // Create stars background
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
        const starsCount = 50000;
        const positions = new Float32Array(starsCount * 3);

        const distance = 3000; // Adjust this value for a wider range of stars

        for (let i = 0; i < starsCount * 3; i += 3) {
            const x = (Math.random() - 0.5) * distance;
            const y = (Math.random() - 0.5) * distance;
            const z = (Math.random() - 0.5) * 5000;
            positions[i] = x;
            positions[i + 1] = y;
            positions[i + 2] = z;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        sceneRef.current.appendChild(renderer.domElement);






        // Variables for animation
        const cameraSpeed = 1.1; // Adjust the speed of forward movement

        const rotationSpeed = 0.00003; // Adjust the speed of camera rotation

        const rotationRadius = 1315; // Adjust the radius of the rotation circle


        const targetPoint = new THREE.Vector3(0, 0, -rotationRadius);

        // Function to animate the camera movement
        const animateCamera = () => {

            const time = Date.now() * rotationSpeed;
            const angle = time % (Math.PI * 2);


            camera.position.z -= cameraSpeed; // Move camera forward

            camera.position.x = Math.sin(angle) * rotationRadius;
            camera.position.z = Math.cos(angle) * rotationRadius;
            camera.lookAt(targetPoint);


            camera.lookAt(scene.position);
        };

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            animateCamera();
            rendererRef.current.render(scene, camera);
        };




        animate();

        return () => {
            sceneRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,
            width: '100%',
            height: '100%',
        }}
        ref={sceneRef}
    />;
};

export default Background3d;