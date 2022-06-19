$(function(){
    "use strict";

    // Spacer (Memberi Spasi Atau Ruang)
    var list = document.getElementsByClassName('spacer');

    for (var i = 0; i < list.length; i++) {
      var size = list[i].getAttribute('data-height');
      list[i].style.height = "" + size + "px";
    }
});