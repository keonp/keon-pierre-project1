// Objective:
    // On hamburger menu click change spans to form an X
    // Get rid of checkbox label method
    // Toggle the slide out menu to default position when screen width is expanded passed mobile width

const hamburgerMenu = document.querySelector('.hamburgerMenu');

const aboutLink = document.querySelector('.closeMenu');

hamburgerMenu.addEventListener('click', function(event) {
    // Store event in a variable
    let menuBars = event.target;

    // In the event one of the spans is selected instead of the div, and said span is stored in the variable above, convert the variable to the parent element - aka the div
    if (menuBars.tagName === 'SPAN') {
        menuBars = menuBars.parentElement;
    }

    // update the div variable to store each span
    menuBars = menuBars.children;

    // assign each span to a variable
    const topBar = menuBars['0'];
    const middleBar = menuBars['1'];
    const bottomBar = menuBars['2'];

    // transform each span to form the X
    topBar.classList.toggle('topMenuBar');
    middleBar.classList.toggle('middleMenuBar');
    bottomBar.classList.toggle('bottomMenuBar');

    // slide the menu in and out
    const slideOutNav = document.querySelector('.slideOutNav');
    slideOutNav.classList.toggle('slideIn');

    // Window resize listen event
    window.addEventListener('resize', function() {

        // Store screen width in a variable
        const windowWidth = window.innerWidth;

        // When screen is beyond 480 remove slidein, top, middle, bottom bar classes
        if (windowWidth > 480) {
            toggleOff(slideOutNav, topBar, middleBar, bottomBar);
        }
    })

    // Close out nav when about is clicked since about links to an on page section for the homepage and blog
    aboutLink.addEventListener('click', function() {
        toggleOff(slideOutNav, topBar, middleBar, bottomBar);
    })
})

// Function to change the spans and slide out nav to their default positions by removing the classes that were toggled on
function toggleOff(nav, topSpan, middleSpan, bottomSpan) {
    nav.classList.remove('slideIn');
    topSpan.classList.remove('topMenuBar');
    middleSpan.classList.remove('middleMenuBar');
    bottomSpan.classList.remove('bottomMenuBar');
}