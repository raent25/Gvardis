import $ from 'jquery'
$(document).ready(function() {
    $("#nav, #price, #title").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


});