// On hamburger menu click:
    // change spans to form an X
    // Get rid of checkbox option...
    // toggle the slide out menu

const hamburgerMenu = document.querySelector('.hamburgerMenu');


hamburgerMenu.addEventListener('click', function(event) {
    // Store event in a variable
    let menuBars = event.target;

    // In the event that a span is selected instead of the div and store in the variable above, convert the variable to the parent element - aka the div
    if (menuBars.tagName === 'SPAN') {
        menuBars = menuBars.parentElement;
    }

    menuBars = menuBars.children;

    const topBar = menuBars['0'];
    const middleBar = menuBars['1'];
    const bottomBar = menuBars['2'];

    topBar.classList.toggle('topMenuBar');
    middleBar.classList.toggle('middleMenuBar');
    bottomBar.classList.toggle('bottomMenuBar');
})