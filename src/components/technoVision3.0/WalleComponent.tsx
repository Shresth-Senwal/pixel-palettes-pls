'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WalleComponentProps {
  // Scroll configuration
  scrollRange?: number;
  initialPosition?: { x: number; y: number; z?: number };
  finalPosition?: { x: number; y: number; z?: number };
  
  // Appearance customization
  scale?: number;
  color?: string;
  rotationSpeed?: number;
  parallaxIntensity?: number;
}

/**
 * WALL-E Component with Scroll-Based Movement
 * Similar to the Saturn component, this moves along a path as the user scrolls
 */
const WalleComponent = ({ 
  scrollRange = 1000,
  initialPosition = { x: -7, y: 0 },
  finalPosition = { x: 7, y: 15 },
  scale = 1,
  color = "#9400D3",
  rotationSpeed = 0.005,
  parallaxIntensity = 1.5
}: WalleComponentProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
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
    scene.add(pivot);

    // --- Create Wireframe WALL-E Robot ---
    const robotGroup = new THREE.Group();
    pivot.add(robotGroup);

    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        wireframe: true,
    });

    // --- Construct the WALL-E robot with accurate proportions ---

    // Main body (cube-like with slight taper)
    const bodyGeometry = new THREE.BoxGeometry(4, 3, 5);
    const body = new THREE.Mesh(bodyGeometry, wireframeMaterial);
    body.position.y = 1.5;
    robotGroup.add(body);

    // Neck (short and sturdy)
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1, 1, 12), wireframeMaterial);
    neck.position.y = 3.2;
    robotGroup.add(neck);

    // Head (boxy with binocular eyes)
    const headGeometry = new THREE.BoxGeometry(2.5, 2, 2);
    const head = new THREE.Mesh(headGeometry, wireframeMaterial);
    head.position.y = 4.7;
    robotGroup.add(head);

    // Eyes (binocular style - WALL-E's distinctive feature)
    const eyeGeometry = new THREE.CylinderGeometry(0.8, 0.8, 1, 16);
    const leftEye = new THREE.Mesh(eyeGeometry, wireframeMaterial);
    leftEye.rotation.x = Math.PI / 2;
    leftEye.position.set(-0.5, 5.2, 1);
    robotGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, wireframeMaterial);
    rightEye.rotation.x = Math.PI / 2;
    rightEye.position.set(0.5, 5.2, 1);
    robotGroup.add(rightEye);

    // Neck joint (where head connects to body)
    const neckJoint = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), wireframeMaterial);
    neckJoint.position.y = 4;
    robotGroup.add(neckJoint);

    // Treads (caterpillar tracks - WALL-E's most distinctive feature)
    const createTread = (xPosition: number) => {
      const treadGroup = new THREE.Group();
      
      // Main tread body
      const treadBody = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2, 6), wireframeMaterial);
      treadBody.position.y = 0;
      treadGroup.add(treadBody);
      
      // Wheels
      const wheelPositions = [
        { x: 0, y: -1, z: -2.2 },
        { x: 0, y: -1, z: 2.2 },
        { x: 0, y: -1, z: -1.1 },
        { x: 0, y: -1, z: 1.1 },
        { x: 0, y: -1, z: 0 }
      ];
      
      wheelPositions.forEach(pos => {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.4, 12), wireframeMaterial);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(pos.x, pos.y, pos.z);
        treadGroup.add(wheel);
      });
      
      treadGroup.position.x = xPosition;
      return treadGroup;
    };

    const leftTread = createTread(-2.75);
    leftTread.position.y = 0.5;
    robotGroup.add(leftTread);

    const rightTread = createTread(2.75);
    rightTread.position.y = 0.5;
    robotGroup.add(rightTread);

    // Arms (WALL-E has simple, functional arms)
    const createArm = (side: number) => {
      const armGroup = new THREE.Group();
      
      // Upper arm
      const upperArm = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2, 0.8), wireframeMaterial);
      upperArm.position.y = -1;
      armGroup.add(upperArm);
      
      // Lower arm (with pincher/gripper)
      const lowerArm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 2, 0.6), wireframeMaterial);
      lowerArm.position.y = -2.5;
      armGroup.add(lowerArm);
      
      // Simple gripper
      const gripper = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 1), wireframeMaterial);
      gripper.position.y = -3.5;
      armGroup.add(gripper);
      
      armGroup.position.x = side * 2.2;
      armGroup.position.y = 2;
      return armGroup;
    };

    const leftArm = createArm(-1);
    robotGroup.add(leftArm);

    const rightArm = createArm(1);
    robotGroup.add(rightArm);

    // Solar panel (on WALL-E's back)
    const solarPanel = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 4), wireframeMaterial);
    solarPanel.position.y = 2.5;
    solarPanel.position.z = -2;
    robotGroup.add(solarPanel);

    // Scale the robot appropriately
    robotGroup.scale.set(0.35 * scale, 0.35 * scale, 0.35 * scale);

    // --- Create Colored Star Dust ---
    const dustGeometry = new THREE.BufferGeometry();
    const dustVertices = [];
    const dustColors = [];
    const color1 = new THREE.Color(color);
    const color2 = new THREE.Color(color).offsetHSL(0, 0, -0.3); // Darker version of the color

    for (let i = 0; i < 1000; i++) {
        const x = (Math.random() - 0.5) * 30;
        const y = (Math.random() - 0.5) * 30;
        const z = (Math.random() - 0.5) * 30;
        dustVertices.push(x, y, z);
        const mixedColor = color1.clone().lerp(color2, Math.random());
        dustColors.push(mixedColor.r, mixedColor.g, mixedColor.b);
    }
    
    dustGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dustVertices, 3));
    dustGeometry.setAttribute('color', new THREE.Float32BufferAttribute(dustColors, 3));

    const dustMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
    });

    const starDust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(starDust);
    
    camera.position.z = 15;

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
    const clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        starDust.rotation.y = elapsedTime * 0.05;
        robotGroup.rotation.y += rotationSpeed;

        // Animate the eyes (subtle movement)
        leftEye.position.z = 1 + Math.sin(elapsedTime * 2) * 0.1;
        rightEye.position.z = 1 + Math.sin(elapsedTime * 2) * 0.1;

        // --- Scroll-based Animation ---
        // 1. Calculate the progress (from 0.0 to 1.0).
        const progress = Math.min(scroll.current / scrollRange, 1.0);
        
        // 2. Calculate the base position by interpolating between initial and final positions.
        const basePosition = new THREE.Vector3().lerpVectors(
          new THREE.Vector3(initialPosition.x, initialPosition.y, initialPosition.z || 0),
          new THREE.Vector3(finalPosition.x, finalPosition.y, finalPosition.z || 0),
          progress
        );

        // 3. Add the mouse parallax effect as an offset to the base position.
        const mouseOffsetX = mouse.current.x * parallaxIntensity;
        const mouseOffsetY = mouse.current.y * parallaxIntensity;

        const targetX = basePosition.x + mouseOffsetX;
        const targetY = basePosition.y + mouseOffsetY;

        // 4. Smoothly move the pivot to the final target position.
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
        
        // Dispose of all created Three.js objects
        wireframeMaterial.dispose();
        dustGeometry.dispose();
        dustMaterial.dispose();
        
        // Dispose of all geometries
        const geometries = [
          bodyGeometry, neck.geometry, headGeometry, eyeGeometry,
          neckJoint.geometry
        ];
        
        geometries.forEach(geo => {
          if (geo) geo.dispose();
        });
        
        // Dispose of robot parts
        robotGroup.traverse(child => {
          if (child instanceof THREE.Mesh && child.geometry) {
            child.geometry.dispose();
          }
        });
    };
  }, [scrollRange, initialPosition, finalPosition, scale, color, rotationSpeed, parallaxIntensity]);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none" 
    />
  );
};

export default WalleComponent;