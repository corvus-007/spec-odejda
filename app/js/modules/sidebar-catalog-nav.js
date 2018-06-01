window.sidebarCatalogNav = (function () {
  console.log('sidebar-catalog-nav');

  var sidebarCatalogNav = document.querySelector('.sidebar-catalog-nav');
  var sidebarCatalogNavItems = sidebarCatalogNav.querySelectorAll('.sidebar-catalog-nav__item');
  var sidebarCatalogNavLinks = sidebarCatalogNav.querySelectorAll('.sidebar-catalog-nav__link');

  sidebarCatalogNav.classList.remove('sidebar-catalog-nav--no-js');

  function closedSidebarCatalogItems(excludeItem) {
    for (var i = 0; i < sidebarCatalogNavItems.length; i++) {
      if (sidebarCatalogNavItems[i] !== excludeItem) {
        sidebarCatalogNavItems[i].classList.remove('sidebar-catalog-nav__item--opened');
      }
    }
  }

  for (var i = 0; i < sidebarCatalogNavLinks.length; i++) {
    sidebarCatalogNavLinks[i].addEventListener('click', function (event) {
      var target = event.target;
      var item = target.parentElement;

      closedSidebarCatalogItems(item);

      if (item.classList.contains('sidebar-catalog-nav__item--opened')) {
        item.classList.remove('sidebar-catalog-nav__item--opened');
      } else {
        item.classList.add('sidebar-catalog-nav__item--opened');
      }
    });
  }
})();
