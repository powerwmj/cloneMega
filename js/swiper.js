function slide(){
    var swiper = new Swiper(".calendarSwiper", {
        slidesPerView: 10,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".timeSwiper", {
        slidesPerView: 10,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

window.onload=slide;
