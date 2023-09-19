const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
}

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive')
    } else {
        nav.classList.add('responsive')
    }
}

backButton.addEventListener('click', getToTop)
mobButton.addEventListener('click', mobMenu)