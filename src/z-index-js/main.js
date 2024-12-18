// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDFTG5ddAEkQN5dZsphMNAlGHLsLToCW5g",
//   authDomain: "neodon-64dec.firebaseapp.com",
//   projectId: "neodon-64dec",
//   storageBucket: "neodon-64dec.firebasestorage.app",
//   messagingSenderId: "417024437876",
//   appId: "1:417024437876:web:fbb1c540ea2a4504672b21",
//   measurementId: "G-3993LQ7YK7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import listOfAnimatedDoms from "../files/animated-doms.json";

const navbarToggler = document.querySelector('.navbar-toggler');
const buttonCertify = document.getElementsByClassName('button-certify-navbar-53')[0];

if (navbarToggler && buttonCertify) {
    let isToggled = false; // Track the toggle state

    navbarToggler.addEventListener('click', () => {
        if (!isToggled) {
            // First click: Hide the button
            buttonCertify.style.display = 'none';
        } else {
            // Second click: Redisplay the button after 0.4 seconds
            setTimeout(() => {
                buttonCertify.style.display = 'block';
            }, 400);
        }

        // Toggle the state
        isToggled = !isToggled;
    });
} else {
    console.error('Navbar toggler or button-certify element not found!');
}

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const animationClass = target.getAttribute('data-animation');
                target.classList.add(animationClass);
                observer.unobserve(target); // Animate only once
            }
        });
    }, observerOptions);


    // Register each element for observation
    listOfAnimatedDoms.List.forEach(item => {
        const elements = document.querySelectorAll(item.dom);
        elements.forEach(el => {
            el.style.animationDelay = `${item.delay}s`;
            el.setAttribute('data-animation', item.animation); // Add animation name
            observer.observe(el);
        });
    });
});