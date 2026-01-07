import * as THREE from "three";

// 장면 Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);

// 카메라 Camera
const camera = new THREE.PerspectiveCamera(
  50, // 시야각(fov)
  window.innerWidth / window.innerHeight, // 종횡비(aspect ratio)
  0.1, // near clipping plane
  1000 // far clipping plane
);
camera.position.set(3, 3, 3);// x, y, z 위치에 카메라 놓기
camera.lookAt(0, 0, 0);// 원점(0,0,0)을 바라보기

// 렌더러 Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 메쉬 Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x2e6ff2 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
renderer.render(scene, camera);
