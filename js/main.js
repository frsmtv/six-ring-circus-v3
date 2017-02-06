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