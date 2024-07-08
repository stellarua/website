const tabBtns = document.querySelectorAll(".tab__btn");
tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.target.closest(".tab").classList.toggle("active");
    });
});

