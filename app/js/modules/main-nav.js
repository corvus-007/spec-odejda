window.mainNav = (function () {
  console.log('main-nav');

  var mainNav = document.querySelector('.main-nav');
  var mainNavToggle = mainNav.querySelector('.main-nav__toggle');
  var mainNavList = mainNav.querySelector('.main-nav__list');
  var mainNavItems = mainNavList.querySelectorAll('.main-nav__item');
  var mainNavLinks = mainNavList.querySelectorAll('.main-nav__link');

  mainNav.classList.remove('main-nav--no-js');

  function closedMainNavItems(excludeItem) {
    for (var i = 0; i < mainNavItems.length; i++) {
      if (mainNavItems[i] !== excludeItem) {
        mainNavItems[i].classList.remove('main-nav__item--opened');
      }
    }
  }

  mainNavToggle.addEventListener('click', function (event) {
    event.preventDefault();
    mainNav.classList.toggle('main-nav--opened');
  });

  for (var i = 0; i < mainNavLinks.length; i++) {
    mainNavLinks[i].addEventListener('click', function (event) {
      var target = event.target;
      var item = target.parentElement;

      closedMainNavItems(item);

      if (item.classList.contains('main-nav__item--opened')) {
        item.classList.remove('main-nav__item--opened');
      } else {
        item.classList.add('main-nav__item--opened');
      }
    });
  }
})();
