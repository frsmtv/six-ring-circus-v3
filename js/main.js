$(document).ready(function(){   

    // **** UI ANIMATIONS ****
    $('header').delay(500).show('fade', 1000);
    $('nav, #logo, h1').delay(750).show('fade', 1000);
    $('main, footer, #getting-started').delay(1500).show('fade', 1000);

    // $('header img').mouseover(function(){
    //     $(this).attr('src', 'dist/img/six-ring-circus-eric-meurice.jpg');
    //     $('header figure figcaption').css('opacity', '1');
    // });

    // $('header img').mouseleave(function(){
    //     $(this).attr('src', 'dist/img/we-are-six-ring-circus.jpg');
    //     $('header figure figcaption').css('opacity', '');
    // });

    $('header img').not('#mob-nav-toggle').click(function(){
        $("html, body").animate({ scrollTop: $('#teaser').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // Mob nav toggle 
    $('#mob-nav-toggle').click(function(){
        $('#logo, #getting-started, main').fadeOut();
        $('#mob-nav').fadeIn();
    });

    $('#mob-nav a').click(function(){
       $('#logo, #getting-started, main').fadeIn();
        $('#mob-nav').fadeOut(); 
    })

    // **** NAVBAR REDUCE ON SCROLL ****
    // var scroll_start = 0;
    // var startchange = $('header');
    // var offset = startchange.offset();
    // $(document).scroll(function() {
    //     scroll_start = $(this).scrollTop();
    //     if(scroll_start > offset.top) {
    //         $('#bg').css('margin-bottom', '0');
    //     } else {
    //         $('#bg').css('margin-bottom', '');
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
        $("html, body").animate({ scrollTop: $('#teaser').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // **** CONCERTS SECTION ****
    $('#concerts-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#concerts').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // **** MEDIAS SECTION ****
    $('#media-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#photo').offset().top -20 }, 2000, 'easeInOutExpo');
    });


    // **** CONTACT SECTION ****
    $('#contact-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#contact').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // ***********

    $('#mob-home-btn').click(function(){
        $("html, body").animate({ scrollTop: $('body').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // **** INFO SECTION ****
    $('#mob-info-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#teaser').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // **** CONCERTS SECTION ****
    $('#mob-concerts-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#concerts').offset().top -20 }, 2000, 'easeInOutExpo');
    });

    // **** MEDIAS SECTION ****
    $('#mob-media-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#photo').offset().top -20 }, 2000, 'easeInOutExpo');
    });


    // **** CONTACT SECTION ****
    $('#mob-contact-btn').click(function(){
        $("html, body").animate({ scrollTop: $('#contact').offset().top -20 }, 2000, 'easeInOutExpo');
    });

     // **** SCROLLA ****
    $('.animate').scrolla();

});