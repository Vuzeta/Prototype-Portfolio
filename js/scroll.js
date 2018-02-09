 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#about .admission').offset().top }, 'slow');
      return false;
    });
  },3000);

 $('document').ready(function() {
    $('.slide-section').click(function (e) {
        
        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        });
        e.preventDefault();
    })
     
 },3000);