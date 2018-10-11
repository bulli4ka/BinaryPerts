$(document).ready(function() {
    if ( $(window).width() > 890 ) {
        $('.news_item').each(function(i,e){
            if (((i+1) % 3) == 0) {
                $(this).after('<span class="line"></span>');
            }
        });
    }
});