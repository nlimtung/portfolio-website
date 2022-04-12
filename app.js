
$('#hello-text').delay(200).animate({'opacity':'1'},800);
$('#self-description').delay(400).animate({'opacity':'1'},1000);



$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }

        });

    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('#fadein').each( function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }

        });

    });
});




