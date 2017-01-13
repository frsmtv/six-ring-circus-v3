$(document).ready(function(){


// **** UI ANIMATIONS ****

    // **** INFO SECTION ****
    $('nav').delay(3000).show("pulsate");

    $('#info-btn').click(function(){
        $('body').scrollTop(0);

        $('h1').css('font-size', '2rem');
        $('h1 span').css('font-size', '2rem');

       $('#info').show("fade", 1000);
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
        $('#concerts').show("fade", 1000);
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
        $('#video').show("fade", 1000);
        $('#audio').show("fade", 1000);
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
        $('#contact').show("fade", 1000);
        $('footer').show("fade", 1000);

        $('#contact-btn').css('border-bottom', '1px solid #e65928');

        $('#info-btn').css('border-bottom', 'none');
        $('#concerts-btn').css('border-bottom', 'none');
        $('#media-btn').css('border-bottom', 'none');
    });


});