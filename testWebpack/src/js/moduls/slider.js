function slider() {
  let slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot'),
      slideIndex = 1;

   function showSlides(n) {

      if (n > slides.length) {
         slideIndex = 1;
      }

      if (n < 1) {
         slideIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');
      dots.forEach((item) => item.classList.remove('dot-active'));

      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('dot-active');
   }

   showSlides(slideIndex);

   function plusSlide(n) {
      showSlides(slideIndex += n);
   }

   function currentSlide(n) {
      showSlides(slideIndex = n);
   }

   prev.addEventListener('click', () => {
      plusSlide(-1);
   });

   next.addEventListener('click', () => {
      plusSlide(1);
   });
   
   dotsWrap.addEventListener('click', function(event) {
      for (let i = 0; i < dots.length + 1; i++) {
         if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            console.log(i);
            currentSlide(i);
         }
      }
      
   });
}

module.exports = slider;