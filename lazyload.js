document.addEventListener("DOMContentLoaded", function () {
    const lazySections = document.querySelectorAll(".lazy-load");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Stop observing once loaded
            }
        });
    }, { threshold: 0.2 });

    lazySections.forEach(section => {
        observer.observe(section);
    });
});
