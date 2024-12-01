// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFTG5ddAEkQN5dZsphMNAlGHLsLToCW5g",
  authDomain: "neodon-64dec.firebaseapp.com",
  projectId: "neodon-64dec",
  storageBucket: "neodon-64dec.firebasestorage.app",
  messagingSenderId: "417024437876",
  appId: "1:417024437876:web:fbb1c540ea2a4504672b21",
  measurementId: "G-3993LQ7YK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



document.onload(() => {
  // get element by class framer-g29j14
  BookADemoElement = document.getElementsByClassName("framer-g29j14")
  console.log(BookADemoElement)
  BookADemoElement[0].getElementsByTagName("p")[0].innerHTML = "Hello there my friend"

})


modified_elements = {
  "framer-t0llol" : {
    "type" : "link",  // FEATURES
    "href" : "./#features",
    "text" : "Features",
    "subElementTree" : ["p", "a"]
  },
  "framer-1wxysqk" : {
    "type" : "link", // SECURITY
    "href" : "./#use-cases",
    "text" : "Use Cases",
    "subElementTree" : ["p", "a"]
  },
  "framer-10obdac" : {
    "type" : "link", // JOBS
    "href" : "https://www.linkedin.com/in/jad-elkarchi/",
    "text" : "Careers",
    "subElementTree" : ["p", "a"]
  },
  "framer-g29j14" : {
    "type" : "link", // BOOK A DEMO
    "href" : "https://www.linkedin.com/in/jad-elkarchi/",
    "text" : "Book a Demo",
    "subElementTree" : ["p"]
  },
  "framer-751f7g" : {
    "type" : "text", // COMING IN BETA
    "text" : "COMING SOON",
    "subElementTree" : ["p"]
  },
  "framer-16jv3xt" : {
    "type" : "html", // HUGE TITLE
    "text" : "<span class='framer-text' style='--framer-text-color: var(--token-15a28855-0ee4-4504-837b-a6e2cf2726c6, rgb(0, 82, 204));'>A.I & Advanced Analytics</span> for Marketing & Advertisment",
    "subElementTree" : ["h1"]
  },
  "framer-12zactm" : {
    "type" : "text", // HUGE TITLE desc
    "text" : "Supercharge your marketing processes with AI",
    "subElementTree" : ["p"]
  },
  "framer-hhu4al" : {
    "type" : "html", // 2nd HUGE TITLE
    "text" : "<h2 class='framer-text framer-styles-preset-1kihnbd' data-styles-preset='z1BV5jxiu' style='--framer-text-color: var(--token-2759885a-0605-4b0d-ae5f-9a938c3766f2, rgb(0, 0, 0));'>Stop Watching Ads.<br class='framer-text'><span class='framer-text' style='--framer-text-color: var(--token-15a28855-0ee4-4504-837b-a6e2cf2726c6, rgb(0, 82, 204));'>Start Understading them.</span></h2>",
    "subElementTree" : ["h1"]
  },
  "framer-513iyj" : {
    "type" : "text", // 2nd HUGE TITLE desc
    "text" : "Unlock the full potential of your data and reach your target audience with AI.",
    "subElementTree" : ["p"]
  }
}