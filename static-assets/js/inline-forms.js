

/* Please ❤ this if you like it! */



(function($) { "use strict";

    // Get Started homepage 1
    $(document).ready(function() {

        $('#homeSectionOne').on('submit', function (e) {

            e.preventDefault();

            var emailInput = $('#gsinputOne').val();

            $.ajax({
                method: 'POST',
                //url: 'https://formspree.io/xbjgbdkk', // prod
                url: 'https://formspree.io/f/xjvwlojj', // dev
                data: {
                    email: emailInput,
                    _subject: 'Sign up',
                    _component: 'Get Started 1 homepage'
                },
                dataType: 'json',
                success: function () {
                    $('#errorMsg_gsOne').hide();
                    $('#successMsg_gsOne').fadeToggle(400);
                    $('#gsinputOne').removeClass('has-value');
                    $('#getStarted').modal({
                        fadeDuration: 250
                    });
                    return false;
                }
            });

            $(this).get(0).reset();
        });

        $('#successMsg_gsOne, #errorMsg_gsOne').click(function() {
            $(this).hide();
        });

        // Homepage section 2
        $('#homeSectionTwo').on('submit', function (e) {

            e.preventDefault();

            var email = $('#gsinputTwo').val();

            $.ajax({
                method: 'POST',
                //url: 'https://formspree.io/xbjgbdkk', // prod
                url: 'https://formspree.io/f/xjvwlojj', // dev
                data: {
                    email: email,
                    _subject: 'Sign up',
                    _component: 'Get Started 2 homepage'
                },
                dataType: 'json',
                success: function () {
                    $('#errorMsg_gsTwo').hide();
                    $('#successMsg_gsTwo').fadeToggle(400);
                    $('#gsinputTwo').removeClass('has-value');
                    $('#getStarted').modal({
                        fadeDuration: 250
                    });
                    return false;
                }
            });

            $(this).get(0).reset();
        });

        $('#successMsg_gsTwo, #errorMsg_gsTwo').click(function() {
            $(this).hide();
        });

    });

    // Money Guid section 1
    $('#homeSectionThree').on('submit', function (e) {

        e.preventDefault();

        var email = $('#gsinputThree').val();

        $.ajax({
            method: 'POST',
            //url: 'https://formspree.io/xbjgbdkk', // prod
            url: 'https://formspree.io/f/xjvwlojj', // dev
            data: {
                email: email,
                _subject: 'Sign up',
                _component: 'Get started money-guide'
            },
            dataType: 'json',
            success: function () {
                $('#errorMsg_gsThree').hide();
                $('#successMsg_gsThree').fadeToggle(400);
                $('#gsinputThree').removeClass('has-value');
                $('#getStarted').modal({
                    fadeDuration: 250
                });
                return false;
            }
        });

        $(this).get(0).reset();
    });

    $('#successMsg_gsThree, #errorMsg_gsThree').click(function() {
        $(this).hide();
    });

    // Expert opinions 1
    $('#homeSectionFour').on('submit', function (e) {

        e.preventDefault();

        var email = $('#gsinputFour').val();

        $.ajax({
            method: 'POST',
            //url: 'https://formspree.io/xbjgbdkk', //prod
            url: 'https://formspree.io/f/xjvwlojj', // dev
            data: {
                email: email,
                _subject: 'Sign up',
                _component: 'Get started expert opinions'
            },
            dataType: 'json',
            success: function () {
                $('#errorMsg_gsFour').hide();
                $('#successMsg_gsFour').fadeToggle(400);
                $('#gsinputFour').removeClass('has-value');
                $('#getStarted').modal({
                    fadeDuration: 250
                });
                return false;
            }
        });

        $(this).get(0).reset();
    });

    $('#successMsg_gsFour, #errorMsg_gsFour').click(function() {
        $(this).hide();
    });

    // Coffee Sessions Form
    $(document).ready(function() {
        $('#coffeeSessionsForm').submit(function (e) {
            var name = $('#formNameCs')
            var surname = $('#formSurnameCs')
            var email = $('#formEmailCs')
            var cell = $('#formCellphoneCs')
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
                    data: $('#coffeeSessionsForm').serialize(),
                    datatype: 'json',
                    beforeSend: function(){
                        $("#cLoader").show();
                    },
                    complete: function (data) {
                        $("#csLoader").hide();
                        $('#cs_errorMsg').hide();
                        $('#cs_successMsg').fadeToggle(400);
                        $('#formNameCs').removeClass('has-value');
                        $('#formSurnameCs').removeClass('has-value');
                        $('#formEmailCs').removeClass('has-value');
                        $('#formCellphoneCs').removeClass('has-value');
                    },
                    error: function(data) {
                        $("#csLoader").hide();
                        $('#cs_successMsg').hide();
                        $('#cs_errorMsg').fadeToggle(400);
                        $('#formNameCs').removeClass('has-value');
                        $('#formSurnameCs').removeClass('has-value');
                        $('#formEmailCs').removeClass('has-value');
                        $('#formCellphoneCs').removeClass('has-value');
                    }
                });
                e.preventDefault();
                $(this).get(0).reset();
            }
        });

        $('#cs_successMsg, #cs_errorMsg').click(function() {
            $(this).hide();
        });
    });

    // Blog Post Forms
    $('#blogForm').on('submit', function (e) {

        e.preventDefault();

        var email = $('#gsinputPost').val();

        $.ajax({
            method: 'POST',
            //url: 'https://formspree.io/xbjgbdkk', // prod
            url: 'https://formspree.io/f/xjvwlojj', // dev
            data: {
                email: email,
                _subject: 'Sign up',
                _component: 'Get started post'
            },
            dataType: 'json',
            success: function () {
                $('#errorMsg_gsPost').hide();
                $('#successMsg_gsPost').fadeToggle(400);
                $('#gsinputPost').removeClass('has-value');
                $('#getStarted').modal({
                    fadeDuration: 250
                });
                return false;
            }
        });

        $(this).get(0).reset();
    });

    $('#successMsg_gsPost, #errorMsg_gsPost').click(function() {
        $(this).hide();
    });

})(jQuery);