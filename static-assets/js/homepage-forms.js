

/* Please ❤ this if you like it! */



(function($) { "use strict";

    /*==============================================================
  		Get Started Sec 1
  	==============================================================*/
    $('#getStartedSectionOne').submit(function (e) {
        var email = $('#get-started-one')


        if (email.val() == "") {
            $('#errorMsg').fadeToggle(400);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                //url: 'https://formspree.io/xbjgbdkk',
                url: 'https://formspree.io/f/xjvwlojj', // dev
                data: $('#getStartedSectionOne').serialize(),
                datatype: 'json',
                beforeSend: function(){
                    $("#loader").show();

                },
                success: function (data) {
                    $("#loader").hide();
                    $('#errorMsg').hide();
                    $('#successMsg').fadeToggle(400);
                    $(email).removeClass("has-value");
                },
                error: function(data) {
                    $("#loader").hide();
                    $('#successMsg').hide();
                    $('#errorMsg').fadeToggle(400);
                    $(email).removeClass("has-value");
                }
            });
            e.preventDefault();
            $(this).get(0).reset();
        }
    });

    $('#successMsg, #errorMsg').click(function() {
        $(this).hide();
    });

    /*==============================================================
  		Get Started Sec 2
  	==============================================================*/
    $('#getStartedSectionTwo').submit(function (e) {
        var email = $('#get-started-two')


        if (email.val() == "") {
            $('#errorMsg').fadeToggle(400);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                //url: 'https://formspree.io/xbjgbdkk',
                url: 'https://formspree.io/f/xjvwlojj', // dev
                data: $('#getStartedSectionTwo').serialize(),
                datatype: 'json',
                beforeSend: function(){
                    $("#loader").show();

                },
                success: function (data) {
                    $("#loader").hide();
                    $('#errorMsg').hide();
                    $('#successMsg').fadeToggle(400);
                    $(email).removeClass("has-value");
                },
                error: function(data) {
                    $("#loader").hide();
                    $('#successMsg').hide();
                    $('#errorMsg').fadeToggle(400);
                    $(email).removeClass("has-value");
                }
            });
            e.preventDefault();
            $(this).get(0).reset();
        }
    });

    $('#successMsg, #errorMsg').click(function() {
        $(this).hide();
    });

    /*==============================================================
  		Get Started Sec 1 Money Guide
  	==============================================================*/
    $('#getStartedSectionOneMg').submit(function (e) {
        var email = $('#get-started-one')


        if (email.val() == "") {
            $('#errorMsg').fadeToggle(400);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                //url: 'https://formspree.io/xbjgbdkk',
                url: 'https://formspree.io/f/xjvwlojj',
                data: $('#getStartedSectionOneMg').serialize(),
                datatype: 'json',
                beforeSend: function(){
                    $("#loader").show();

                },
                success: function (data) {
                    $("#loader").hide();
                    $('#errorMsg').hide();
                    $('#successMsg').fadeToggle(400);
                    $(email).removeClass("has-value");
                },
                error: function(data) {
                    $("#loader").hide();
                    $('#successMsg').hide();
                    $('#errorMsg').fadeToggle(400);
                    $(email).removeClass("has-value");
                }
            });
            e.preventDefault();
            $(this).get(0).reset();
        }
    });

    $('#successMsg, #errorMsg').click(function() {
        $(this).hide();
    });

})(jQuery);