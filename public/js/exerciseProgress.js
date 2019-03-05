function setMeasurmentInfo() {
	document.getElementById("weightTitle").innerHTML = "Weight ( " + getMeasurment() + " ):";
}

// Handles user deleting a set
function deleteSet() {
	alert("Please choose the set you wish to delete"); // TODO: Change to helper text instead (?)

	var deletedASet = false;

	// Below functions handles deleting a set
	$(function() {
		$("body").click(function(e) {
    		if(!deletedASet) {
    			if (e.target.id == "tableRow" || $(e.target).parents("#tableRow").length) {
	    			var targetTableRow = $(e.target).parents("#tableRow");
	    			var weightInput = $($(targetTableRow.children()[1]).children()).val();
	    			console.log(weightInput);

	    			var repInput = $($(targetTableRow.children()[2]).children()).val();
	    			console.log(repInput);


	    			// Only hide the set IF it has values set in it
	    			if((weightInput != "") && (repInput != "")) {
	    				// Sets inputs to -1 --> indicates that these have been deleted
	    				// so when storing them in progress, these won't show up.
	    				$($(targetTableRow.children()[1]).children()).val("-1");
	    				$($(targetTableRow.children()[2]).children()).val("deleted");

	      				targetTableRow[0].style.display="none"; // Hides the set
	      				deletedASet = true;
	    			} else {
	    				alert("Cannot delete an empty set. Please choose another set.");
	    			}

    			}
    		}
		});
	});
}