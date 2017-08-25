// banner
jQuery(document).ready(function ($) {
    var bannerbox = $(".banner").width();
    $(".slider").slideshow({
        width: bannerbox,
        height: 594,
        transition: ['bar', 'Rain', 'square', 'squareRandom', 'explode']
    });
});