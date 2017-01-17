$(document).ready(function(){


    // **** SCROLLA ****
    $('.animate').scrolla();

    // **** UI ANIMATIONS ****
    $('h1').delay(5000).fadeIn();

    // **** HOME BUTTON ****
    $('#home-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('body').offset().top - 20
        }, 2000);
    });

    // **** INFO SECTION ****
    $('#info-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('#info').offset().top - 20
        }, 2000);
    });

    // **** CONCERTS SECTION ****
    $('#concerts-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('#concerts').offset().top - 20
        }, 2000);
    });

    // **** MEDIAS SECTION ****
    $('#media-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('#video').offset().top - 20
        }, 2000);
    });


    // **** CONTACT SECTION ****
    $('#contact-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('#contact').offset().top - 20
        }, 2000);
    });


});