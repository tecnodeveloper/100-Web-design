let leftButton = document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let swipingCard = document.querySelector('.swiping-container');

leftButton.addEventListener('click', leftFunction);
rightButton.addEventListener('click', rightFunction);
function leftFunction() {
    swipingCard.scrollTo({
        left: swipingCard.scrollLeft - 300,
        behavior: 'smooth',
    });
}
function rightFunction() {
    swipingCard.scrollTo({
        left: rightButton.scrollLeft + 300,
        behavior: 'smooth',
    });
}
