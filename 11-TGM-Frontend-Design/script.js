let leftButton = document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let swipingCard = document.querySelector('.card-ul');

leftButton.addEventListener('click', leftFunction);
rightButton.addEventListener('click', rightFunction);
function leftFunction() {
    swipingCard.scrollTo({
        left: swipingCard.scrollLeft - 220,
        behavior: 'smooth',
    });
}
function rightFunction() {
    swipingCard.scrollTo({
        left: swipingCard.scrollLeft + 220,
        behavior: 'smooth',
    });
}
