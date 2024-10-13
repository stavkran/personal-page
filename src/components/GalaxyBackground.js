// src/components/GalaxyBackground.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GalaxyBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup basic Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create star points
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    
    const starCount = 10000; // Number of stars
    const positions = new Float32Array(starCount * 3); // x, y, z for each star

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000; // Randomly position each star in space
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Camera position
    camera.position.z = 1000;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars for a nice effect
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, }} />;
};

export default GalaxyBackground;
