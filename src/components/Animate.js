import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const MyThreeComponent = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, gu, pts, sizes, shift, clock, p;

    const init = () => {
      scene = new THREE.Scene();
      scene.background = null; // Transparent background

      const initialWidth = window.innerWidth;
      const initialHeight = window.innerHeight;

      camera = new THREE.PerspectiveCamera(
        120,
        initialWidth / initialHeight,
        1,
        1000
      );
      camera.position.set(0, 0, 14);

      renderer = new THREE.WebGLRenderer({ alpha: true }); // Use alpha for transparency
      renderer.setSize(initialWidth, initialHeight);
      mountRef.current.appendChild(renderer.domElement);

      gu = {
        time: { value: 0 },
      };

      sizes = [];
      shift = [];

      const pushShift = () => {
        shift.push(
          Math.random() * Math.PI,
          Math.random() * Math.PI * 4,
          (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
          Math.random() * 0.9 + 0.1
        );
      };

      pts = new Array(8000).fill().map(() => {
        sizes.push(Math.random() * 0.5 + 0.15); // Adjust particle size range here
        pushShift();
        return new THREE.Vector3()
          .randomDirection()
          .multiplyScalar(Math.random() * 0.5 + 9.5);
      });

      for (let i = 0; i < 8000; i++) {
        const r = 10,
          R = 20; // Change this R value to decrease the main circle width
        const rand = Math.pow(Math.random(), 1);
        const radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
        pts.push(
          new THREE.Vector3().setFromCylindricalCoords(
            radius,
            Math.random() * 2 * Math.PI,
            (Math.random() - 0.5) * 2
          )
        );
        sizes.push(Math.random() * 0.75 + 0.25); // Adjust particle size range here
        pushShift();
      }

      const g = new THREE.BufferGeometry().setFromPoints(pts);
      g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
      g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));

      // Create a circular texture
      const circleCanvas = document.createElement("canvas");
      const circleSize = 32;
      circleCanvas.width = circleSize;
      circleCanvas.height = circleSize;
      const ctx = circleCanvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(circleSize / 2, circleSize / 2, circleSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,0,0,.9)"; // Color of the circle
      ctx.fill();

      // Create material with the circular texture
      const circleTexture = new THREE.CanvasTexture(circleCanvas);
      const m = new THREE.PointsMaterial({
        size: 0.02, // Adjust the base particle size here
        map: circleTexture,
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        // Rest of the material configuration...
      });

      p = new THREE.Points(g, m);
      p.rotation.order = "ZYX";
      p.rotation.z = 0.2;
      scene.add(p);

      clock = new THREE.Clock();

      const animate = () => {
        const t = clock.getElapsedTime() * 0.5;
        gu.time.value = t * Math.PI;
        p.rotation.y = t * 0.05;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "-1",
      }}
    />
  );
};

export default MyThreeComponent;
