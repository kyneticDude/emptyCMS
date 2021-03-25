

/* Please ❤ this if you like it! */



(function($) { "use strict";

    /*==============================================================
  		Mobile Nav
  	==============================================================*/
    $(".toggle").click(function () {
        showNavDrawer();
        $(this).toggleClass('change')
    });
    $(window).width(function () {
        sideNav();
    });
    $(window).resize(function () {
        sideNav();
    });
    $("header .overlay").click(function () {
        $("nav .vc_global_nav").toggleClass("nav-collapsed");
        $("header .overlay").toggleClass("body-overlay");
        $(".toggle").removeClass("change")

    });
    function sideNav(){
        if($(window).width()<=1247){
        }
        else {
            $("nav .vc_global_nav").removeClass("nav-collapsed");
            $("header .overlay").removeClass("body-overlay");
            $(".toggle").removeClass("change");
        }
    }
    function showNavDrawer(){
        var wrapper = $('body');
        $("nav .vc_global_nav").toggleClass("nav-collapsed");
        $("header .overlay").toggleClass("body-overlay");
        $(wrapper).toggleClass("drawer_visible");
    }


    /*==============================================================
  		Sticky header dropshadow
  	==============================================================*/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 2) {
            $('.global--header').addClass("active");
        } else {
            $('.global--header').removeClass("active");
        }
    });


    /*==============================================================
  		Dropdown
  	==============================================================*/
    $('.vc_global_nav li').hover(function() {
        $('.vc_global_nav-dropdown', this).stop().slideDown(200);
    }, function() {
        $('.vc_global_nav-dropdown', this).stop().slideUp(200);
    });


    /*==============================================================
  		Jquery Modal Pop-Up
  	==============================================================*/
    //$('#getStarted').modal();
    $('.get__started').click(function(event) {
        event.preventDefault();
        $('#getStarted').modal({
            fadeDuration: 250
        });
        return false;
    });
    $('.fin__checkup').click(function(event) {
        event.preventDefault();
        $('#getCheckup').modal({
            fadeDuration: 250
        });
        return false;
    });
    $('.signup__subscribe').click(function(event) {
        event.preventDefault();
        $('#getSubscribe').modal({
            fadeDuration: 250
        });
        return false;
    });
    $('.signup__chat').click(function(event) {
        event.preventDefault();
        $('#getChat').modal({
            fadeDuration: 250
        });
        return false;
    });
    $('.signup__webinars').click(function(event) {
        event.preventDefault();
        $('#getWebinars').modal({
            fadeDuration: 250
        });
        return false;
    });


    /*==============================================================
  		Material Forms
  	==============================================================*/
    function checkValue(element) {
        // check if the input has any value (if we've typed into it)
        if ($(element).val())
            $(element).addClass('has-value');
        else
            $(element).removeClass('has-value');
    }

    // Run on page load
    $('.form-control').each(function() {
        checkValue(this);
    })
    // Run on input exit
    $('.form-control').blur(function() {
        checkValue(this);
    });


})(jQuery);