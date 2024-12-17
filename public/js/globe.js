import ThreeGlobe from "../files/threeGlobe.js";
import { WebGLRenderer, Scene } from "../files/three.module.js";
import {
PerspectiveCamera,
AmbientLight,
DirectionalLight,
Color,
Fog,
// AxesHelper,
// DirectionalLightHelper,
// CameraHelper,
PointLight,
SphereGeometry,
} from "../files/three.module.js";
import { OrbitControls } from "../files/OrbitControls.js";
// import { createGlowMesh } from "three-glow-mesh";
import countries from "../files/globe-data-min.json";
import travelHistory from "../files/my-flights.json";

const container = document.getElementsByClassName("globe-container")[0];
var renderer, camera, scene, controls;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
var Globe;


// SECTION Initializing core ThreeJS elements
function init() {
    // Initialize renderer
    renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    // renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    // Initialize scene, light
    scene = new Scene();
    scene.add(new AmbientLight(0xbbbbbb, 0.3));

    // Initialize camera, light
    camera = new PerspectiveCamera(28, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    var dLight = new DirectionalLight(0xffffff, 1.4);
    dLight.position.set(-800, 2000, 400);
    camera.add(dLight);

    var dLight1 = new DirectionalLight(0x7982f6, 1);
    dLight1.position.set(-200, 500, 200);
    camera.add(dLight1);

    var dLight2 = new PointLight(0x8566cc, 1);
    dLight2.position.set(-200, 500, 200);
    camera.add(dLight2);

    camera.position.z = 400;
    camera.position.x = 0;
    camera.position.y = 0;

    scene.add(camera);

    // Additional effects
    scene.fog = new Fog(0x535ef3, 400, 2000);

    // Helpers
    // const axesHelper = new AxesHelper(800);
    // scene.add(axesHelper);
    // var helper = new DirectionalLightHelper(dLight);
    // scene.add(helper);
    // var helperCamera = new CameraHelper(dLight.shadow.camera);
    // scene.add(helperCamera);

    // Initialize controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dynamicDampingFactor = 0.01;
    controls.enablePan = false;
    controls.minDistance = 500;
    controls.maxDistance = 500;
    controls.rotateSpeed = 0.8;
    controls.zoomSpeed = 0;
    controls.autoRotate = true;

    controls.minPolarAngle = Math.PI / 3.5;
    controls.maxPolarAngle = Math.PI - Math.PI / 3;

    // window.addEventListener("resize", onWindowResize, false);
    // document.addEventListener("mousemove", onMouseMove);
}

// SECTION Globe
function initGlobe() {
    // Initialize the Globe
    Globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
    })
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(.5)
        .showAtmosphere(false)
        .atmosphereColor("#3a228a")
        .atmosphereAltitude(0.25)
        .hexPolygonColor((e) => {
            return "rgba(143, 95, 255, .7)";
        });

    // NOTE Arc animations are followed after the globe enters the scene
    setTimeout(() => {
        Globe.arcsData(travelHistory.flights)
        .arcColor((e) => {
            return e.status ? "rgb(143, 95, 255)" : "rgb(76, 0, 255)";
        })
        .arcAltitude((e) => {
            return e.arcAlt;
        })
        .arcStroke((e) => {
            return e.status ? 0.5 : 0.3;
        })
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1000)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap((e) => e.order * 1)
    }, 1000);

    Globe.rotateY(-Math.PI * (5 / 9));
    Globe.rotateZ(-Math.PI / 6);
    const globeMaterial = Globe.globeMaterial();
    globeMaterial.color = new Color(0xf4f4f4);
    globeMaterial.emissive = new Color(0xf4f4f4);
    globeMaterial.emissiveIntensity = 0.4;
    globeMaterial.shininess = 0.3;

    // NOTE Cool stuff
    // globeMaterial.wireframe = true;

    scene.add(Globe);
}

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    windowHalfX = container.clientWidth / 1.5;
    windowHalfY = container.clientHeight / 1.5;
    renderer.setSize(container.clientWidth , container.clientHeight);
}

function animate() {
    camera.position.x +=
        Math.abs(mouseX) <= windowHalfX / 2
        ? (mouseX / 2 - camera.position.x) * 0.005
        : 0;
    camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
    camera.lookAt(scene.position);
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// wait for 1 second before
setTimeout(() => {
    init();
    initGlobe();
    onWindowResize();
    animate();
}, 1000);

