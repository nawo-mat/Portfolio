jQuery(function ($) {
  $('.l-header__hamburger-button').on('click', function () {
    $('body').toggleClass('js-open');
  });
  
  $('.js-gallery').each(function () {
    $(this).modaal({
      type: 'image'
    });
  });
});
