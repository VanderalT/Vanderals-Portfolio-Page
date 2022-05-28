// Changing nameHeader text to Call me Van!
const nameHeader = document.getElementById('nameHeader');

nameHeader.addEventListener('mouseover', function handleMouseOver() {
    nameHeader.textContent = "You can call me Van!";
    nameHeader.classList.remove("preload");
});

nameHeader.addEventListener('mouseout', function handleMouseOut() {
    nameHeader.textContent = "Vanderal Talagi";
});

// Bubble randomizer



/*Logo pop:
const headerLogo = document.getElementById('headerLogo');

headerLogo.addEventListener('click', function logoPop(){
    headerLogo.classList.replace('header-logo','pop');
})
*/
