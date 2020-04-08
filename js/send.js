$(function(){
	$('form').submit(function(event) {
    event.preventDefault();
   	let that = $(this);
    $.ajax({
      type: "POST",
      url: "send.php",
      data: that.serialize()
    }).done(function() {
      that.find("input").val("");
      $('.modal').removeClass('modal_active');
        $('body').removeClass('stop-scroll');
        $('.popup').css('display','block');
        setTimeout(function(){
          $('.popup').css('display','none')
        },3000);
      that.trigger("reset");
    });
    return false;
  });
})