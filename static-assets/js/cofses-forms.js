

/* Please ❤ this if you like it! */



(function($) { "use strict";

    /*==============================================================
  		Get Started PopUp
  	==============================================================*/
    $('#get-started-modal').submit(function (e) {
        var name = $('#formName')
        var surname = $('#formSurname')
        var email = $('#formEmail')
        var cell = $('#formCellphone')
        let hrefURL = "https://velocityclub.typeform.com/to/pWD8B6d6?source=website&email=" + email.val() + "&name=" + name.val() + "&surname=" + surname.val() + "&cellphone=" + cell.val() + "&_subject=sign_up_modal&_page=Coffee_sessions";

        //console.log(name.val());

        if (name.val() == "" || surname.val() == "" || email.val() == "" || cell.val() == "") {
            $('#errorMsg').fadeToggle(400);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                //url: 'https://formspree.io/xbjgbdkk',
                //url: 'https://formspree.io/f/xpzopzrd',
                url: 'https://formspree.io/f/xjvwlojj', // dev
                data: $('#get-started-modal').serialize(),
                datatype: 'json',
                beforeSend: function(){
                    $("#loader").show();
                },
                complete: function (data) {
                    $("#loader").hide();
                    $('#errorMsg').hide();
                    $('#successMsg').fadeToggle(400);
                    window.location.href = hrefURL;
                },
                error: function(data) {
                    $("#loader").hide();
                    $('#successMsg').hide();
                    $('#errorMsg').fadeToggle(400);
                    window.location.href = hrefURL;
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
  		SignUp
  	==============================================================*/
    $('#cs-sign-up').submit(function (e) {
        var name = $('#formNameCs')
        var surname = $('#formSurnameCS')
        var email = $('#formEmailCs')
        var cell = $('#formCellphoneCs')
        let hrefURL = "https://velocityclub.typeform.com/to/pWD8B6d6?source=website&email=" + email.val() + "&name=" + name.val() + "&surname=" + surname.val() + "&cellphone=" + cell.val() + "&_subject=sign_up&_page=Coffee_sessions";

        //console.log(name.val());

        if (name.val() == "" || surname.val() == "" || email.val() == "" || cell.val() == "") {
            $('#errorMsg').fadeToggle(400);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                //url: 'https://formspree.io/xbjgbdkk',
                url: 'https://formspree.io/f/xjvwlojj', // dev
                data: $('#cs-sign-up').serialize(),
                datatype: 'json',
                beforeSend: function(){
                    $("#loader").show();
                },
                complete: function (data) {
                    $("#loader").hide();
                    $('#errorMsg').hide();
                    $('#successMsg').fadeToggle(400);
                    window.location.href = hrefURL;
                },
                error: function(data) {
                    $("#loader").hide();
                    $('#successMsg').hide();
                    $('#errorMsg').fadeToggle(400);
                    window.location.href = hrefURL;
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