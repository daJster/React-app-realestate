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

// navbar-toggler collapsed 
// button-certify-navbar-53

const listOfAnimatedDoms = [
    {
        dom: ".navbar",
        animation: "fadeInDown",
        subElement: false,
        delay: 0
    },
    {
        dom: ".title-text-11",
        animation: "fadeInUp",
        subElement: false,
        delay: 0
    },
    {
        dom: ".framer-text",
        animation: "fadeInUp",
        subElement: false,
        delay: 0.1
    },
    {
        dom: ".sub-text-title-12",
        animation: "fadeInUp",
        subElement: false,
        delay: 0.2
    },
    {
        dom: ".title-box-6",
        animation: "fadeInUp",
        subElement: false,
        delay: 0
    },
    {
        dom: ".container-slider-14",
        animation: "fade",
        subElement: false,
        delay: 0
    },
    {
        dom: ".h2-text-1st-container-features-17",
        animation: "fadeInUp",
        subElement: false,
        delay: 0
    },
    {
        dom: ".span-text-1st-container-features-18",
        animation: "fadeInUp",
        subElement: false,
        delay: 0
    },
    {
        dom: ".sub-text-title-features-43",
        animation: "fadeInUp",
        subElement: false,
        delay: 0
    },
    {
        dom: ".container-features-img-wrapper-1",
        animation: "fadeInLeft",
        subElement: false,
        delay: 0
    },
    {
        dom: ".container-features-text-wrapper-1",
        animation: "fadeInRight",
        subElement: true,
        delay: 0.2
    },
    {
        dom: ".container-card-features-1-animate-1",
        animation: "fadeInUp",
        subElement: true,
        delay: 0
    },
    {
        dom: ".container-card-features-1-animate-2",
        animation: "fadeInUp",
        subElement: true,
        delay: 0.2
    },
    {
        dom: ".container-features-img-wrapper-2",
        animation: "fadeInRight",
        subElement: false,
        delay: 0
    },
    {
        dom: ".container-features-text-wrapper-2",
        animation: "fadeInLeft",
        subElement: true,
        delay: 0.2
    },
    {
        dom: ".container-features-img-wrapper-3",
        animation: "fadeInLeft",
        subElement: false,
        delay: 0
    },
    {
        dom: ".container-features-text-wrapper-3",
        animation: "fadeInRight",
        subElement: true,
        delay: 0.2
    },
    {
        dom: ".container-card-features-2-animate-1",
        animation: "fadeInUp",
        subElement: true,
        delay: 0.2
    },
    {
        dom: ".container-card-features-2-animate-2",
        animation: "fadeInUp",
        subElement: true,
        delay: 0.3
    },
    {
        dom: ".values-title-dot-text",
        animation: "fadeInUp",
        subElement: false,
        delay: 0
    },
    {
        dom: ".h2-text-1st-container-features-17",
        animation: "fadeInUp",
        subElement: false,
        delay: 0.1
    },
    {
        dom: ".span-text-1st-container-features-18",
        animation: "fadeInUp",
        subElement: false,
        delay: 0.2
    },
    {
        dom: ".card-container-animate-1",
        animation: "fadeInUp",
        subElement: false,
        delay: 0.2
    },
    {
        dom: ".card-container-animate-2",
        animation: "fadeInUp",
        subElement: false,
        delay: 0.3
    },
    {
        dom: ".card-container-animate-3",
        animation: "fadeInUp",
        subElement: false,
        delay: 0.4
    },
    {
        dom: ".card-container-animate-4",
        animation: "fadeInUp",
        subElement: false,
        delay: 0.5
    },
]


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
    listOfAnimatedDoms.forEach(item => {
        const elements = document.querySelectorAll(item.dom);
        elements.forEach(el => {
            el.style.animationDelay = `${item.delay}s`;
            el.setAttribute('data-animation', item.animation); // Add animation name
            observer.observe(el);
        });
    });
});