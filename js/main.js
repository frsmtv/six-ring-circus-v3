$(document).ready(function(){


// **** UI ANIMATIONS ****



    // **** NAV HIDE ON SCROLL ****
    // var scroll_start = 0;
    // var startchange = $('body');
    // var offset = startchange.offset();
    // $(document).scroll(function() {
    //     scroll_start = $(this).scrollTop();
    //     if(scroll_start > offset.top) {
    //         $('nav').addClass('animated fadeOut');
    //     } else {
    //         $('nav').removeClass('fadeOut').addClass('fadeIn');
    //     }
    // });

    // **** H1 REDUCE ON SCROLL ****
    // var scroll_start = 0;
    // var startchange = $('body');
    // var offset = startchange.offset();
    // $(document).scroll(function() {
    //     scroll_start = $(this).scrollTop();
    //     if(scroll_start > offset.top) {
    //         $('h1').css('font-size', '2rem');
    //         $('h1 span').css('font-size', '2rem');
    //     } else {
    //         $('h1').css('font-size', '$h1FontSize');
    //         $('h1 span').css('font-size', '$h1SpanFontSize');
    //     }
    // });

    // **** INFO SECTION ****
    $('#info-btn').click(function(){
        $('body').scrollTop(0);

        $('h1').css('font-size', '2rem');
        $('h1 span').css('font-size', '2rem');

       $('#info').show();
       $('#concerts').hide();
       $('#video').hide();
       $('#contact').hide();
       $('footer').hide();

       $('#info-btn').css('border-bottom', '1px solid #e65928');

       $('#concerts-btn').css('border-bottom', 'none');
       $('#media-btn').css('border-bottom', 'none');
       $('#contact-btn').css('border-bottom', 'none');
    });

    // **** CONCERTS SECTION ****
    $('#concerts-btn').click(function(){
        $('body').scrollTop(0);

        $('h1').css('font-size', '2rem');
        $('h1 span').css('font-size', '2rem');

        $('#info').hide();
        $('#concerts').show();
        $('#video').hide();
        $('#audio').hide();
        $('#contact').hide();
        $('footer').hide();

        $('#concerts-btn').css('border-bottom', '1px solid #e65928');

        $('#info-btn').css('border-bottom', 'none');
        $('#media-btn').css('border-bottom', 'none');
        $('#contact-btn').css('border-bottom', 'none');
    });

    // **** MEDIAS SECTION ****
    $('#media-btn').click(function(){
        $('body').scrollTop(0);

        $('h1').css('font-size', '2rem');
        $('h1 span').css('font-size', '2rem');

        $('#info').hide();
        $('#concerts').hide();
        $('#video').show();
        $('#audio').show();
        $('#contact').hide();
        $('footer').hide();

        $('#media-btn').css('border-bottom', '1px solid #e65928');

        $('#info-btn').css('border-bottom', 'none');
        $('#concerts-btn').css('border-bottom', 'none');
        $('#contact-btn').css('border-bottom', 'none');
    });


    // **** CONTACT SECTION ****
    $('#contact-btn').click(function(){
        $('body').scrollTop(0);

        $('h1').css('font-size', '2rem');
        $('h1 span').css('font-size', '2rem');

        $('#info').hide();
        $('#concerts').hide();
        $('#video').hide();
        $('#audio').hide();
        $('#contact').show();
        $('footer').show();

        $('#contact-btn').css('border-bottom', '1px solid #e65928');

        $('#info-btn').css('border-bottom', 'none');
        $('#concerts-btn').css('border-bottom', 'none');
        $('#media-btn').css('border-bottom', 'none');
    });


});