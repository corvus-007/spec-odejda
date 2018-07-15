document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  svg4everybody();

  $('[data-fancybox]').fancybox({
    buttons: [
      'close'
    ]
  });
  $.fancybox.defaults.animationEffect = "zoom";


  $('.product-detail-tabs').tabslet();

  $('.product-detail-accordion').accordionjs();

  tippy('[title]', {
    // size: 'small'
  });

  $(".js-date-pick").flatpickr({
    defaultDate: new Date(),
    "locale": 'ru'
  });

  var $productItemsAccordion = $('.product-detail__items-accordion');
  $productItemsAccordion.hide();

  $('.product-detail').one('click', '.product-detail__to-choose', function (event) {
    event.preventDefault();
    $(this).hide();
    $productItemsAccordion.slideDown();
  });

  $('.js-product-detail-add-to-cart-form').on('submit', function (event) {
    event.preventDefault();
    var data = $(this).serializeArray();
    console.log(data);
    var jqxhr = $.ajax({
      url: '',
      data: data,
    });

    jqxhr.done(function (response) {
      console.log(response);
    });
  });
});
