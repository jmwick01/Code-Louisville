/**********************************
Lightbox
**********************************/

if ( $(window).width() > 767) {

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#imageLightbox a").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    $image.attr("src", imageLocation);

    $overlay.show();

    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});


$overlay.click(function () {
    $overlay.hide();
}); 

    } else {

        $("#imageLightbox a").click(function (event) {
            event.preventDefault();
        })

}


/**********************************
Mobile Menu
**********************************/

$(document).ready(function() {
    $('li#hamburger').click(function() {
        $(this).addClass("hidden-xs").siblings().removeClass("hidden-xs");  
    });
});