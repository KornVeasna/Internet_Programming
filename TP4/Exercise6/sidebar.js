
var sidebar = () => {
    let enable = document.getElementById('side');

    if (enable.className == 'side-bar') {
        enable.className += ' responsive';
        document.getElementsByClassName('hamburger-menu')[0].style.display = 'none';
    } 
    else {
        enable.className = 'side-bar';
        document.getElementsByClassName('hamburger-menu')[0].style.display = 'block';
    }
}