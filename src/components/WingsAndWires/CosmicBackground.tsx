'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WalleComponent from './WalleComponent';

/**
 * SaturnBackground Component
 * Renders a full-screen, rotating wireframe model of Saturn. The planet's
 * position animates along a predefined path as the user scrolls down the page,
 * while also reacting to the user's cursor for a parallax effect.
 */
export const CosmicBackgroundDesktop = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  // A ref to store the current scroll position.
  const scroll = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // --- Create an invisible pivot point ---
    const pivot = new THREE.Group();
    const axialTilt = 26.7 * (Math.PI / 180);
    pivot.rotation.z = axialTilt;
    scene.add(pivot);

    // --- Create Wireframe Saturn ---
    const saturnGroup = new THREE.Group();
    pivot.add(saturnGroup);

    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x9400D3, // Glowing violet color
        wireframe: true,
    });

    const planetGeometry = new THREE.SphereGeometry(4, 32, 32);
    const planet = new THREE.Mesh(planetGeometry, wireframeMaterial);
    saturnGroup.add(planet);

    const ringGeometry = new THREE.TorusGeometry(6, 0.4, 16, 100);
    const ring = new THREE.Mesh(ringGeometry, wireframeMaterial);
    ring.rotation.x = Math.PI / 2; 
    saturnGroup.add(ring);
    
    camera.position.z = 12;

    // --- Event Listeners ---
    const handleMouseMove = (event: MouseEvent) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    // This function updates the scroll ref whenever the user scrolls
    const handleScroll = () => {
      scroll.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll); // Add scroll listener

    // --- Animation Loop ---
    let animationFrameId: number;
    const animate = () => {
        // Constant axial rotation
        saturnGroup.rotation.y += 0.005;

        // --- Scroll-based Animation ---
        // 1. Define the start and end points of the animation path.
        const startPosition = new THREE.Vector3(7, 0, 0);   // Top-right
        const endPosition = new THREE.Vector3(7, 15, 0); // Bottom-left

        // 2. Define how many pixels of scrolling it takes to complete the animation.
        const scrollRange = 1000; // e.g., the animation finishes after 1000px of scrolling.

        // 3. Calculate the progress (from 0.0 to 1.0).
        const progress = Math.min(scroll.current / scrollRange, 1.0);
        
        // 4. Calculate the base position by interpolating between start and end.
        const basePosition = new THREE.Vector3().lerpVectors(startPosition, endPosition, progress);

        // 5. Add the mouse parallax effect as an offset to the base position.
        const mouseOffsetX = mouse.current.x * 1.5;
        const mouseOffsetY = mouse.current.y * 1.5;

        const targetX = basePosition.x + mouseOffsetX;
        const targetY = basePosition.y + mouseOffsetY;

        // 6. Smoothly move the pivot to the final target position.
        pivot.position.x += (targetX - pivot.position.x) * 0.05;
        pivot.position.y += (targetY - pivot.position.y) * 0.05;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    const handleResize = () => {
        if (currentMount) {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        }
    };
    window.addEventListener('resize', handleResize);
    
    // --- Cleanup Function ---
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll); // Clean up scroll listener
        if (currentMount) {
            currentMount.removeChild(renderer.domElement);
        }
        
        planetGeometry.dispose();
        ringGeometry.dispose();
        wireframeMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1]" >
        <WalleComponent 
        initialPosition={{ x: -20, y: -20 }}
        finalPosition={{ x: -20, y: 9 }}
        scrollRange={1500}
        color="#4A00E0"
        scale={0.6}
      />
      
      <WalleComponent 
        initialPosition={{ x: 15, y: -7 }}
        finalPosition={{ x: -7, y: 20 }}
        scrollRange={2000}
        color="#8E2DE2"
        scale={0.4}
        rotationSpeed={0.008}
      />
      
      <WalleComponent 
        initialPosition={{ x: 5, y: -25 }}
        finalPosition={{ x: 5, y: 10 }}
        scrollRange={2500}
        color="#6A3093"
        scale={0.7}
        parallaxIntensity={2}
      />

      <WalleComponent 
        initialPosition={{ x: -17, y: -100 }}
        finalPosition={{ x: -17, y: 10 }}
        scrollRange={3500}
        color="#6A3093"
        scale={0.7}
        parallaxIntensity={2}
      />

      <WalleComponent 
        initialPosition={{ x: 15, y: -150 }}
        finalPosition={{ x: 15, y: 10 }}
        scrollRange={4000}
        color="#8E2DE2"
        scale={1}
        rotationSpeed={0.008}
      />

        <WalleComponent 
        initialPosition={{ x: 8, y: -200 }}
        finalPosition={{ x: -15, y: 9 }}
        scrollRange={4500}
        color="#4A00E0"
        scale={0.6}
      />

      <WalleComponent 
        initialPosition={{ x: 8, y: -250 }}
        finalPosition={{ x: 8, y: 0 }}
        scrollRange={5000}
        color="#4A00E0"
        scale={0.6}
      />

      <WalleComponent 
        initialPosition={{ x: -15, y: -250 }}
        finalPosition={{ x: -15, y: 7 }}
        scrollRange={5000}
        color="#8E2DE2"
        scale={1}
        rotationSpeed={0.008}
      />
    </div>
  );
};


export const CosmicBackgroundMobile = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  // A ref to store the current scroll position.
  const scroll = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // --- Create an invisible pivot point ---
    const pivot = new THREE.Group();
    const axialTilt = 26.7 * (Math.PI / 180);
    pivot.rotation.z = axialTilt;
    scene.add(pivot);

    // --- Create Wireframe Saturn ---
    const saturnGroup = new THREE.Group();
    pivot.add(saturnGroup);

    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x9400D3, // Glowing violet color
        wireframe: true,
    });

    const planetGeometry = new THREE.SphereGeometry(4, 32, 32);
    const planet = new THREE.Mesh(planetGeometry, wireframeMaterial);
    saturnGroup.add(planet);

    const ringGeometry = new THREE.TorusGeometry(6, 0.4, 16, 100);
    const ring = new THREE.Mesh(ringGeometry, wireframeMaterial);
    ring.rotation.x = Math.PI / 2; 
    saturnGroup.add(ring);
    
    camera.position.z = 12;

    // --- Event Listeners ---
    const handleMouseMove = (event: MouseEvent) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    // This function updates the scroll ref whenever the user scrolls
    const handleScroll = () => {
      scroll.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll); // Add scroll listener

    // --- Animation Loop ---
    let animationFrameId: number;
    const animate = () => {
        // Constant axial rotation
        saturnGroup.rotation.y += 0.005;

        // --- Scroll-based Animation ---
        // 1. Define the start and end points of the animation path.
        const startPosition = new THREE.Vector3(0, 0, 0);   // Top-right
        const endPosition = new THREE.Vector3(7, 15, 0); // Bottom-left

        // 2. Define how many pixels of scrolling it takes to complete the animation.
        const scrollRange = 1000; // e.g., the animation finishes after 1000px of scrolling.

        // 3. Calculate the progress (from 0.0 to 1.0).
        const progress = Math.min(scroll.current / scrollRange, 1.0);
        
        // 4. Calculate the base position by interpolating between start and end.
        const basePosition = new THREE.Vector3().lerpVectors(startPosition, endPosition, progress);

        // 5. Add the mouse parallax effect as an offset to the base position.
        const mouseOffsetX = mouse.current.x * 1.5;
        const mouseOffsetY = mouse.current.y * 1.5;

        const targetX = basePosition.x + mouseOffsetX;
        const targetY = basePosition.y + mouseOffsetY;

        // 6. Smoothly move the pivot to the final target position.
        pivot.position.x += (targetX - pivot.position.x) * 0.05;
        pivot.position.y += (targetY - pivot.position.y) * 0.05;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    const handleResize = () => {
        if (currentMount) {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        }
    };
    window.addEventListener('resize', handleResize);
    
    // --- Cleanup Function ---
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll); // Clean up scroll listener
        if (currentMount) {
            currentMount.removeChild(renderer.domElement);
        }
        
        planetGeometry.dispose();
        ringGeometry.dispose();
        wireframeMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1]" >
        <WalleComponent 
        initialPosition={{ x: -20, y: -20 }}
        finalPosition={{ x: -20, y: 9 }}
        scrollRange={1500}
        color="#4A00E0"
        scale={0.6}
      />
      
      <WalleComponent 
        initialPosition={{ x: 15, y: -7 }}
        finalPosition={{ x: 0, y: 20 }}
        scrollRange={2000}
        color="#8E2DE2"
        scale={0.4}
        rotationSpeed={0.008}
      />
      
      <WalleComponent 
        initialPosition={{ x: 5, y: -25 }}
        finalPosition={{ x: 5, y: 10 }}
        scrollRange={2500}
        color="#6A3093"
        scale={0.7}
        parallaxIntensity={2}
      />

      <WalleComponent 
        initialPosition={{ x: -4, y: -60 }}
        finalPosition={{ x: -4, y: 10 }}
        scrollRange={3000}
        color="#6A3093"
        scale={0.7}
        parallaxIntensity={2}
      />

      <WalleComponent 
        initialPosition={{ x: 5, y: -90 }}
        finalPosition={{ x: 5, y: 10 }}
        scrollRange={3500}
        color="#8E2DE2"
        scale={1}
        rotationSpeed={0.008}
      />

        <WalleComponent 
        initialPosition={{ x: 4, y: -150 }}
        finalPosition={{ x: -4, y: 9 }}
        scrollRange={4000}
        color="#4A00E0"
        scale={0.6}
      />

      <WalleComponent 
        initialPosition={{ x: -4, y: -200 }}
        finalPosition={{ x: -4, y: 10 }}
        scrollRange={4500}
        color="#6A3093"
        scale={0.7}
        parallaxIntensity={2}
      />

      <WalleComponent 
        initialPosition={{ x: 5, y: -250 }}
        finalPosition={{ x: 5, y: 10 }}
        scrollRange={5000}
        color="#8E2DE2"
        scale={1}
        rotationSpeed={0.008}
      />

        <WalleComponent 
        initialPosition={{ x: 4, y: -300 }}
        finalPosition={{ x: -4, y: 9 }}
        scrollRange={5500}
        color="#4A00E0"
        scale={0.6}
      />

        <WalleComponent 
        initialPosition={{ x: -4, y: -350 }}
        finalPosition={{ x: 4, y: -1 }}
        scrollRange={5500}
        color="#8E2DE2"
        scale={1}
        rotationSpeed={0.008}
      />
    </div>
  );
};

