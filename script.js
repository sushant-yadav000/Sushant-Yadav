/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
    document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";

});


/* =========================
   PROFILE 3D TILT
========================= */

const profile =
    document.querySelector(".profile-card");

if (profile) {

    profile.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                profile.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -5;

            const rotateY =
                ((x - centerX) / centerX) * 5;

            profile.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;

        }
    );


    profile.addEventListener(
        "mouseleave",
        () => {

            profile.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

        }
    );

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .info-box, .education-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* =========================
   PROJECT HOVER
========================= */

const projects =
    document.querySelectorAll(
        ".project-card"
    );

projects.forEach(project => {

    project.addEventListener(
        "mouseenter",
        () => {

            project.style.transform =
                "translateX(8px)";

        }
    );


    project.addEventListener(
        "mouseleave",
        () => {

            project.style.transform =
                "translateX(0)";

        }
    );

});


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================
   TYPING EFFECT
========================= */

const typingElement =
    document.querySelector(".typing");


const words = [
    " • Java",
    " • C++",
    " • Python",
    " • AI / ML",
    " • Robotics"
];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;
        }

    }

    else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );

}


typeEffect();