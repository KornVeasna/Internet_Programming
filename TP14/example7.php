<?php
$myFavColor = 'red';
switch ($myFavColor) {
    case 'pink':
        echo " My favorite car color is pink!";
        break;
    case 'red';
        echo "My favorite car color is <span style='color: red'> red! </span>";
        break;
    case 'orange';
        echo "My favorite car color is orange";
        break;
    default:
        echo "My favorite car color is not pink, red, orange!";
}
