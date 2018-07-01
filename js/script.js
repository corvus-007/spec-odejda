document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  svg4everybody();


  $('.product-detail-tabs').tabslet();

  $('.product-detail-accordion').accordionjs();

  tippy('[title]', {
    // size: 'small'
  });

  $(".js-date-pick").flatpickr({
    defaultDate: new Date(),
    "locale": 'ru'
  });
});
