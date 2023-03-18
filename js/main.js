$(document).ready(function () {
    $('.most_trend .most_trend_owl').owlCarousel({
        loop: true,
        margin: 25,
        rtl: true,
        responsiveClass: true,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
        responsive: {
            320: {
                items: 2.5,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3.5,
                nav: true,
                loop: true
            },
            1200: {
                items: 4.5,
                nav: true,
                loop: true
            }
        }
    })
    $('.azkar_owl').owlCarousel({
        loop: true,
        rtl: true,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
        items: 1,
        nav:true
    })
})