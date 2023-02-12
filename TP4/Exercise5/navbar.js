
var enable_menu = () => {
    let en = document.getElementById('my-nav');
    let hamburger = document.getElementById('icon-ham');
    if (en.className == 'sub-bar') {
        en.className += ' responsive';
        hamburger.className += 'bx-rotate-90';
    }
     else {
        en.className = 'sub-bar';
        hamburger.className = 'bx bx-menu';
     }
}