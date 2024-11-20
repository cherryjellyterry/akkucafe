window.addEventListener("load",function(){

    const station5 = new Swiper(".station5",{
        slidesPerView : 1,
        spaceBetween : 2,
        breakpoints: {
            300: {
              slidesPerView: 1.8,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3.3,
              spaceBetween: 18,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
    })
})