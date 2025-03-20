import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './ThreeBackground.css';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Configuration de la scène
    const scene = new THREE.Scene();
    scene.background = null; // Fond transparent

    // Configuration de la caméra
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 30;

    // Configuration du renderer avec alpha pour la transparence
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0); // Transparence complète
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Application directe de styles pour garantir le plein écran
    mountRef.current.style.width = '100vw';
    mountRef.current.style.height = '100vh';
    mountRef.current.style.position = 'fixed';
    mountRef.current.style.top = '0';
    mountRef.current.style.left = '0';
    mountRef.current.style.margin = '0';
    mountRef.current.style.padding = '0';
    mountRef.current.style.overflow = 'hidden';
    mountRef.current.style.zIndex = '0';

    // Ajout du renderer au DOM et configuration pour plein écran
    mountRef.current.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = '100vh';
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.margin = '0';
    renderer.domElement.style.padding = '0';
    renderer.domElement.style.zIndex = '0';

    // Création de plusieurs formes géométriques
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const meshes: THREE.Mesh[] = [];

    // Couleurs pour les formes
    const colors = [
      new THREE.Color('#3b82f6'), // Bleu
      new THREE.Color('#38bdf8'), // Bleu clair
      new THREE.Color('#0f172a'), // Bleu foncé
    ];

    // Créer seulement quelques formes pour un design plus minimaliste
    // Créer des cubes



    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      // Rotation lente des objets
      for (const [index, mesh] of meshes.entries()) {
        const speed = 0.0005 + (index % 5) * 0.0002; // Vitesse très lente
        mesh.rotation.x += speed;
        mesh.rotation.y += speed * 0.8;

        // Légère oscillation en position
        const time = Date.now() * 0.0003; // Plus lent
        const offset = index * 0.2;
        mesh.position.y += Math.sin(time + offset) * 0.007;
        mesh.position.x += Math.cos(time + offset) * 0.007;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Gestion du redimensionnement pour plein écran
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.width = '100vw';
      renderer.domElement.style.height = '100vh';
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Libération de la mémoire
      for (const geometry of geometries) {
        geometry.dispose();
      }
      for (const material of materials) {
        material.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
};

export default ThreeBackground;
