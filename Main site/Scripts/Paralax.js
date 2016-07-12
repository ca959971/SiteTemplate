
//for material box in portfolio page
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

//Fade pages
$(function () {
    $('#divFade').removeClass('fade-out');
});

$(document).ready(function () {
    $('.parallax').parallax();
});