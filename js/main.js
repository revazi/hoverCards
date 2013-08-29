c = {
	"log": function(x){
		console.log(x);
	}
}
$(document).ready(function(){
	$hovercards = $(".hovercards-item");
	$card = $(".card");
	$hovercards.hover(
		function(){
			$this = $(this);
			$card.find('.loader').show();
			$card.find('img').attr("src", $this.find('img').attr("src"));
			$("body").mousemove(function(e){
				$card.css({
					"left": e.pageX+30,
					"top": e.pageY-50,
				});
				$card.animate().stop().fadeIn();
			});
			$card.find('img').load(function(){
				$card.find('.loader').fadeOut();
			});
		},
		function(){
			$("body").unbind('mousemove');
			$card.animate().stop().fadeOut();
		}
	);
});