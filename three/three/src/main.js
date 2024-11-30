import * as three from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
//get html element.

const canvas = document.getElementById("canvas");
console.log(canvas);

//create scene

const scene = new three.Scene();
scene.background = new three.Color("#F0F0F0");

//create and set up camera

const camera = new three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

//create object

// emmissive = #468585
// #b4b4b3

//dodecahedron

const dodecageometry = new three.DodecahedronGeometry();
const dodecamaterial = new three.MeshLambertMaterial({
  // color: "red",
  emissive: "#465879",
});

const dodeca = new three.Mesh(dodecageometry, dodecamaterial);

//box

const boxgeo = new three.BoxGeometry(2, 0.1, 2);
const boxmaterial = new three.MeshStandardMaterial({
  color: "#BFBFBF",
  emissive: "#BFBFBF",
});

const box = new three.Mesh(boxgeo, boxmaterial);
const box2 = new three.Mesh(boxgeo, boxmaterial);
box.position.y = 1;
box2.position.y = -1;

scene.add(dodeca);
// scene.add(box);
scene.add(box2);

///////////Add lights

// 0x006769

const light = new three.SpotLight("blue", 100);
light.position.set(0, 0.5, 1);
scene.add(light);

//renderer

const renderer = new three.WebGLRenderer({
  canvas,
});

//add orbital controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = true;
controls.enablePan = true;
controls.dampingFactor = 0.5;

renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
  requestAnimationFrame(animate);
  dodeca.rotation.x += 0.009;
  dodeca.rotation.y += 0.009;
  box.rotation.y += 0.001;
  box2.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}
animate();
