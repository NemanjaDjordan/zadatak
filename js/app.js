var h1Wrap = $('.h1-wrap'),
  h1Text = $('.h1'),
  line = $('.line'),
  $jsNavigation = $('.js-navigation'),
  $window = $(window);

$(document).ready(h1function);
$(window).resize(h1function);

function h1function() {
  var h1Width = h1Wrap.width(),
  windowWidth = $(window).width(),
  h1MarginLeft = (windowWidth - h1Width) / 2;

  line.css('width', h1MarginLeft)
}

$jsNavigation.on("click touchstart", function () {
  var dataId = $(this).attr('data-id'),
    widowsHeight = 0;
  $('html, body').animate({
    scrollTop: $('[data-name="' + dataId + '"]').offset().top - widowsHeight
  }, 1000);

});

$(document).ready(function () {
  var windowHeight = $(window).height(),
    gridTop = windowHeight * .3,
    gridBottom = windowHeight * .6;
  $(window).on('scroll', function () {
    $('.section').each(function () {
      var thisTop = $(this).offset().top - $(window).scrollTop();
      
      if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
        $(this).removeClass('aaa');
        console.log("radi")
      } else {
        $(this).addClass('aaa');
        console.log("ne radi")
      }
    });
  });
});
