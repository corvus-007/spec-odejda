window.productsFilters = (function (window, $) {
  'use strict';

  var filters = document.querySelector('.filters');

  if (!filters) {
    return;
  }

  var filtersForm = filters.querySelector('.filters__form');
  var priceSliderRange = filters.querySelector('[data-type-slider="price"]');
  var range = JSON.parse(priceSliderRange.dataset.range);
  var filterPriceFromInput = filters.querySelector('[name="filterPriceFrom"]');
  var filterPriceToInput = filters.querySelector('[name="filterPriceTo"]');

  function setValues(values) {
    var valueFrom = parseInt(values[0]);
    var valueTo = parseInt(values[1]);

    var valuePriceFromEl = flatFiltersForm.querySelector('[data-range-from]');
    var valuePriceToEl = flatFiltersForm.querySelector('[data-range-to]');

    flatFiltersForm.elements.price_from.value = valueFrom;
    flatFiltersForm.elements.price_to.value = valueTo;

    valuePriceFromEl.textContent = valueFrom;
    valuePriceToEl.textContent = valueTo;
  }

  function init() {
    var params = new URLSearchParams(location.search);
    var paramType = params.get('type');
    var paramAmountList = params.getAll('amount[]');
    var paramPriceFrom = params.get('price_from');
    var paramPriceTo = params.get('price_to');

    noUiSlider.create(priceSliderRange, {
      start: range,
      connect: true,
      step: 1,
      range: {
        'min': range[0],
        'max': range[1]
      }
    });

    priceSliderRange.noUiSlider.on('update', function (values, handle) {
      console.log(values, handle);
      var value = values[handle];

      switch (handle) {
        case 0:
        filterPriceFromInput.value = value;
          break;
        case 1:
        filterPriceToInput.value = value;
          break;
        default:
          break;
      }
    });

    filterPriceFromInput.addEventListener('input', function (evt) {
      priceSliderRange.noUiSlider.set([this.value, null]);
    });

    filterPriceToInput.addEventListener('input', function (evt) {
      priceSliderRange.noUiSlider.set([null, this.value]);
    });
  }

  return {
    init
  };

})(window, jQuery);
