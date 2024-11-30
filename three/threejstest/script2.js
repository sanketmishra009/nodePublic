import * as three from "three";

//get html element.

const html = document.getElementById("canvas");
console.log(html);

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
const dodecamaterial = new three.MeshBasicMaterial({
  color: "#468585",
});

const dodeca = new three.Mesh(dodecageometry, dodecamaterial);

//box

const boxgeo = new three.BoxGeometry(2, 0.1, 2);
const boxmaterial = new three.MeshBasicMaterial({
  color: "#B4B4B3",
});

const box = new three.Mesh(boxgeo, boxmaterial);
box.position.y = -1.5;

scene.add(dodeca);
scene.add(box);

///////////Add lights

// 0x006769

const light = new three.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

//renderer

const renderer = new three.WebGLRenderer({
  html,
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);
