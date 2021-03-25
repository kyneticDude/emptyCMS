(function($) { "use strict";

    /*==============================================================
              Sign Me Up Forms
          ==============================================================*/
    $('#signmeUpForm').submit(function (e) {
        var email = $('#signMeUp')
        //let hrefURL = "https://velocityclub.typeform.com/to/KTiw6J?source=website&email=" + email.val() + "&name=" + name.val() + "&surname=" + surname.val() + "&cellphone=" + cell.val() + "&event_interest=false";

        //console.log(name.val());

        if (email.val() == "") {
            $('#errorMsg').fadeToggle(400);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                //url: 'https://formspree.io/xbjgbdkk',
                //url: 'https://formspree.io/f/xpzopzrd',
                url: 'https://formspree.io/f/xjvwlojj', // dev
                data: $('#signmeUpForm').serialize(),
                datatype: 'json',
                beforeSend: function(){
                    $("#loader").show();
                },
                complete: function (data) {
                    $("#loader").hide();
                    $('#errorMsg').hide();
                    $('#successMsg').fadeToggle(400);
                    $("#signMeUp").removeClass("has-value");
                    //window.location.href = hrefURL;
                },
                error: function(data) {
                    $("#loader").hide();
                    $('#successMsg').hide();
                    $('#errorMsg').fadeToggle(400);
                    $("#signMeUp").removeClass("has-value");
                    //window.location.href = hrefURL;
                }
            });
            e.preventDefault();
            $(this).get(0).reset();
            //$('#stateChanger').hide();
            //$('#successMsg').fadeToggle(400);
        }
    });

    $('#successMsg, #errorMsg').click(function() {
        $(this).hide();
    });

})(jQuery);