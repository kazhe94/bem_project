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
      $('.modal-wrapper').removeClass('modal-active');
        $('body').removeClass('stop-scroll');
        $('.popup-container').css('display','block');
        setTimeout(function(){
          $('.popup-container').css('display','none')
        },3000);
      that.trigger("reset");
    });
    return false;
  });
})