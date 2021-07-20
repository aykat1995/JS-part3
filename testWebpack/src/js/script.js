window.addEventListener('DOMContentLoaded', function() {

  'use sctict'

  let calc = require('./moduls/calculator'),
      form = require('./moduls/form'),
      modal = require('./moduls/modal'),
      slider = require('./moduls/slider'),
      tabs = require('./moduls/tabs'),
      timer = require('./moduls/timer');

  calc();
  form();
  modal();
  slider();
  tabs();
  timer();    

});