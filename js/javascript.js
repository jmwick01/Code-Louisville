/**********************************
Lightbox
**********************************/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
<<<<<<< HEAD
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#imageLightbox a").click(function (event) {
=======

$overlay.append($image);

$("body").append($overlay);

$("#imageLightbox a").click(function(event) {
>>>>>>> 747b1dacdcfafdb6a362bf3427faa31b1033b054
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    $image.attr("src", imageLocation);

    $overlay.show();
<<<<<<< HEAD

    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});


$overlay.click(function () {
=======
});


$overlay.click(function() {
>>>>>>> 747b1dacdcfafdb6a362bf3427faa31b1033b054
    $overlay.hide();
});