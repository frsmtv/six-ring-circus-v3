$(document).ready(function(){


    // **** SCROLLA ****
    $('.animate').scrolla();

    // **** UI ANIMATIONS ****
    $('header').delay(1000).show('fade', 1000);
    $('nav, #logo, h1').delay(2000).show('fade', 1000);
    $('main, footer').delay(3000).show('fade', 1000);

    // $('header img').mouseover(function(){
    //     $(this).attr('src', 'dist/img/six-ring-circus-eric-meurice.jpg');
    //     $('header figure figcaption').css('opacity', '1');
    // });

    // $('header img').mouseleave(function(){
    //     $(this).attr('src', 'dist/img/we-are-six-ring-circus.jpg');
    //     $('header figure figcaption').css('opacity', '');
    // });

    $('header img').click(function(){
        $("html, body").animate({ scrollTop: $('#info').offset().top }, 2000, 'easeInOutExpo');
    });

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

    // **** GALLERY ****
    $("#gallery").flickrGallery({
        // OPTIONS
        //FLICKR API KEY
        Key: 'dd7e89c7f0c07a951c30b34d7a013486',
//Secret
        Secret: 'd792124bcd9f09bb',
//FLICKR user ID
        User: '',
//Flickr PhotoSet ID
        PhotoSet: '72157677055208426',
        /*-- VIEWBOX SETTINGS --*/
        Speed   : 400,    //Speed of animations
        navigation  : 1,    //(true) <a href="http://www.jqueryscript.net/tags.php?/Navigation/">Navigation</a> (arrows)
        keyboard  : 1,    //(true) Keyboard navigation
        numberEl  : 0     //(true) Number elements
    });



    // **** HOME BUTTON ****
    $('#home-btn').click(function(){
        $("html, body").animate({ scrollTop: $('body').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // **** INFO SECTION ****
    $('#info-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#info').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // **** CONCERTS SECTION ****
    $('#concerts-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#concerts').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // **** MEDIAS SECTION ****
    $('#media-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#video').offset().top -20 }, 2000, 'easeInOutExpo');
    });


    // **** CONTACT SECTION ****
    $('#contact-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#contact').offset().top -20 }, 2000, 'easeInOutExpo');
    });


});