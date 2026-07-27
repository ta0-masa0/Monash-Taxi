/* =========================
   MONASH TAXI JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}





/* Close menu after clicking link */

const links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{


    link.addEventListener("click",()=>{

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

        "🚐 Booking Request Submitted!\n\n" +

        "Thank you for choosing Monash Taxi.\n\n" +

        "Our team will contact you shortly to confirm your Maxi Taxi booking."

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

        "Thank you for contacting Monash Taxi.\n" +

        "We will get back to you soon."

        );


        contactForm.reset();


    });


}







/* =========================
   SCROLL ANIMATION
========================= */


const animatedItems = document.querySelectorAll(

".card, .contact-card, .hero-card, .services div"

);



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



animatedItems.forEach(item=>{


    item.classList.add("hidden");


    observer.observe(item);


});







/* =========================
   CURRENT YEAR FOOTER
========================= */


const footerYear = document.querySelector("footer p");


if(footerYear){


    const year = new Date().getFullYear();


    footerYear.innerHTML =

    footerYear.innerHTML.replace(
        "2026",
        year
    );


}