/* js for navbar */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const quote = document.getElementById("quotepara");

// starting of web
fetch('https://api.quotable.io/random?maxLength=50')
.then(response => response.json())
.then(data => {
  quote.innerHTML = `"${data.content} —${data.author}"` })
  // for-loop
setInterval(() => {
  fetch('https://api.quotable.io/random?maxLength=50')
  .then(response => response.json())
  .then(data => {
    quote.innerHTML = `"${data.content} —${data.author}"`
  })
  },60*1000*60);


  mybutton = document.getElementById("scrollTopBtn");
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  function getBackToBeginning() { window.scrollTo(0, 0);
  }

//   function sticky_relocate() {
//     var window_top = $(window).scrollTop();
//     var footer_top = $("#footer").offset().top;
//     var div_top = $('#sticky-anchor').offset().top;
//     var div_height = $("#sticky").height();

//     if (window_top + div_height > footer_top)
//         $('#sticky').removeClass('stick');    
//     else if (window_top > div_top) {
//         $('#sticky').addClass('stick');
//     } else {
//         $('#sticky').removeClass('stick');
//     }
// }