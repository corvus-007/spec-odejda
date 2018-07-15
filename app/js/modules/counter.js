window.counter = (function () {
  'use strict';

  var $ = window.jQuery;
  var $counter = $('.counter');

  $counter.on('click', '.counter__control--decrease', function (event) {
    event.preventDefault();
    var input = $(this).closest('.counter').find('.counter__input')[0];
    var value = parseInt(input.value);
    if (isNaN(value) || value === 0) {
      return;
    } else {
      input.value = value - 1;
    }
  });

  $counter.on('click', '.counter__control--increase', function (event) {
    event.preventDefault();
    var input = $(this).closest('.counter').find('.counter__input')[0];
    var value = parseInt(input.value);
    if (isNaN(value)) {
      input.value = 1;
    } else {
      input.value = value + 1;
    }
  });

  $counter.on('keypress', '.counter__input', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
      event.preventDefault();
    }
  });
})();
