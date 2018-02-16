//SCROLL ICON

if (document.documentElement.clientWidth >= 1824) {

    $(function() {
        $('.scroll-down').click (function() {
            $('html, body').animate({scrollTop: $('#about').offset().top - 126 }, 'slow');
            return false;
        });
    },3000);
    } else if (document.documentElement.clientWidth >= 1224) {
        $(function() {
            $('.scroll-down').click (function() {
                $('html, body').animate({scrollTop: $('#about .admission').offset().top - 90 }, 'slow');
                return false;
            });
        },3000);
    }


//SCROLL MENU

    $('document').ready(function() {
        $('.slide-section').click(function (e) {

            if (document.documentElement.clientWidth >= 1824) {

                var linkHref = $(this).attr('href');

                $('html, body').animate({
                    scrollTop: $(linkHref).offset().top - 65
                });
                e.preventDefault();

            } else if (document.documentElement.clientWidth >= 1224) {

                var linkHref = $(this).attr('href');

                $('html, body').animate({
                    scrollTop: $(linkHref).offset().top - 50
                });
                e.preventDefault();

            } else if (document.documentElement.clientWidth >= 768) {       
                var linkHref = $(this).attr('href');

                $('html, body').animate({
                    scrollTop: $(linkHref).offset().top - 100
                });
                e.preventDefault();
            } else if (document.documentElement.clientWidth >= 200) {       
                var linkHref = $(this).attr('href');

                $('html, body').animate({
                    scrollTop: $(linkHref).offset().top - 100
                });
                e.preventDefault();
            }
        });
    },3000);