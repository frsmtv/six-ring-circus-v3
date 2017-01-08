$(document).ready(function(){


// **** UI ANIMATIONS ****

    // **** INIT BIGTEXT PLUGIN ****
    $('#bigtext').bigtext();
    $('.homebigtext').bigtext();

        // **** BIG TEXT ANIMATION ****
        setTimeout(function(){
        $('h1').text('six-ring').addClass('animated fadeIn');
        }, 1500);

        // $('h1').delay(6000).text('circus');

    // **** H1 CLICK ****
    $('h1').click(function(){
        $('#info').hide();
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

       $('#infobtn').css('border-bottom', '1px solid #212121');

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

        $('#concertsbtn').css('border-bottom', '1px solid #212121');

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

        $('#videobtn').css('border-bottom', '1px solid #212121');

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

        $('#audiobtn').css('border-bottom', '1px solid #212121');

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

        $('#contactbtn').css('border-bottom', '1px solid #212121');

        $('#infobtn').css('border-bottom', 'none');
        $('#concertsbtn').css('border-bottom', 'none');
        $('#videobtn').css('border-bottom', 'none');
        $('#audiobtn').css('border-bottom', 'none');
    });


});