const toggleMenu = document.getElementById('toggle-menu');
const mainNav = document.getElementById('main-nav');
const navItems = document.querySelectorAll('.nav__item');

let menuOpen = false;

toggleMenu.addEventListener('click', () =>{
   mainNav.classList.toggle('main-nav--show');
   toggleMenu.classList.toggle('toggle-menu--open');
 
   if (menuOpen)     {
        toggleMenu.innerHTML = `<img src="./assets/images/icon-hamburger.svg" alt="">`
    } else{
        toggleMenu.innerHTML = `<img src="./assets/images/icon-close.svg" alt="">`
    }
    menuOpen = !menuOpen 

})

/*=================== Cards ===================*/
const cards = document.getElementById('cards')
const navigation = document.getElementById('navigation')

let activeCard = 0;

navigation.addEventListener('click', (e) => {
    showCard(parseInt(e.target.id.substr(5, 1)))
})

const showCard = (nextCard) => {

    if(nextCard !== activeCard) {
        cards.children[activeCard].classList.toggle('hidden');
        cards.children[nextCard].classList.toggle('hidden');
        navigation.children[activeCard].classList.toggle('active');
        navigation.children[nextCard].classList.toggle('active');
        activeCard = nextCard
    }
    // cards.style.transform = `translateX(${activeCard *-1 * cards.clientWidth / amountCards}px)`
    // slide.style.transition = `transform .5s ease`
}