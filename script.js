/* =========================
   MONASH TAXI JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



/* Close mobile menu after clicking a link */

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(item=>{

    item.addEventListener("click",()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});







/* =========================
   BOOKING FORM
========================= */


const bookingForm = document.getElementById("maxiBookingForm");


if(bookingForm){

    bookingForm.addEventListener("submit",(event)=>{

        event.preventDefault();


        alert(

        "🚕 Booking Request Submitted!\n\n" +

        "Thank you for choosing Monash Taxi.\n\n" +

        "Our team will contact you shortly to confirm your booking."

        );


        bookingForm.reset();


    });

}







/* =========================
   CONTACT FORM
========================= */


const contactForm = document.querySelector(".contact-form");


if(contactForm){

    contactForm.addEventListener("submit",(event)=>{

        event.preventDefault();


        alert(

        "✅ Message Sent!\n\n" +

        "Thank you for contacting Monash Taxi.\n\n" +

        "Our team will get back to you soon."

        );


        contactForm.reset();


    });

}







/* =========================
   SCROLL ANIMATION
========================= */


const animatedElements = document.querySelectorAll(

    ".card, .contact-card, .hero-card, .services div, .hours-box"

);



if(animatedElements.length > 0){


    const observer = new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("show");


            }


        });


    },


    {

        threshold:0.15

    });



    animatedElements.forEach(element=>{


        element.classList.add("hidden");


        observer.observe(element);


    });


}







/* =========================
   CURRENT YEAR FOOTER
========================= */


const footerText = document.querySelector("footer p");


if(footerText){


    const currentYear = new Date().getFullYear();


    footerText.innerHTML = footerText.innerHTML.replace(

        /\d{4}/,

        currentYear

    );


}
