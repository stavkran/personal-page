import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const BackgroundModel = () => {
    useEffect(() => {
        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Append renderer to the DOM
        document.body.appendChild(renderer.domElement);

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(4, 5, 11);

        // Ground plane
        const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        groundGeometry.rotateX(-Math.PI / 2);
        const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x555555,
        side: THREE.DoubleSide
        });

        //Ground mesh
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
        groundMesh.castShadow = false;
        groundMesh.receiveShadow = true;
        scene.add(groundMesh);

        const spotLight = new THREE.SpotLight(0xffffff, 3, 100, 0.2, 0.5);
        spotLight.position.set(0, 25, 0);
        scene.add(spotLight);

        const loader = new GLTFLoader().setPath('C:/Users/stavk/personalpage/personal-page/src/components/backgroundModel.js');

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();
    
    }, []);

};

export default BackgroundModel;