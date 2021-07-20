/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/moduls/calculator.js":
/*!*************************************!*\
  !*** ./src/js/moduls/calculator.js ***!
  \*************************************/
/***/ ((module) => {

function calculator() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      days = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      total = 0,
      personsSum = 0,
      daysSum = 0;

   persons.addEventListener('change', function() {
      personsSum = +this.value;
      total = (personsSum + daysSum) * 4000;

      if (days.value == '' || this.value == '') {
         totalValue.innerHTML = 0;
      } else {
         totalValue.innerHTML = total;
      }
   });   

   days.addEventListener('change', function() {
      daysSum = +this.value;
      total = (personsSum + daysSum) * 4000;

      if (persons.value == '' || this.value == '') {
         totalValue.innerHTML = 0;
      } else {
         totalValue.innerHTML = total;
      }
   });  
   
   place.addEventListener('change', function() {
      let a = total;
      
      if (days.value == '' || persons.value == '') {
         totalValue = 0;
      } else {
         totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      }      
   });
}

module.exports = calculator;

/***/ }),

/***/ "./src/js/moduls/form.js":
/*!*******************************!*\
  !*** ./src/js/moduls/form.js ***!
  \*******************************/
/***/ ((module) => {

function form() {
  let message = {
    loading: 'Идет загрузка',
    success: 'Ваши данные отправлены. Мы свяжемся с вами',
    failure: 'Что-то пошло нет так'
 }

 let form = document.getElementsByTagName('form'),
    //input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    for (let i = 0; i < form.length; i++) {
       form[i].addEventListener('submit', sendForm);
    }   
 
 function sendForm(event) {
    
    let input = this.getElementsByTagName('input');

    event.preventDefault();
    this.appendChild(statusMessage);
    let formData = new FormData(this);

    function postData(data) {
       return new Promise(function(resolve, reject) {

          let request = new XMLHttpRequest();         
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          request.addEventListener('readystatechange', function() {
             if (this.readyState < 4) {
                //statusMessage.innerHTML = message.loading;
                resolve();
             } else if (this.readyState == 4 && this.status == 200) {
                //statusMessage.innerHTML = message.success;
                resolve();
             } else //statusMessage.innerHTML = message.failure;
                reject();

          });
          
          request.send(data);
       }) //end promise

       let obj = {};

       formData.forEach(function(value, key){
          obj[key] = value;
       });

       let json = JSON.stringify(obj);
       request.send(json);  
          
    } //end postData    

    postData(formData)
       .then(() => statusMessage.innerHTML = message.loading)
       .then(() => statusMessage.innerHTML = message.success)
       .catch(() => statusMessage.innerHTML = message.failure)
       .then(() => clearInput);     
         
    function clearInput() {
       for (let i = 0; i < input.length; i++) {
       input[i].value = '';
       }
    };    
 };
}

module.exports = form;


/***/ }),

/***/ "./src/js/moduls/modal.js":
/*!********************************!*\
  !*** ./src/js/moduls/modal.js ***!
  \********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/moduls/slider.js":
/*!*********************************!*\
  !*** ./src/js/moduls/slider.js ***!
  \*********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/moduls/tabs.js":
/*!*******************************!*\
  !*** ./src/js/moduls/tabs.js ***!
  \*******************************/
/***/ ((module) => {

function tabs() {
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

   function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.add('hide');
         tabContent[i].classList.remove('show');
      }
   } 

   hideTabContent(1);

   function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
         tabContent[b].classList.add('show');
         tabContent[b].classList.remove('hide');         
      }
   }

   info.addEventListener('click', function(event) {
      let target = event.target;
      console.log(target);
      if (target && target.classList.contains('info-header-tab')) {
         for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
               hideTabContent(0);
               showTabContent(i);
               break;
            }
         }
      }
   });
}

module.exports = tabs;



/***/ }),

/***/ "./src/js/moduls/timer.js":
/*!********************************!*\
  !*** ./src/js/moduls/timer.js ***!
  \********************************/
/***/ ((module) => {

function timer() {
  let deadline = '2021-07-28';

   function getTimeEnding(endtime) {

      let t = Date.parse(endtime) - Date.parse(new Date());
      let seconds = Math.floor(t/1000 % 60);
      let minutes = Math.floor(t/1000/60 % 60);
      let hours = Math.floor(t/1000/60/60);

      return {
         'total': t,
         'seconds': seconds,
         'minutes': minutes,
         'hours': hours
      }
   }

   function setClock(id, endtime) {

      let timer = document.getElementById(id),
         hours = timer.querySelector('.hours'),
         minutes = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds'),
         timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
         let t = getTimeEnding(endtime);

         function addZero(num) {
            if (num < 10) {
               return '0' + num;
            } else return num;
         }      
         
         hours.textContent = addZero(t.hours);
         minutes.textContent = addZero(t.minutes);
         seconds.textContent = addZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
         };   
      };

   };

   setClock('timer', deadline);
}

module.exports = timer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', function() {

  'use sctict'

  let calc = __webpack_require__(/*! ./moduls/calculator */ "./src/js/moduls/calculator.js"),
      form = __webpack_require__(/*! ./moduls/form */ "./src/js/moduls/form.js"),
      modal = __webpack_require__(/*! ./moduls/modal */ "./src/js/moduls/modal.js"),
      slider = __webpack_require__(/*! ./moduls/slider */ "./src/js/moduls/slider.js"),
      tabs = __webpack_require__(/*! ./moduls/tabs */ "./src/js/moduls/tabs.js"),
      timer = __webpack_require__(/*! ./moduls/timer */ "./src/js/moduls/timer.js");

  calc();
  form();
  modal();
  slider();
  tabs();
  timer();    

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map