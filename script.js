// Animasi muncul saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 200); // delay bertahap
    });
});

document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.navbar .nav-link')
            .forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


/* SLIDER */
let slideIndex = 0;

const slidesContainer = document.querySelector(".slides");
const slides = slidesContainer.children;
const totalSlides = slides.length;

/* === TAMBAHAN UNTUK AUDIO MP3 (TIDAK UBAH KODE LAMA) === */
function stopAudio() {
    document.querySelectorAll(".slides audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
/* === END TAMBAHAN === */

function showSlide() {
    slideIndex++;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    stopAudio(); // 🔹 TAMBAHAN SAJA

    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // setTimeout(showSlide, 10000);
}

function nextSlide() {
    slideIndex++;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    stopAudio(); // 🔹 TAMBAHAN SAJA

    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function prevSlide() {
    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    stopAudio(); // 🔹 TAMBAHAN SAJA

    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

showSlide();

// NAVBAR

const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
