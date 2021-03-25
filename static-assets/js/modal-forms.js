

/* Please ❤ this if you like it! */



(function($) { "use strict";

    // Get Started form
    $(document).ready(function() {
        $('#getstartedModal').submit(function (e) {
            var name = $('#formName');
            var surname = $('#formSurname');
            var email = $('#formEmail');
            var cell = $('#formCellphone');
            let hrefURL = "https://velocityclub.typeform.com/to/pWD8B6d6?source=website&email=" + email.val() + "&name=" + name.val() + "&surname=" + surname.val() + "&cellphone=" + cell.val() + "&_subject=sign_up";

            //console.log(name.val());

            if (name.val() == "" || surname.val() == "" || email.val() == "" || cell.val() == "") {
                $('#errorMsg').fadeToggle(400);
                return false;
            } else {
                $.ajax({
                    method: 'POST',
                    //url: 'https://formspree.io/xbjgbdkk', // prod
                    url: 'https://formspree.io/f/xjvwlojj', // dev
                    data: $('#getstartedModal').serialize(),
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
    });

    // Get Started form
    $(document).ready(function() {
        $('#fincheckupModal').submit(function (e) {
            var name = $('#fcformName');
            var surname = $('#fcformSurname');
            var email = $('#fcformEmail');
            var cell = $('#fcformCellphone');
            let hrefURL = "https://velocityclub.typeform.com/to/pWD8B6d6?source=website&email=" + email.val() + "&name=" + name.val() + "&surname=" + surname.val() + "&cellphone=" + cell.val() + "&_subject=sign_up";

            //console.log(name.val());

            if (name.val() == "" || surname.val() == "" || email.val() == "" || cell.val() == "") {
                $('#errorMsg').fadeToggle(400);
                return false;
            } else {
                $.ajax({
                    method: 'POST',
                    //url: 'https://formspree.io/xbjgbdkk', // prod
                    url: 'https://formspree.io/f/xjvwlojj', // dev
                    data: $('#fincheckupModal').serialize(),
                    datatype: 'json',
                    beforeSend: function(){
                        $("#fcLoader").show();
                    },
                    complete: function (data) {
                        $("#fcLoader").hide();
                        $('#fc_errorMsg').hide();
                        $('#fc_successMsg').fadeToggle(400);
                        window.location.href = hrefURL;
                    },
                    error: function(data) {
                        $("#fcLoader").hide();
                        $('#fc_successMsg').hide();
                        $('#fc_errorMsg').fadeToggle(400);
                        window.location.href = hrefURL;
                    }
                });
                e.preventDefault();
                $(this).get(0).reset();
            }
        });

        $('#fc_successMsg, #fc_errorMsg').click(function() {
            $(this).hide();
        });
    });

    // Get Started Subscribe
    $(document).ready(function() {
        $('#subscribeModal').submit(function (e) {
            var name = $('#scformName');
            var surname = $('#scformSurname');
            var email = $('#scformEmail');
            var cell = $('#scformCellphone');
            let hrefURL = "https://velocityclub.typeform.com/to/pWD8B6d6?source=website&email=" + email.val() + "&name=" + name.val() + "&surname=" + surname.val() + "&cellphone=" + cell.val() + "&_subject=sign_up";

            //console.log(name.val());

            if (name.val() == "" || surname.val() == "" || email.val() == "" || cell.val() == "") {
                $('#errorMsg').fadeToggle(400);
                return false;
            } else {
                $.ajax({
                    method: 'POST',
                    //url: 'https://formspree.io/xbjgbdkk', // prod
                    url: 'https://formspree.io/f/xjvwlojj', // dev
                    data: $('#subscribeModal').serialize(),
                    datatype: 'json',
                    beforeSend: function(){
                        $("#scLoader").show();
                    },
                    complete: function (data) {
                        $("#scLoader").hide();
                        $('#sc_errorMsg').hide();
                        $('#sc_successMsg').fadeToggle(400);
                        window.location.href = hrefURL;
                    },
                    error: function(data) {
                        $("#scLoader").hide();
                        $('#sc_successMsg').hide();
                        $('#sc_errorMsg').fadeToggle(400);
                        window.location.href = hrefURL;
                    }
                });
                e.preventDefault();
                $(this).get(0).reset();
            }
        });

        $('#sc_successMsg, #sc_errorMsg').click(function() {
            $(this).hide();
        });
    });

    // Schedule chat
    $(document).ready(function() {
        $('#chatModal').submit(function (e) {
            var name = $('#cformName');
            var surname = $('#cformSurname');
            var email = $('#cformEmail');
            var cell = $('#cformCellphone');
            let hrefURL = "https://velocityclub.typeform.com/to/pWD8B6d6?source=website&email=" + email.val() + "&name=" + name.val() + "&surname=" + surname.val() + "&cellphone=" + cell.val() + "&_subject=sign_up";

            //console.log(name.val());

            if (name.val() == "" || surname.val() == "" || email.val() == "" || cell.val() == "") {
                $('#errorMsg').fadeToggle(400);
                return false;
            } else {
                $.ajax({
                    method: 'POST',
                    //url: 'https://formspree.io/xbjgbdkk', // prod
                    url: 'https://formspree.io/f/xjvwlojj', // dev
                    data: $('#chatModal').serialize(),
                    datatype: 'json',
                    beforeSend: function(){
                        $("#cLoader").show();
                    },
                    complete: function (data) {
                        $("#cLoader").hide();
                        $('#c_errorMsg').hide();
                        $('#c_successMsg').fadeToggle(400);
                        window.location.href = hrefURL;
                    },
                    error: function(data) {
                        $("#cLoader").hide();
                        $('#c_successMsg').hide();
                        $('#c_errorMsg').fadeToggle(400);
                        window.location.href = hrefURL;
                    }
                });
                e.preventDefault();
                $(this).get(0).reset();
            }
        });

        $('#c_successMsg, #c_errorMsg').click(function() {
            $(this).hide();
        });
    });

    // Schedule chat
    $(document).ready(function() {
        $('#webinarsModalForm').submit(function (e) {
            var name = $('#formNameW');
            var surname = $('#formSurnameW');
            var email = $('#formEmailW');
            var cell = $('#formCellphoneW');
            //let hrefURL = "https://velocityclub.typeform.com/to/pWD8B6d6?source=website&email=" + email.val() + "&name=" + name.val() + "&surname=" + surname.val() + "&cellphone=" + cell.val() + "&_subject=sign_up";

            //console.log(name.val());

            if (name.val() == "" || surname.val() == "" || email.val() == "" || cell.val() == "") {
                $('#errorMsg').fadeToggle(400);
                return false;
            } else {
                $.ajax({
                    method: 'POST',
                    //url: 'https://formspree.io/xbjgbdkk', // prod
                    url: 'https://formspree.io/f/xjvwlojj', // dev
                    data: $('#webinarsModalForm').serialize(),
                    datatype: 'json',
                    beforeSend: function(){
                        $("#wLoader").show();
                    },
                    complete: function (data) {
                        $("#wLoader").hide();
                        $('#w_errorMsg').hide();
                        $('#w_successMsg').fadeToggle(400);
                        $('#formNameW').removeClass('has-value');
                        $('#formSurnameW').removeClass('has-value');
                        $('#formEmailW').removeClass('has-value');
                        $('#formCellphoneW').removeClass('has-value');
                    },
                    error: function(data) {
                        $("#wLoader").hide();
                        $('#w_successMsg').hide();
                        $('#w_errorMsg').fadeToggle(400);
                        $('#formNameW').removeClass('has-value');
                        $('#formSurnameW').removeClass('has-value');
                        $('#formEmailW').removeClass('has-value');
                        $('#formCellphoneW').removeClass('has-value');
                    }
                });
                e.preventDefault();
                $(this).get(0).reset();
            }
        });

        $('#w_successMsg, #w_errorMsg').click(function() {
            $(this).hide();
        });
    });

})(jQuery);