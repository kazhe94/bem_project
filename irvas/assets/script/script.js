$(document).ready(function(){

		$('body').on('click','.tabs a',function(){
			$('.tabs a').removeClass('active active-link');
			$(this).addClass('active active-link');
			var href = $(this).attr('href');
			$('.tab-pane').removeClass('active').removeClass('in');
			$(href).addClass('active');
			setTimeout(function(){
			  $(href).addClass('in');
			}, 200);
			return false;
		  });

		  $('body').on('click','.type-list a',function(){
			$('.type-list a').removeClass('active active-decor');
			$(this).addClass('active active-decor');
			var href = $(this).attr('href');
			$('.dec-tabs').removeClass('active').removeClass('in');
			$(href).addClass('active');
			setTimeout(function(){
			  $(href).addClass('in');
			}, 200);
			return false;
		  });

		  $('[data-fancybox="images"]').fancybox({
			  loop: true, 
		  });

			$(".modalbox").fancybox();
			$("#callback-form").submit(function(){ return false; });
			$("#callback-btn").on("click", function(){ 
				// тут дальнейшие действия по обработке формы
				// закрываем окно, как правило делать это нужно после обработки данных
				$("#callback-form").fadeOut("fast", function(){
					$(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
					setTimeout("$.fancybox.close()", 1000);
				});
			});

		  $('.phone-input').mask("+7 (999) 999-99-99");
});
	
	