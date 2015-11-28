// select the id of the DOM element and perform click function on it
// upon click, slide down the answer
$("#q1").click(function() {
	$("#a1").slideToggle("slow");
	$("#arrow1-down, #arrow1-up").toggleClass("collapse");
})