/* eslint-disable no-restricted-globals */
import $ from "jquery";

export const teste = () => {
  $(window).on("load", function () {
    setHash();
    stopAnimateOnScroll();
    setTotalPageNumber();
    setDataNumberForSections();
    setActiveMenuItem();
    setSlowScroll();
    setMenu();
    skillFill();

    $(".doc-loader").fadeOut();
  });

  $(window).on("resize", function () {
    skillFill();
    setActiveMenuItem();
  });

  $(window).on("scroll", function () {
    skillFill();
    setActiveMenuItem();
  });

  //------------------------------------------------------------------------
  //Helper Methods -->
  //------------------------------------------------------------------------

  function stopAnimateOnScroll() {
    $("html, body").on(
      "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
      function () {
        $("html, body").stop();
      }
    );
  }

  function setHash() {
    var hash = location.hash;
    if (hash !== "" && $(hash).length) {
      $("html, body").animate({ scrollTop: $(hash).offset()?.top }, 1);
      $("html, body").animate({ scrollTop: $(hash).offset()?.top }, 1);
    } else {
      $(window).scrollTop(1);
      $(window).scrollTop(0);
    }
  }

  function setTotalPageNumber() {
    $(".total-pages-num").html(("0" + $(".section").length).slice(-2));
  }

  function setDataNumberForSections() {
    var k = 1;
    $(".page-wrapper .section").each(function () {
      $(this).data("num", ("0" + k).slice(-2));
      k++;
    });
  }

  function setActiveMenuItem() {
    var currentSection = null;
    var c = $(".page-wrapper .section.section-active").data("num");
    $(".section").each(function () {
      var element = $(this).attr("id");
      if ($("#" + element).is("*")) {
        const winScrollTop = $(window).scrollTop();
        if (winScrollTop! >= $("#" + element).offset()!.top - 150) {
          currentSection = element;
        }
      }
    });
    $(".nav-menu ul li")
      .removeClass("current")
      .find('a[href*="#' + currentSection + '"]')
      .parent()
      .addClass("current");
    $(".page-wrapper .section").removeClass("section-active");
    $("#" + currentSection).addClass("section-active");
    if (c !== $("#" + currentSection).data("num")) {
      c = $("#" + currentSection).data("num");
      $(".current-num span").animate(
        { opacity: "0", left: "-5px" },
        150,
        function () {
          $(this).text(c).animate({ opacity: "1", left: "0" }, 150);
        }
      );
    }
  }

  function setSlowScroll() {
    $('.nav-menu ul li a[href^="#"], a.button, .slow-scroll').on(
      "click",
      function (e) {
        const hash = $(this).attr("href");
        if (hash === undefined) return;
        if (hash === "#") {
          e.preventDefault();
        } else {
          $("html, body").animate({ scrollTop: $(hash).offset()?.top }, 1500);
          return false;
        }
      }
    );
  }

  function skillFill() {
    if ($(".skill-fill")[0]) {
      $(".skill-fill:not(.animation-done").each(function (i) {
        var top_of_object = $(this).offset()!.top;
        var bottom_of_window = $(window).scrollTop()! + $(window).height()!;
        if (bottom_of_window - 70 > top_of_object) {
          $(this).width($(this).data("fill"));
          $(this).addClass("animation-done");
        }
      });
    }
  }

  function setMenu() {
    $(".nav-btn").on("click", function () {
      $(".nav-btn, .s-nav").toggleClass("active");
      return false;
    });

    if ($(window).width()! > 1200) {
      $(".dropdown").on("mouseenter", function () {
        $(this).find("ul").show("fast");
      });
      $(".nav-list").on("mouseleave", function () {
        $(".dropdown ul").hide("fast");
      });
    } else {
      $(".dropdown").on("click", function () {
        $(this).find("ul").toggle("fast");
      });
    }

    $(".nav-list>li>a").on("click", function () {
      if ($(window).width()! < 1200) {
        $(".s-nav, .nav-btn").toggleClass("active");
      }
    });
  }
};

export default teste;
