"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Telecaster() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 0.525;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    // renderer.physicallyCorrectLights = true;

    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff));

    const dirLight = new THREE.DirectionalLight(0xffffff, 8);
    dirLight.position.set(0, 2, 8);
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 4);
    dirLight2.position.set(100, 2, 10);
    scene.add(dirLight2);

    // const pointLight = new THREE.PointLight(0xffffff, 3);
    // pointLight.position.set(0, 2, 5);
    // scene.add(pointLight);

    const loader = new GLTFLoader();
    const pivot = new THREE.Group();
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroup.rotation.set(0, 0.5, -1);
    modelGroup.position.set(0.025, 0.05, 0);

    loader.load("/model3d/full-tele9.glb", (gltf) => {
      const model = gltf.scene;
      model.rotation.set(Math.PI / 2, 0, 0);
      pivot.rotation.y = THREE.MathUtils.degToRad(-45);
      pivot.add(model);
      modelGroup.add(pivot);
    });

    const animate = () => {
      pivot.rotation.y += 0.008;
      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    const onResize = () => {
      if (!mountRef.current) return;
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  //   renderer.outputColorSpace = THREE.SRGBColorSpace;
  //   renderer.toneMapping = THREE.ACESFilmicToneMapping;
  //   renderer.physicallyCorrectLights = true;
  return (
    <div className="w-full flex justify-center">
      <div
        ref={mountRef}
        // className="max-w-2xl w-full h-[500px] rounded-lg border"
        className="w-full h-[450px] rounded-lg"
      />
    </div>
  );
}
