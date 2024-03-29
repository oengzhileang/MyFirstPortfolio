// Change navbar background color on scroll
// document.addEventListener("scroll", function () {
//     var navbar = document.getElementById("NAVBAR");
  
//     if (window.scrollY > 0) {
//       navbar.classList.add("scroll-bg");
//     } else {
//       navbar.classList.remove("scroll-bg");
//     }
//   });



// window.onscroll = () => {
//   const nav = document.querySelector('#navbar');
//   if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
// };

// const primaryheader = document.querySelector('.primary-header');
// const scrollwatcher = document.createElement('div');

// scrollwatcher.setAttribute('data-scroll-watcher','');
// primaryheader.before(scrollwatcher);

// const navObserver = new IntersectionObserver((entries) => {
//   primaryheader.classList.toggle('sticking' , entries[0].isIntersecting)
// });

// navObserver.observe(scrollwatcher);

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

//Responsive Navigation Menu JS Code
let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.menu');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
