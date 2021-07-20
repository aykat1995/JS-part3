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