(function() {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;


    if (document.documentElement.clientWidth >= 1824) // jeśli rozdzielczość {
        Array.prototype.forEach.call(section, function(e) {
            sections[e.id] = e.offsetTop - 150; // ODDALENIE OD NAGŁOWKU
        });
    } else if (document.documentElement.clientWidth >= 1224) {
        Array.prototype.forEach.call(section, function(e) {
            sections[e.id] = e.offsetTop - 140;
        });
    } else if (document.documentElement.clientWidth >= 768) {
        Array.prototype.forEach.call(section, function(e) {
            sections[e.id] = e.offsetTop - 240;  
        });
    }

    window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {

                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    };
    )
();
