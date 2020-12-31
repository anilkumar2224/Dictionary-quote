

$(document).ready(function () {
	$("#search").focus(function () {
		$(".search-box").addClass("border-searching");
		$(".search-icon").addClass("si-rotate");
	});
	$("#search").blur(function () {
		$(".search-box").removeClass("border-searching");
		$(".search-icon").removeClass("si-rotate");
	});
	$("#search").keyup(function () {
		if ($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
            $(".go-icon").removeClass("hide");
            $(".close").removeClass("hide");
            
		} else {
            $(".go-icon").removeClass("go-in");
            $(".close").addClass("hide");
            $(".words").removeClass("hide");
            $(".mean").addClass("hide");
		}
    });
   

});