"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PortfolioScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionPreference.matches;
    let isVisible = true;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      host.dataset.sceneFallback = "true";
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, host.clientWidth < 600 ? 1.1 : 1.5));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);
    renderer.domElement.className = "scene-canvas";
    renderer.domElement.setAttribute("aria-label", "Interactive 3D generative AI sculpture");

    scene.add(new THREE.AmbientLight(0xffffff, 1.6));
    const keyLight = new THREE.PointLight(0xddfa62, 34, 20);
    keyLight.position.set(3, 3, 5);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xff8068, 12, 16);
    rimLight.position.set(-4, -2, 2);
    scene.add(rimLight);

    const sculpture = new THREE.Group();
    scene.add(sculpture);
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.12, 2),
      new THREE.MeshStandardMaterial({
        color: 0x93dfc5,
        metalness: 0.78,
        roughness: 0.28,
        flatShading: true,
      }),
    );
    sculpture.add(core);

    const wireframe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.16, 1),
      new THREE.MeshBasicMaterial({ color: 0xddfa62, wireframe: true, transparent: true, opacity: 0.5 }),
    );
    sculpture.add(wireframe);

    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xddfa62, transparent: true, opacity: 0.55 });
    const orbitOne = new THREE.Mesh(new THREE.TorusGeometry(1.78, 0.004, 8, 180), orbitMaterial);
    orbitOne.rotation.set(1.18, 0.34, 0.2);
    sculpture.add(orbitOne);
    const orbitTwo = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.003, 8, 180), new THREE.MeshBasicMaterial({ color: 0xff8068, transparent: true, opacity: 0.55 }));
    orbitTwo.rotation.set(0.5, 1.12, -0.42);
    sculpture.add(orbitTwo);

    const beadGeometry = new THREE.SphereGeometry(0.065, 16, 16);
    const beads = [
      { position: new THREE.Vector3(1.78, 0, 0), color: 0xddfa62 },
      { position: new THREE.Vector3(-1.78, 0, 0), color: 0x93dfc5 },
      { position: new THREE.Vector3(0, 2.05, 0), color: 0xff8068 },
    ].map(({ position, color }) => {
      const bead = new THREE.Mesh(beadGeometry, new THREE.MeshBasicMaterial({ color }));
      bead.position.copy(position);
      sculpture.add(bead);
      return bead;
    });

    const count = host.clientWidth < 600 ? 300 : 600;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.5 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0xd5ddd0, size: 0.018, transparent: true, opacity: 0.62 }));
    scene.add(stars);

    const pointer = new THREE.Vector2();
    const target = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      if (prefersReducedMotion) return;
      const bounds = host.getBoundingClientRect();
      target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      target.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const onPointerLeave = () => target.set(0, 0);
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);

    const resizeObserver = new ResizeObserver(() => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 600 ? 1.1 : 1.5));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (prefersReducedMotion || !isVisible) renderer.render(scene, camera);
    });
    resizeObserver.observe(host);

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = 0;
      if (prefersReducedMotion || !isVisible) return;
      const time = clock.getElapsedTime();
      pointer.lerp(target, 0.035);
      sculpture.rotation.y += 0.0022;
      sculpture.rotation.x += (pointer.y * 0.23 - sculpture.rotation.x) * 0.025;
      sculpture.rotation.y += (pointer.x * 0.34) * 0.012;
      sculpture.position.y = Math.sin(time * 0.65) * 0.07;
      wireframe.rotation.y = -time * 0.075;
      orbitOne.rotation.z = time * 0.09;
      orbitTwo.rotation.x = 0.5 + Math.sin(time * 0.25) * 0.12;
      beads[0].position.set(Math.cos(time * 0.55) * 1.78, Math.sin(time * 0.55) * 0.55, Math.sin(time * 0.55) * 1.7);
      beads[1].position.set(-Math.cos(time * 0.55) * 1.78, -Math.sin(time * 0.55) * 0.55, -Math.sin(time * 0.55) * 1.7);
      stars.rotation.y = time * 0.012;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    const startAnimation = () => {
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
      } else if (isVisible && frame === 0) {
        clock.start();
        frame = requestAnimationFrame(animate);
      }
    };
    const onMotionPreferenceChange = () => {
      prefersReducedMotion = motionPreference.matches;
      if (prefersReducedMotion) {
        cancelAnimationFrame(frame);
        frame = 0;
        renderer.render(scene, camera);
      } else {
        startAnimation();
      }
    };
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (!isVisible) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        startAnimation();
      }
    }, { rootMargin: "100px" });
    visibilityObserver.observe(host);
    motionPreference.addEventListener("change", onMotionPreferenceChange);
    startAnimation();

    return () => {
      cancelAnimationFrame(frame);
      visibilityObserver.disconnect();
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      resizeObserver.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="scene-wrap" ref={hostRef} aria-label="Interactive 3D technology visualization">
      <span className="scene-label scene-label-one">01 / CONTEXT RETRIEVAL</span>
      <span className="scene-label scene-label-two">● LIVE INFERENCE</span>
      <span className="scene-label scene-label-three">02 / RESPONSE LAYER</span>
      <span className="scene-index">FIG. 01 — HUMAN / MACHINE</span>
    </div>
  );
}
