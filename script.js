// const navbar = document.querySelectorAll('.navbar');
const mapButton = document.querySelector('.location');
const mapSection = document.querySelector('.map');
const header = document.querySelector('.header');
const section = document.querySelector('.container');
const closeButton = document.querySelector('.fa-circle-xmark');


/* ogarnac funkcje navhover, bo sypie bledem*/
// function navHover() {
//     document.body.classList.toggle('navHover');
// }

function showMap() {
    // mapSection.style.display = "block";
    // header.classList.add('blur');
    // section.classList.add('blur');
    // document.body.classList.add('overflowHidden');
    console.log('test')
}

function closeMap() {
    // mapSection.style.display = "none";
    // header.classList.remove('blur');
    // section.classList.remove('blur');
    // document.body.classList.remove('overflowHidden');
}


// navbar.addEventListener('mouseover', navHover)
mapButton.addEventListener('click', showMap);
// closeButton.addEventListener('click', closeMap);