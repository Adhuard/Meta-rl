$(document).ready(function () {
    $(".wrapper").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        Infinity: true,
        centerMode: true,
        centerPadding: "20px", /* отступ от 3х уже видимых слайдов*/
    })
    $(".slick-prev").text(">");
    $(".slick-next").text(">");
})