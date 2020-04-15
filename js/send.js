$(document).ready(function () {
  $('form').each(function(){
    $(this).validate({
      errorPlacement: function(error, element) {
        return false
    },
      ignore: ":hidden",
      rules: {
        name: {
        required: true,
        minlength: 3
        },
        phone: {
          required: true,
          minlength: 10
        }
      },
      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize()
        }).done(function() {
          $(form).find("input").val("");
          $('.modal').removeClass('modal_active');
            $('body').removeClass('stop-scroll');
            $('.popup').css('display','block');
            setTimeout(function(){
              $('.popup').css('display','none')
            },3000);
          $(form).trigger("reset");
        });        
        return false;
        }
      });
    });
  });

  /* submitHandler: function (form) {
    alert('valid form submission'); // for demo
    $.ajax({
        type: "POST",
        url: "formfiles/submit.php",
        data: $(form).serialize(),
        success: function () {
            $(form).html("<div id='message'></div>");
            $('#message').html("<h2>Your request is on the way!</h2>")
                .append("<p>someone</p>")
                .hide()
                .fadeIn(1500, function () {
                $('#message').append("<img id='checkmark' src='images/ok.png' />");
            });
        }
    }); */