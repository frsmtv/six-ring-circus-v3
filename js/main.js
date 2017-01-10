$(document).ready(function(){


// **** UI ANIMATIONS ****

    // **** NAV HIDE ON SCROLL ****
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('nav').addClass('animated fadeOut');
        } else {
            $('nav').removeClass('fadeOut').addClass('fadeIn');
        }
    });

    // **** H1 CLICK ****
    $('h1').click(function(){
        $('h1').hide();
        $('nav').fadeIn();
        $('main').fadeIn();
        $('#info').fadeIn();

        $('#concerts').hide();
        $('#video').hide();
        $('#audio').hide();
        $('#contact').hide();
        $('footer').hide();
    });

    // **** INFO SECTION ****
    $('#infobtn').click(function(){
       $('#info').show();
       $('#concerts').hide();
       $('#video').hide();
       $('#audio').hide();
       $('#contact').hide();
       $('footer').hide();

       $('#infobtn').css('border-bottom', '1px solid #fff');

       $('#concertsbtn').css('border-bottom', 'none');
       $('#videobtn').css('border-bottom', 'none');
       $('#audiobtn').css('border-bottom', 'none');
       $('#contactbtn').css('border-bottom', 'none');
    });

    // **** CONCERTS SECTION ****
    $('#concertsbtn').click(function(){
        $('#info').hide();
        $('#concerts').show();
        $('#video').hide();
        $('#audio').hide();
        $('#contact').hide();
        $('footer').hide();

        $('#concertsbtn').css('border-bottom', '1px solid #fff');

        $('#infobtn').css('border-bottom', 'none');
        $('#videobtn').css('border-bottom', 'none');
        $('#audiobtn').css('border-bottom', 'none');
        $('#contactbtn').css('border-bottom', 'none');
    });

    // **** VIDEO SECTION ****
    $('#videobtn').click(function(){
        $('#info').hide();
        $('#concerts').hide();
        $('#video').show();
        $('#audio').hide();
        $('#contact').hide();
        $('footer').hide();

        $('#videobtn').css('border-bottom', '1px solid #fff');

        $('#infobtn').css('border-bottom', 'none');
        $('#concertsbtn').css('border-bottom', 'none');
        $('#audiobtn').css('border-bottom', 'none');
        $('#contactbtn').css('border-bottom', 'none');
    });

    // **** AUDIO SECTION ****
    $('#audiobtn').click(function(){
        $('#info').hide();
        $('#concerts').hide();
        $('#video').hide();
        $('#audio').show();
        $('#contact').hide();
        $('footer').hide();

        $('#audiobtn').css('border-bottom', '1px solid #fff');

        $('#infobtn').css('border-bottom', 'none');
        $('#concertsbtn').css('border-bottom', 'none');
        $('#videobtn').css('border-bottom', 'none');
        $('#contactbtn').css('border-bottom', 'none');
    });

    // **** CONTACT SECTION ****
    $('#contactbtn').click(function(){
        $('#info').hide();
        $('#concerts').hide();
        $('#video').hide();
        $('#audio').hide();
        $('#contact').show();
        $('footer').show();

        $('#contactbtn').css('border-bottom', '1px solid #fff');

        $('#infobtn').css('border-bottom', 'none');
        $('#concertsbtn').css('border-bottom', 'none');
        $('#videobtn').css('border-bottom', 'none');
        $('#audiobtn').css('border-bottom', 'none');
    });


});