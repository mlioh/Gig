TweenMax.from(".logo",1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li",1 ,{
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)
TweenMax.from(".btn_area", 1, {
     opacity: 0,
     delay: .9,
     y: -20,
     ease: Expo.easeInOut})


    TweenMax.staggerFrom(".media ul li", 2, {
        opacity: 0,
        delay: 3.2,
        y: 40,
        ease: Expo.easeInOut
    })

    TweenMax.from(".title_inner", 1,{
   opacity: 0,
    delay: 1,
    y: 20,
   ease: Expo.easeInOut 
    },0.2)

 TweenMax.from(".description", 1, { 
 opacity: 0,
 delay: 1.2,
 y: 20,
 ease: Expo.easeInOut
 }, 0.2)

 TweenMax.from(".box", 1, {
  opacity: 0,
  delay: 1.5,
  y: 20,
 ease: Expo.easeInOut
 })

 TweenMax.from(".banner_content .Cnt_info .btn_area .btn", 1, { 

    opacity: 0,
    delay: 1.4,
    y: -20,
    ease: Expo.easeInOut
     })

 TweenMax.staggerFrom(".follow Area", 2, { 
     opacity: 0,
     y: 40,
     ease: Expo.easeInOut

 }, 4.1)


 TweenMax.from(".Ecnt01", 1,{
    opacity: 0,
    delay: .4,
    scale: 0.1,
    ease: Bounce.easeOut,
    });
    TweenMax. from(".Ecnt02", 1,

    { opacity: 0,
      delay: .8,
      scale: 0.1,
      ease: Back.easeOut,
     });

    TweenMax.from(".EImg02", 1,
     {
     opacity: 0, 
     delay: 1,
     scale: 0.1,
     ease: Bounce.easeOut,
    });



    TweenMax.from(".EImg01", 1, {

    opacity: 0,
    delay: 1.8,
    scale: 0.1,
    ease: Bounce.easeOut,
     });

 var slides = document.querySelectorAll('.title_animation p');


// Initialize the slide index

var slideIndex = 0;

 // Show the first slide


slides [slideIndex].classList.add('visible');
 // Start the slide show
 setInterval(function () {


// Hide the current slide

[slideIndex].classList.remove('visible');
 slides[slideIndex].classList.add("hidden");


// Calculate the index of the next slide

slideIndex = (slideIndex + 1) % slides.length;


// Show the next slide

slides[slideIndex].classList.remove('hidden');

slides[slideIndex].classList.add('visible');

}, 2000); // Change the slide every 3 seconds

let mobileNav = document.querySelector('.mobile_menu');

 document.querySelector('.OC_btn').onclick=() => { mobileNav.classList.add('active');

}
document.querySelector('.closebtn').onclick = () => {
     mobileNav.classList.remove('active');
};
VanillaTilt.init(document.querySelectorAll(".box")), {
    max: 15,
    speed: 200
}