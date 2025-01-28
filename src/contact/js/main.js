import animatedJsonData from "./animated-doms-contact-page.json";
import { animateDomsWithObserver } from "../../files/utils.js";



animateDomsWithObserver(animatedJsonData);
setTimeout(() => {
    const circlesDoms = document.getElementsByClassName("shape-circle-style");
    circlesDoms[0].classList.add("float");
    circlesDoms[1].classList.add("float");
}, 1500)