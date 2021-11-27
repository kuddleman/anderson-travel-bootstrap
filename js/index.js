//Smooth Scroll to Anchors 
$(function(){
    $( "a.option-list-link" ).on("click", function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});