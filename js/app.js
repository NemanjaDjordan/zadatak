var h1Wrap = $('.h1-wrap'),
  h1Text = $('.h1'),
  line = $('.line'),
  $jsNavigation = $('.js-navigation'),
  $window = $(window);

// Header line width
$(document).ready(h1function);
$(window).resize(h1function);

function h1function() {
  var h1Width = h1Wrap.width(),
  windowWidth = $(window).width(),
  h1MarginLeft = (windowWidth - h1Width) / 2;

  line.css('width', h1MarginLeft)
}


// Navigation
$jsNavigation.on("click touchstart", function () {
  var dataId = $(this).attr('data-id'),
    dataClass = $(this).attr('data-class'),
    widowsHeight = 0;

  $('html, body').animate({
    scrollTop: $('[data-name="' + dataId + '"]').offset().top - widowsHeight
  }, 1000);
  $('.circle').removeClass('active');
  $('[data-id="' + dataClass + '"]').addClass('active');
});

