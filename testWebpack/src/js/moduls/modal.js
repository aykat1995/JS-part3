function modal() {
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descBtn = document.querySelectorAll('.description-btn');

   more.addEventListener('click', openPopup);
   close.addEventListener('click', closePopup);

   for (let i = 0; i < descBtn.length; i++) {
      descBtn[i].addEventListener('click', openPopup);
   }  
   
   function openPopup() {
      overlay.style.display = 'block';
      more.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
   };
   
   function closePopup() {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
   }
}

module.exports = modal;