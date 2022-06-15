// Changing nameHeader text to Call me Van!
const nameHeader = document.getElementById('nameHeader');

nameHeader.addEventListener('mouseover', function handleMouseOver() {
    nameHeader.textContent = "You can call me Van!";
    nameHeader.classList.remove("preload");
});

nameHeader.addEventListener('mouseout', function handleMouseOut() {
    nameHeader.textContent = "Vanderal Talagi";
});


//Display Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelector('#site-links');

const mobileMenuShow = () => {
    mobileMenuLinks.classList.toggle('active');
}

mobileMenu.addEventListener('click',mobileMenuShow);

//Changing Theme
const themeChanger = document.querySelector('#themeSwitch');

themeChanger.addEventListener('click', () => {
    if(themeChanger.checked){
        document.getElementById('pageStyle').setAttribute('href', './css/styles-dark.css')
    }
    else {
        document.getElementById('pageStyle').setAttribute('href', './css/styles.css')
    }
});


