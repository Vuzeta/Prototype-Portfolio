$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 1) {
		$(".main-header").addClass("bg-black")
	} 
	else {
		$(".main-header").removeClass("bg-black")
	}
});