// select the id of the DOM element and perform click function on it
// upon click, slide down the answer
$(".question").click(function() {

	$(this).next().slideToggle("slow");
	$(this).children().toggleClass("collapse");

	// $("#a1").slideToggle("slow");
	// $("#arrow1-down, #arrow1-up").toggleClass("collapse");
})

// $("#q2").click(function() {
// 	$("#a2").slideToggle("slow");
// 	$("#arrow2-down, #arrow2-up").toggleClass("collapse");
// })

// $("#q3").click(function() {
// 	$("#a3").slideToggle("slow");
// 	$("#arrow3-down, #arrow3-up").toggleClass("collapse");
// })