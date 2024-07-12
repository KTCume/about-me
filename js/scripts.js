// script.js

const hamburgerMenu = document.querySelector('.hamburger-menu');
const siteNav = document.querySelector('.site-nav');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('change'); // Toggle hamburger menu animation
  siteNav.classList.toggle('show'); // Toggle navigation menu visibility
});