// On hamburger menu click:
    // change spans to form an X
    // Get rid of checkbox option...
    // toggle the slide out menu

const hamburgerMenu = document.querySelector('.hamburgerMenu');


hamburgerMenu.addEventListener('click', function(event) {
    console.log(event.target.children);
    // .children = children
})


// hamburgerMenu.addEventListener('click', function(event) {
//     console.log(event);
// })