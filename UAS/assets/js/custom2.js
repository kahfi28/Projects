$(document).ready(function() {

    $(window).on("scroll", function() {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 300) {
            $('.site-header').addClass('scrolled-header animated fadeInDown');
        } else {
            $('.site-header').removeClass('scrolled-header animated fadeInDown');
        }
    });

    $('#owl-top-features').owlCarousel({
      pagination : false,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          400:{
              items:2
          },
          600:{
              items:3
          },
          800:{
              items:4
          },
          1000:{
              items:5
          }
        }
    })

    $('#owl-similar').owlCarousel({
      pagination : true,
      paginationNumbers: false,
      autoplay: true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
        }
    })


    $(".Modern-Slider").slick({
      autoplay:true,
      autoplaySpeed:10000,
      speed:900,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:true,
      pauseOnDotsHover:true,
      cssEase:'linear',
      fade:true,
      draggable:false,
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>', 
    });

    $( '#single-motor' ).sliderPro({
      width: 570,
      height: 450,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: true,
      shuffle: true,
      smallSize: 500,
      mediumSize: 1000,
      largeSize: 3000,
      thumbnailArrows: true,
      autoplay: false
    });

    $.fn.menumaker = function(options) {
        var navbarmenu = $(this),
          settings = $.extend(
            {
              title: "Menu",
              format: "dropdown",
              sticky: false
            },
            options
          );

        return this.each(function() {
          navbarmenu.prepend('<div id="menu-button">' + settings.title + "</div>");
          $(this)
            .find("#menu-button")
            .on("click", function() {
              $(this).toggleClass("menu-opened");
              var mainmenu = $(this).next("ul");
              if (mainmenu.hasClass("open")) {
                mainmenu.hide().removeClass("open");
              } else {
                mainmenu.show().addClass("open");
                if (settings.format === "dropdown") {
                  mainmenu.find("ul").show();
                }
              }
            });

          navbarmenu
            .find("li ul")
            .parent()
            .addClass("has-sub");

          var multiTg = function() {
            navbarmenu
              .find(".has-sub")
              .prepend('<span class="submenu-button"></span>');
            navbarmenu.find(".submenu-button").on("click", function() {
              $(this).toggleClass("submenu-opened");
              if (
                $(this)
                  .siblings("ul")
                  .hasClass("open")
              ) {
                $(this)
                  .siblings("ul")
                  .removeClass("open")
                  .hide();
              } else {
                $(this)
                  .siblings("ul")
                  .addClass("open")
                  .show();
              }
            });
          };

          if (settings.format === "multitoggle") multiTg();
          else navbarmenu.addClass("dropdown");

          if (settings.sticky === true) navbarmenu.css("position", "fixed");

          var resizeFix = function() {
            if ($(window).width() > 768) {
              navbarmenu.find("ul").show();
            }

            if ($(window).width() <= 768) {
              navbarmenu
                .find("ul")
                .hide()
                .removeClass("open");
            }
          };
          resizeFix();
          return $(window).on("resize", resizeFix);
        });
      };

    $("#navbarmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

});