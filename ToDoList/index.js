$(document).ready(function () {

	$(".add-items").submit(function(event) {
		event.preventDefault();
		
		// obtain the vaue of the item entered
		var item = $("#todo-list-item").val();

		// add item only if not empty
		if (item) {

			// append item insde the unordered list as a list
			$("#list-items").append("<li><input type='checkbox' />" + item + "<a class='remove'>x</a><hr></li>");

			// clear values after appending
			$("#todo-list-item").val("");	
		};
	});
});
