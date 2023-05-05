window.onload = function () {
    $(document).ready(function () {
        $("#slider").bxSlider({
            auto: true,
            pause: 3000,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 500,
            slideMargin: 10,
            randomStart: true,
            moveSlides: 1,
            captions: true,
            pager: true,
            pagerCustom: '#pager'
        });
    });
}