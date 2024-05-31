//popup
Fancybox.bind("[data-fancybox]", {
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
    },
});

document.querySelector('.change-theme').addEventListener('click', function(){
    const currentTheme = document.body.className
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme'
    } else {
        document.body.className = 'light-theme'
    }
});
