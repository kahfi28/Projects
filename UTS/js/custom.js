$(function(){
    "use strict";
    
    // Teks Ganti - Ganti
    $(".text-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "bounceIn",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 4000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });

    // Add nav-link class ke Menu Utama (Yang Di Kiri Sekaligus Pendukung Scrollspy)
    $('.vertical-menu li a').addClass('nav-link');

    // Scrollspy (Highlight Menu Yang Sedang Dilihat)
    $("body").scrollspy({ target: ".scrollspy"});

    // Spacer (Memberi Spasi Atau Ruang)
    var list = document.getElementsByClassName('spacer');

    for (var i = 0; i < list.length; i++) {
      var size = list[i].getAttribute('data-height');
      list[i].style.height = "" + size + "px";
    }
});