 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#about .admission').offset().top }, 'slow');
      return false;
    });
  },1000);