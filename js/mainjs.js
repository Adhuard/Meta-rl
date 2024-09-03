$(document).ready(function () {
    $(".team-slider-wrapper").slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinity: true,
        centerMode: true,
      
        arrows: false,
        autoplaySpeed: 1500,
        centerPadding: "0px",
        responsive: [
        {
            breakpoint: 920,
            settings:
            {
                slidesToShow: 2,
                centerPadding: "0px"
            },
        },
        
        {            
            breakpoint: 600,
            settings:
            {
                slidesToShow: 1,
                centerPadding: "0px"
            },
        
        }
        
        ]

    })

})

$(document).ready(function () {
    $(".artist-container").slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinity: true,
        centerMode: true,
        arrows: false,
        autoplaySpeed: 1000,
        centerPadding: "0px", 
        responsive: [
            {
                breakpoint: 1220,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings:{
                slidesToShow: 1,
                }
            }
        ]
    })

})