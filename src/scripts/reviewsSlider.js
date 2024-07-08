import Swiper from "swiper/bundle";
import "swiper/css/bundle";
var nswiper = new Swiper("#reviewsSlider", {
    slidesPerView: 1,
    grid: {
        rows: 3,
        fill: "row",
    },
    spaceBetween: 30,
    navigation: {
        nextEl: ".reviews__arrow.next",
        prevEl: ".reviews__arrow.prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: "row",
            },
            spaceBetween: 60,
        },
    },
});

document.addEventListener("click", reviewsFiltering);

function reviewsFiltering(e) {
    const button = e.target.closest(".reviews-filter__btn");
    const filterBtns = document.querySelectorAll(".reviews-filter__btn");
    const reviews = document.querySelectorAll(".review-card");
    if (button) {
        // const filterTag = button.textContent.toLowerCase();
        let filterActive = new Array();
        button.classList.contains("active") ? button.classList.remove("active"): button.classList.add("active");
        filterBtns.forEach(function (btn) {
            btn.classList.contains("active") ? filterActive.push(btn.textContent.toLowerCase()): '';                
        });

        if (filterActive.length == 0) {
            reviews.forEach(function (review) {
                review.classList.remove("non-swiper-slide");
                review.classList.add("swiper-slide");
            });

            nswiper.destroy();
            nswiper = new Swiper("#reviewsSlider", {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: "row",
                },
                spaceBetween: 30,
                navigation: {
                    nextEl: ".reviews__arrow.next",
                    prevEl: ".reviews__arrow.prev",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: "row",
                        },
                        spaceBetween: 60,
                    },
                },
            });
        } else {
            reviews.forEach(function (review) {
                if (filterActive.indexOf(review.getAttribute("data-filter")) !== -1) {
                    review.classList.remove("non-swiper-slide");
                    review.classList.add("swiper-slide");
                } else {
                    review.classList.add("non-swiper-slide");
                    review.classList.remove("swiper-slide");
                }
            });
            nswiper.destroy();
            nswiper = new Swiper("#reviewsSlider", {
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: "row",
                },
                spaceBetween: 30,
                navigation: {
                    nextEl: ".reviews__arrow.next",
                    prevEl: ".reviews__arrow.prev",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: "row",
                        },
                        spaceBetween: 60,
                    },
                },
            });
        }
    }
}