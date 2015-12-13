$(document).ready(function() {
    // CODE HERE!

    $.ajax({
    	url: "https://api.myjson.com/bins/2sadq?pretty=1",
    	dataType: "json",
    	success:  function(response)  {
    		$.each(response.apartments, function(i, apartment) {
    			
    		});
    	}
    });
});


