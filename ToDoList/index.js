 $(document).ready(function () {

	// retrieve value of persisted data
	$("#list-items").html(localStorage.getItem("listItems"));

	$(".add-items").submit(function(event) {
		event.preventDefault();
		
		// obtain the vaue of the item entered
		var item = $("#todo-list-item").val();

		// add item only if not empty
		if (item) {

			// append item insde the unordered list as a list
			$("#list-items").append("<li><input class='checkbox' type='checkbox' />" + item + "<a class='remove'>x</a><hr></li>");

			// persist the list data on local storage
			localStorage.setItem("listItems", $("#list-items").html());

			// clear values after appending
			$("#todo-list-item").val("");	
		};

		if (item === "Study" || item === "study") {
			item = $("#todo-list-item").empty();
			//add gif
			$("#list-items").append("<li><input class='checkbox' type='checkbox' />"  + "<img src='static/study.gif'>" + "<a class='remove'>x</a><hr></li>");

			// persist the list data on local storage
			localStorage.setItem("listItems", $("#list-items").html());
			
			$("#todo-list-item").val("");
		};
	});

	// $(".checkbox").change(function() {

	// })
	
	$(document).on("change", ".checkbox", function() {
		
		if ($(this).attr("checked")) {

			$(this).removeAttr("checked");
		} else {

			$(this).attr("checked", "checked");
		}

		$(this).parent().toggleClass("completed");
		localStorage.setItem("listItems", $("#list-items").html());
	});

	$(document).on("click", ".remove", function() {
		$(this).parent().fadeOut("slow", function() {
			$(this).remove();
			localStorage.setItem("listItems", $("#list-items").html());
		});
		
	});
});
