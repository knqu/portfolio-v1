// contact section/form selectors
const form = document.querySelector('form');
const details = document.querySelector('details');
const summary = document.querySelector('summary');

// nav link selectors
const homeNavLink = document.querySelector('#homeNavLink');
const aboutNavLink = document.querySelector('#aboutNavLink');
const worksNavLink = document.querySelector('#worksNavLink');
const contactNavLink = document.querySelector('#contactNavLink');

// section selectors
const about = document.querySelector('#about');
const works = document.querySelector('#works');
const contact = document.querySelector('#contact');

// theme toggler selectors
const themeToggler = document.querySelector('#themeToggler');

// form submission
// blocks default behavior, closes details tag, shows bootstrap submit modal, scrolls to top, resets form

form.addEventListener('submit', function (event) {
    event.preventDefault();
    details.removeAttribute('open');
    $('#submitModal').modal('show'); // not sure if there's a non-jquery alternative, sourced this from bootstrap docs
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
    if (window.scrollY === 0) { // if user is at top of page, reload
        location.reload();
    } else { // other, scroll to top of page
        window.scrollTo(0, 0);
    }
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

// toggles between dark and light theme
themeToggler.addEventListener('click', function () {
    if (window.getComputedStyle(document.documentElement).getPropertyValue('--blurpleDark') === '#666cde') {
        document.querySelector('#themeTogglerSvg').src = 'images/moon.svg';
        document.querySelector('#themeTogglerSvg').classList.remove('filterLight');
        document.querySelector('#themeTogglerSvg').classList.add('filterDark');

        document.documentElement.style.setProperty('--blurpleDark', '#6492F5');
        document.documentElement.style.setProperty('--blurpleLight', '#666cde');

        document.documentElement.style.setProperty('--lightLighter', '#2b2b2b');
        document.documentElement.style.setProperty('--lightRegular', '#1f1f1f');
        document.documentElement.style.setProperty('--lightDarker', '#121212');

        document.documentElement.style.setProperty('--darkLighter', '#dfdfdf');
        document.documentElement.style.setProperty('--darkRegular', '#c9c9c9');
        document.documentElement.style.setProperty('--darkDarker', '#a3a2a2');
    } else {
        document.querySelector('#themeTogglerSvg').src = 'images/sun.svg';
        document.querySelector('#themeTogglerSvg').classList.remove('filterDark');
        document.querySelector('#themeTogglerSvg').classList.add('filterLight');

        document.documentElement.style.setProperty('--blurpleDark', '#666cde');
        document.documentElement.style.setProperty('--blurpleLight', '#6492F5');

        document.documentElement.style.setProperty('--lightLighter', '#dfdfdf');
        document.documentElement.style.setProperty('--lightRegular', '#c9c9c9');
        document.documentElement.style.setProperty('--lightDarker', '#a3a2a2');

        document.documentElement.style.setProperty('--darkLighter', '#2b2b2b');
        document.documentElement.style.setProperty('--darkRegular', '#1f1f1f');
        document.documentElement.style.setProperty('--darkDarker', '#121212');
    }

    document.querySelector('h1').style.color = '#dfdfdf';

    document.querySelectorAll('.lead').forEach(function (el) {
        el.style.color = '#dfdfdf';
    });

    document.querySelectorAll('button').forEach(function (el) {
        el.style.color = '#dfdfdf';
    });
});
