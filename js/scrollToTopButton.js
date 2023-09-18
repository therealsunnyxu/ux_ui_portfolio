$(".scrollToTopButton").click(function() {
    $(window).scrollTop(0);
    $(".scrollToTopButton").fadeOut();
})

$(window).on("scroll", function() {
    if ($(window).scrollTop() >= 64) {
        $(".scrollToTopButton").fadeIn();
    } else {
        $(".scrollToTopButton").fadeOut();
    }
})

function init() {
    $(".scrollToTopButton").css("display", "none");
}

init()