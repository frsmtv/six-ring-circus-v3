$(document).ready(function(){


    // **** SCROLLA ****
    $('.animate').scrolla();

    // **** UI ANIMATIONS ****

    // **** H1 REDUCE / NAV BOTTOM TO TOP ON SCROLL ****
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('h1').css('font-size', '2rem');
            $('h1').css('opacity', '.2');
            $('h1 span').css('font-size', '2rem');
            $('h1 span').css('opacity', '.2');
        } else {
            $('h1').css('font-size', '');
            $('h1').css('opacity', '1');
            $('h1 span').css('font-size', '');
            $('h1 span').css('opacity', '1');
        }
    });

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