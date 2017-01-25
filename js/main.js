$(document).ready(function(){


    // **** SCROLLA ****
    $('.animate').scrolla();

    // **** UI ANIMATIONS ****
    $('#intro').delay(2500).show('fade', 1000);
    $('nav').delay(2500).show('fade', 1000);

    // **** NAVBAR REDUCE ON SCROLL ****
    // var scroll_start = 0;
    // var startchange = $('body');
    // var offset = startchange.offset();
    // $(document).scroll(function() {
    //     scroll_start = $(this).scrollTop();
    //     if(scroll_start > offset.top) {
    //         $('nav').css({
    //             height: '25px',
    //             'font-size': '0.6rem'
    //         });
    //     } else {
    //         $('nav').css({
    //             height: '',
    //             'font-size': ''
    //         });
    //     }
    // });



    // **** HOME BUTTON ****
    $('#home-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('body').offset().top - 20
        }, 1000);
    });

    // **** INFO SECTION ****
    $('#info-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('#info').offset().top - 20
        }, 1000);
    });

    // **** CONCERTS SECTION ****
    $('#concerts-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('#concerts').offset().top - 20
        }, 1000);
    });

    // **** MEDIAS SECTION ****
    $('#media-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('#video').offset().top - 20
        }, 1000);
    });


    // **** CONTACT SECTION ****
    $('#contact-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('#contact').offset().top - 20
        }, 1000);
    });


});