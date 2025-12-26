const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollUp.classList.add("scroll-active");
    }
    else {
        scrollUp.classList.remove("scroll-active");
    }
});

// swiper js
new Swiper('.card-wrapper', {
  loop: true,
    spaceBetween: 30,

  // Pagination Bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
        768: {
            slidesPerView: 2
    },
        1024: {
            slidesPerView: 3
    }
  }
});