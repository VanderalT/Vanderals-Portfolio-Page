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


// Bubble randomizer

/* Bubble pop, need to test online
function bubblePop(){
    if (document.getElementById('bubble').src == "./img/header-bubbles/header-bubbles.png"){
        document.getElementById('bubble').src == "./img/header-bubbles/header-bubbles-anim.gif";
    } 
    else {
        document.getElementById('bubble').src == "./img/header-bubbles/header-bubbles.png"
    }
}
*/

/*Logo pop:
const headerLogo = document.getElementById('headerLogo');

headerLogo.addEventListener('click', function logoPop(){
    headerLogo.classList.replace('header-logo','pop');
})
*/


