
/*==============================
    SELECTORS
==============================*/

const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

const topBtn = document.getElementById("topBtn");

const revealElements = document.querySelectorAll(
".section-title,.about-container,.timeline-item,.skill-card,.gallery img,#contact form"
);

const progressBars = document.querySelectorAll(".progress span");

/*==============================
    MOBILE MENU
==============================*/

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuBtn.innerHTML =
        '<i class="fas fa-times"></i>';

    }else{

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    }

});

/*==============================
    CLOSE MENU AFTER CLICK
==============================*/

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    });

});

/*==============================
    SMOOTH SCROLL
==============================*/

navLinks.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        window.scrollTo({

            top:target.offsetTop-70,

            behavior:"smooth"

        });

    });

});

/*==============================
    STICKY NAVBAR
==============================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

/*==============================
    ACTIVE NAVIGATION
==============================*/

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop =
section.offsetTop-150;

if(window.pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
    SCROLL REVEAL
==============================*/

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

revealElements.forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});

/*==============================
    SKILL BAR ANIMATION
==============================*/

const skillObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const span =
entry.target.querySelector("span");

const width =
span.getAttribute("style");

span.style.width=width.replace("width:","");

}

});

},

{

threshold:.5

}

);

document
.querySelectorAll(".progress")
.forEach(progress=>{

skillObserver.observe(progress);

});

/*==============================
    BACK TO TOP BUTTON
==============================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

/*==============================
    TOP BUTTON CLICK
==============================*/

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
    HERO IMAGE TILT
==============================*/

const heroImage =
document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener("mousemove",(e)=>{

const rect=
heroImage.getBoundingClientRect();

const x=
e.clientX-rect.left;

const y=
e.clientY-rect.top;

const rotateY=
((x/rect.width)-0.5)*18;

const rotateX=
((y/rect.height)-0.5)*-18;

heroImage.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

heroImage.addEventListener("mouseleave",()=>{

heroImage.style.transform=
"perspective(900px) rotateX(0) rotateY(0)";

});

}

/*==============================
    BUTTON HOVER EFFECT
==============================*/

document.querySelectorAll(".btn,.btn-outline")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});/*----------------------------------------------------------*/

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Portfolio Image";
        document.body.style.overflow = "hidden";
    });
});

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
    }
});

/*==============================
    COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".stats h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.innerText);

        let count = 0;

        const speed = Math.max(10, target / 80);

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, { threshold: 0.6 });

counters.forEach(counter => counterObserver.observe(counter));

/*==============================
    BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".btn, .btn-outline").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*==============================
    LAZY LOAD IMAGES
==============================*/

const lazyImages = document.querySelectorAll("img");

const lazyObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const img = entry.target;

        img.loading = "lazy";

        observer.unobserve(img);

    });

});

lazyImages.forEach(img => lazyObserver.observe(img));




const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background =
"linear-gradient(90deg,#9b8ec4,#7c6daa)";
progressBar.style.zIndex = "99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    progressBar.style.width =
        (scroll / height) * 100 + "%";

});



document.querySelectorAll(".shape").forEach(shape => {

    setInterval(() => {

        const x = Math.random() * 20 - 10;

        const y = Math.random() * 20 - 10;

        shape.style.transform =
            `translate(${x}px, ${y}px)`;

    }, 3000);

});

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Luxury Portfolio Loaded Successfully.");

});

const project =
document.querySelectorAll(".project");

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.4

}

);

projects.forEach(project=>{

observer.observe(project);

});
/*============ PROJECT ANIMATION ============*/

const projects = document.querySelectorAll(".project");

const projectObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(120px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards"

});

}

});

},

{
threshold:.3
}

);

projects.forEach(project=>{

projectObserver.observe(project);

});

/*============ PROJECT 3D EFFECT ============*/

document.querySelectorAll(".project-image").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});