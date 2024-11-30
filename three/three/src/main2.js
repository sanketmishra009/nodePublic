import * as three from "three";

const scene = new three.Scene();
const camera = new three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//create a cube and animate it.

const geometry = new three.BoxGeometry(1, 1, 1);
const material = new three.MeshBasicMaterial({
  color: 0x00ff00,
});

const cube = new three.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

//create a line and add it to scene.

const points = [];
points.push(new three.Vector3(-10, 0, 0));
points.push(new three.Vector3(0, 10, 0));
points.push(new three.Vector3(10, 0, 0));

const lineGeometry = new three.BufferGeometry().setFromPoints(points);
const lineMaterial = new three.lineBasicMaterial({
  color: 0x0000ff,
});
const line = new three.line(lineGeometry, lineMaterial);
scene.add(line);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.09;
  cube.rotation.y += 0.09;
  cube.rotation.x += 0.001;

  renderer.render(scene, camera);
}
