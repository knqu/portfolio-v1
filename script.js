// preloader selectors
const preloader = document.querySelector('#preloader');
const content = document.querySelector('#content');
const landingText = document.querySelector('#landingText');

// contact section/form selectors
const form = document.querySelector('form');
const details = document.querySelector('details');
const summary = document.querySelector('summary');
const submitModal = new bootstrap.Modal(document.querySelector('#submitModal'));

// nav link selectors
const homeNavLink = document.querySelector('#homeNavLink');
const aboutNavLink = document.querySelector('#aboutNavLink');
const worksNavLink = document.querySelector('#worksNavLink');
const contactNavLink = document.querySelector('#contactNavLink');

// section selectors
const about = document.querySelector('#about');
const works = document.querySelector('#works');
const contact = document.querySelector('#contact');

// preloader & page animations

window.onload = function () {
    const timeline = gsap.timeline();
    timeline
        .to(preloader, { duration: 2, opacity: 0 })
        .to(content, { duration: 2, opacity: 1 })
        .from(landingText, { duration: 3, y: -100, ease: 'elastic' }, 2);
};

// form submission
// blocks default behavior, closes details tag, shows bootstrap submit modal, scrolls to top, resets form

form.addEventListener('submit', function (event) {
    event.preventDefault();
    details.removeAttribute('open');
    submitModal.show();
    window.scrollTo(0, 0);
    form.reset();
});

// contact <details> tag
// changes text between "collapse" and "expand" depending on whether <details> is open or not

details.addEventListener('toggle', function () {
    if (details.hasAttribute('open')) {
        summary.innerText = 'Click to collapse';
    } else {
        summary.innerText = 'Click to expand';
    }
});

// navbar
// scrolls to element when nav link is clicked
// uses javascript instead of anchor tag to circumvent url change

homeNavLink.addEventListener('click', function () {
    location.reload();
});

aboutNavLink.addEventListener('click', function () {
    about.scrollIntoView();
});

worksNavLink.addEventListener('click', function () {
    works.scrollIntoView();
});

contactNavLink.addEventListener('click', function () {
    contact.scrollIntoView();
});
