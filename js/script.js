$(document).ready(function() {

    // dropdown 
    $('.menu li').mouseenter(function() {
        $(this).children('.dropdown').addClass('active');
    });


    $('.menu li').mouseleave(function() {
        $(this).children('.dropdown').removeClass('active');
    });

    // direzione chevron lingua 
    $('.lang-menu').mouseenter(function() {
        var thisLink = $('.lang-menu a i');

        thisLink.removeClass('fa-chevron-down');

        thisLink.addClass('fa-chevron-up');
    });

    $('.lang-menu').mouseleave(function() {
        var thisLink = $('.lang-menu a i');

        thisLink.removeClass('fa-chevron-up');

        thisLink.addClass('fa-chevron-down');
    });

});