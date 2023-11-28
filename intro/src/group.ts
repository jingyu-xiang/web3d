import * as THREE from "three";

/**
 * put meshes into a group
 */

const CANVAS = document.querySelector<HTMLCanvasElement>(
  "canvas.webgl2-group",
)!;

const SIZES = {
  width: 800,
  height: 600,
};

const scene = new THREE.Scene();

// ===== Object =====
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 0.25 * Math.PI;

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" }),
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" }),
);
cube2.position.x = -2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow" }),
);
cube3.position.x = 2;

group.add(cube1, cube2, cube3);
scene.add(group);

// ===== Camera =====
const camera = new THREE.PerspectiveCamera(75, SIZES.width / SIZES.height);
camera.position.z = 3;
scene.add(camera);

// ===== Post-processing & Renderer =====
const renderer = new THREE.WebGLRenderer({
  canvas: CANVAS,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(SIZES.width, SIZES.height);

renderer.render(scene, camera);
