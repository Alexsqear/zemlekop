const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu_icon')
const body = document.body;
if (menu && menuBtn){
  menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('active_nav')
    menuBtn.classList.toggle('active_nav')
    body.classList.toggle('lock')
  })

  menu.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active_nav')
      menuBtn.classList.remove('active_nav')
      body.classList.remove('lock')
    })
  })
}



const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchors => {
  anchors.addEventListener('click', Event => {
    Event.preventDefault()

    const blockId = anchors.getAttribute('href').substring(1);

    document.getElementById(blockId).scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  })
})


// aboutOpenBtn.addEventListener('click', () => {
//   aboutTxt.classList.toggle('active_about')
//   aboutOpenBtn.classList.toggle('disable_dot')
  
// })



window.onscroll = function() {
  let header = document.getElementById("myHeader");

  if (window.pageYOffset > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};


// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// };

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// };

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// };


