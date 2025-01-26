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

import animatedJsonData from "../files/animated-doms-home-page.json";
import { animateDomsWithObserver }  from "../files/utils.js";


const navbarToggler = document.querySelector('.navbar-toggler');
const buttonCertify = document.getElementById('button-certify-navbar-53');

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


const typeEffectWrapper = (() => {
    const words = ["Certified ideas",
                    "Take the spotlight",
                    "Unlock your potential",
                    "Improve your opportunities"
                ];
    const typingSpeed = 100;
    const erasingSpeed = 40;
    const delayBetweenWords = 4000;
    
    const dynamicTextElement = document.querySelector(".dynamic-text-123");
    
    let wordIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    
    function typeEffect() {
      const currentWord = words[wordIndex];
    
      if (!isErasing) {
        dynamicTextElement.innerHTML = currentWord.slice(0, charIndex++);
        if (charIndex > currentWord.length) {
          isErasing = true;
          setTimeout(typeEffect, delayBetweenWords);
        } else {
          setTimeout(typeEffect, typingSpeed);
        }
      } else {
        dynamicTextElement.innerHTML = currentWord.slice(0, charIndex--);
        if (charIndex < 0) {
          isErasing = false;
          wordIndex = (wordIndex + 1) % words.length;
          charIndex = 0;
          setTimeout(typeEffect, typingSpeed);
        } else {
          setTimeout(typeEffect, erasingSpeed);
        }
      }
    }
    
    typeEffect();
})();

animateDomsWithObserver(animatedJsonData);