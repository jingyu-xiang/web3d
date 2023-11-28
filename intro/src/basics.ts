import * as THREE from "three";

/**
 * scares and positions are instances of Vector3, with x, y, z properties
 * @see https://threejs.org/docs/#api/en/math/Vector3
 *
 * rotations are instances of Euler, with x, y, z properties
 * @see https://threejs.org/docs/#api/en/math/Euler
 */

const CANVAS = document.querySelector<HTMLCanvasElement>(
  "canvas.webgl-basics",
)!;

const SIZES = {
  width: 800,
  height: 600,
};

const scene = new THREE.Scene();

// ===== Object =====
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

// positions
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;

console.log(
  "Distance from the center of the scene to the object position: ",
  mesh.position.length(),
);

// mesh.position.normalize(); // set the vector's length to 1

// sacles
mesh.scale.x = 2; // stretch along the x axis to 2 times
mesh.scale.y = 0.5; // stretch along the y axis to 0.5 times
mesh.scale.z = 0.5; // stretch along the z axis to 0.5 times

scene.add(mesh);

// rotations (put a stick through the object via x, y, z axes and rotate it)
mesh.rotation.y = 0.25 * Math.PI; // rotate along the y axis by 45 degrees
mesh.rotation.x = 0.25 * Math.PI; // rotate along the x axis by 45 degrees

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// ===== Camera =====
const camera = new THREE.PerspectiveCamera(75, SIZES.width / SIZES.height);
camera.position.z = 3;

console.log(
  "Distance from the object position to the camera position: ",
  mesh.position.distanceTo(camera.position),
);

// lookAt
// camera.lookAt(mesh.position);

scene.add(camera);

// ===== Post-processing & Renderer =====
const renderer = new THREE.WebGLRenderer({
  canvas: CANVAS,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(SIZES.width, SIZES.height);

renderer.render(scene, camera);
