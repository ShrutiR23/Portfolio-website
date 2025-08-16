var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Data Analyst", "Unity AR Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
window.addEventListener("scroll", () => {
    let skillsSection = document.querySelector("#skills");
    let position = skillsSection.getBoundingClientRect().top;
    let screenPos = window.innerHeight;

    if (position < screenPos - 100) {
        document.querySelectorAll(".progress-line span").forEach(bar => {
            bar.style.transform = "scaleX(1)";
        });
        document.querySelectorAll("circle.progress").forEach(circle => {
            circle.style.animationPlayState = "running";
        });
    }
});
document.querySelectorAll('#home, #about, #Skills, #portfolio, #contact').forEach(function (sec) {
    sec.classList.add('section-slide-up');
});

function revealSections() {
    document.querySelectorAll('.section-slide-up').forEach(function (sec) {
        var top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 60) {
            sec.classList.add('show');
        }
    });
}


revealSections();
window.addEventListener('scroll', revealSections);

// Smooth scroll and instant reveal for navbar links
document.querySelectorAll(".navbar a").forEach(function (link) {
    link.addEventListener("click", function (e) {
        var targetId = this.getAttribute("href");
        var target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            var headerOffset = 80;
            var elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - headerOffset,
                behavior: 'smooth'
            });
            setTimeout(function () { target.classList.add('show'); }, 300);
        }
    });
});
