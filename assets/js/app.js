var h1Wrap=$(".h1-wrap"),h1Text=$(".h1"),line=$(".line"),$jsNavigation=$(".js-navigation"),$window=$(window);function h1function(){var a=h1Wrap.width(),t=($(window).width()-a)/2;line.css("width",t)}$(document).ready(h1function),$(window).resize(h1function),$jsNavigation.on("click touchstart",function(){var a=$(this).attr("data-id"),t=$(this).attr("data-class");$("html, body").animate({scrollTop:+$('[data-name="'+a+'"]').offset().top},1e3),$(".circle").removeClass("active"),$('[data-id="'+t+'"]').addClass("active")});