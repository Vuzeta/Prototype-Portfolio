 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#about .admission').offset().top - 126 }, 'slow');
      return false;
    });
  },3000);

 $('document').ready(function() {
    $('.slide-section').click(function (e) {
        
        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 65
        });
        e.preventDefault();
    })
     
 },3000);