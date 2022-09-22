const HUMBER = document.querySelector('.Humbermenu');
const NAV = document.querySelector('.header__nav');

HUMBER.addEventListener('click', (e) => {
    HUMBER.classList.toggle('expanded');
    NAV.classList.toggle('showen');
})

const CLOSE = document.querySelector('.close');

CLOSE.addEventListener('click', (e)=>{
    NAV.classList.toggle('showen');
    HUMBER.classList.toggle('expanded');

} )