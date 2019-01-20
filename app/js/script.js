document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  svg4everybody();

  $('[data-fancybox]').fancybox({
    buttons: [
      'close'
    ],
    touch: {
      vertical: false,
      momentum: false
    }
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

  if (window.ymaps !== undefined) {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("contacts-map", {
        center: [53.319025, 34.277377],
        zoom: 17,
      });
      myMap.behaviors.disable('scrollZoom');

      var myPlacemark = new ymaps.Placemark([53.319025, 34.277377], {
        hintContent: "г. Брянск, улица Кромская 101, офисное здание, 3 этаж, офис 17",
        // balloonContent: "Содержимое балуна"
      });

      myMap.geoObjects.add(myPlacemark);
    }
  }
});
