
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9o_nKxr4ijASNiA0EK7g1zftRe0Pn23E",
  authDomain: "migravo.firebaseapp.com",
  projectId: "migravo",
  storageBucket: "migravo.appspot.com",
  messagingSenderId: "250437340704",
  appId: "1:250437340704:web:845bab5905489c18073645",
  measurementId: "G-KK4DF5RQY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// import Fancybox css
// import 'fancyapps/ui/dist/fancybox.css';

// import Swiper styles and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/style.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

// import Swiper JS
import Swiper, { Navigation } from 'swiper';

// import ScrollReveal
import ScrollReveal from 'scrollreveal';

// import Isotope
import Isotope from 'isotope-layout';

// import fslightbox
import fslightbox from 'fslightbox';
// require('fslightbox');

// New import for firebaseAuth.js
import './firebaseAuth'; // <-- Add this line

Alpine.plugin(intersect);
window.Alpine = Alpine;

Alpine.start();

// Testimonial
const testimonial01 = new Swiper('.testimonial-01', {
  // configure Swiper to use modules
  modules: [Navigation],
  loop: true,
  spaceBetween: 50,
  centeredSlides: false,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*========== SCROLL REVEAL ANIMATION ==========*/
window.sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  reset: false,
});

sr.reveal(`.animate_top`, {
  origin: 'top',
  interval: 100,
});

sr.reveal(`.animate_left`, {
  origin: 'left',
  interval: 100,
});

sr.reveal(`.animate_right`, {
  origin: 'right',
  interval: 100,
});

// Project Tab
const projectsWrapper = document.querySelector('.projects-wrapper');
const projectTabBTN = document.querySelectorAll('.project-tab-btn');

const iso = new Isotope(projectsWrapper, {
  // options
  itemSelector: '.project-item',
  masonry: {
    columnWidth: '.project-sizer',
  },
});

projectTabBTN.forEach((btn) => {
  btn.addEventListener('click', () => {
    const selector = btn.getAttribute('data-filter');
    iso.arrange({
      filter: selector,
    });
  });
});

// Document Loaded
document.addEventListener('DOMContentLoaded', () => {});