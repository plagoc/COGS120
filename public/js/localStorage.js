/*
 * Designed to store workout data
 * 
 * Data Structure:     
 * WumboJumbo.JSON = { name, history } 
 * 		 			
 * name: name of workout
 * history[]: array of history data type, each history contains one workout record
 * 
 * history[i] = { date, sets, reps, weigth }
 * 
 * date: date of recorded workout
 * sets: number of sets recorded
 * reps[]: array contains reps in order from 1-#ofSets
 * weight[]: array contains weight in order from 1-#ofSets. (Notice this is singular... My b)
 */


function setUpExerciseDict(nameOfExercise){
	var list = [];
	var exerciseDict = {
		test: "stored",
		name: nameOfExercise,
		history: []
	};
		return exerciseDict;
}

function checkExerciseData(history) {
	for (var i = 0; i<=history.sets; i++) {
		if( history.reps[i] > 100 || history.reps[i] <= 0 || history.reps[i] == null) {
			alert('Please enter a valid #Reps: [1-100]');
			return false;
		}
		if( history.weight[i] > 1000 || history.weight[i] <= 0 || history.weight[i] == null) {
			alert('Please enter a valid weight: [1-1000]');
			return false;
		} 
		if( isNaN(history.weight[i]) ) {
			alert('Please enter a valid weight: [1-1000]');
			return false;
		} 
		if( isNaN(history.reps[i]) ) {
			alert('Please enter a valid weight: [1-1000]');
			return false;
		} 
	}
	removeRows();
	return true;
}

function storeExerciseData(name) {
	console.log("storeExerciseDict");
	if (typeof(Storage) !== "undefined") {
  		// Code for localStorage/sessionStorage
  		if( localStorage.getItem(name) == null ){
  				//SetUp
  			console.log("local storage null, setup StoreExerciseDict");
  			var exerciseDict = setUpExerciseDict(name);
  			storeExerciseDict(name, exerciseDict);
  		} 
  			console.log("storedata");
	  		var exerciseDict = getExerciseDict(name);
	  		var newHistEntry = newHistoryEntry();
	  		if( checkExerciseData(newHistEntry) )  {
	  			exerciseDict.history.push( newHistEntry );
	  		} else {
	  			return false;
	  		}


	 //printExercise(name);		
	  		  storeExerciseDict(name, exerciseDict);
	  		  populateProgressPage(name);
	  		  document.getElementById("progressID").click();

  	} else {
  		  // Sorry! No Web Storage support..
  		  console.log("No local Storage");
  		  alert("cannot use local Storage");
  	}
}

 function setUpLocalStorage(name) {
  	if (typeof(Storage) !== "undefined") {
  		// Code for localStorage/sessionStorage.
  		console.log("local Storage enabled!");

  		if( localStorage.getItem(name) == null ){
  			var exerciseDict = setUpExerciseDict(name);
  			var JSONexerciseDict = JSON.stringify(exerciseDict);
  			localStorage.setItem( name, JSONexerciseDict );
  		} else {
  			console.log("exerciseDict already setup");
  			populateProgressPage(name);
  		}

  	} else {
  		// Sorry! No Web Storage support..
  		console.log("No local Storage");
  		alert("cannot use local Storage");
  	}
  }

function newHistoryEntry() {
	var d = new Date();
  	var dateEntry = (d.getMonth() + 1) + "/" + (d.getDate() + 1) + "/" + (d.getYear() - 100);
  	var setsEntry = document.getElementById("myTable").rows.length - 1;
  	var weightsEntry = []; 
  	var repsEntry = [];
  	var repItr = 0;
  	var weightItr = 0;
  	var score = 0;
  	for(var i = 0; i < document.getElementsByTagName("input").length; i++) {
				//add a check number function
				if(i%2 == 0) {
					weightsEntry[weightItr] = processWeight(document.getElementsByTagName("input")[i].value);
					weightItr++;
				} else {
					repsEntry[repItr] = document.getElementsByTagName("input")[i].value;
					repItr++;
				}				
	  }

	for(var i = 0; i <= setsEntry; i++) {
		var weight = weightsEntry[i];
		var reps = repsEntry[i];
		score = score + (weight)*(reps*0.4);
	}
	score = score * (setsEntry + 1);
	score = score/10;

	var newEntry = {date: dateEntry, sets: setsEntry, reps: repsEntry, weight: weightsEntry, workoutScore: score};
			
	return newEntry;
}

function populateProgressPage(name) {

		//console.log(document.getElementById("thisOne").hasChildNodes());
		if (document.getElementById("thisOne").firstElementChild) {
			var child = document.getElementById("histContainer");
			document.getElementById("thisOne").removeChild(child);
		}

		var historyContainer = document.createElement("div");
		document.getElementById("thisOne").appendChild(historyContainer);
		historyContainer.id = "histContainer";

		var exerciseDict = getExerciseDict(name);
		var history = exerciseDict.history;

	for(var i = 0; i < history.length; i++ ) {

			var exerciseContainer = document.createElement("div");
			historyContainer.appendChild(exerciseContainer);

			var dateOfExerciseH2 = document.createElement("h2");
			dateOfExerciseH2.setAttribute('class','dateProgressTitle');
			exerciseContainer.appendChild(dateOfExerciseH2);
			dateOfExerciseH2.innerHTML = history[i].date;

			var workoutScoreH2 = document.createElement("h2");
			workoutScoreH2.setAttribute('class','dateProgressTitle');
			exerciseContainer.appendChild(workoutScoreH2);
			workoutScoreH2.innerHTML = "Score: " + Math.round(history[i].workoutScore);

			var weightRepsTable = document.createElement("table");
			weightRepsTable.setAttribute('class','weightRepsTable');
			exerciseContainer.appendChild(weightRepsTable);
			weightRepsTable.className = "setsTable";

			var rowTitle = document.createElement("tr");
			rowTitle.setAttribute('class','rowTitle');
			weightRepsTable.appendChild(rowTitle);
			rowTitle.className = "setsTableTitle";

			var setTitle = document.createElement("th");
			setTitle.setAttribute('class','setTitle');
			rowTitle.appendChild(setTitle);
			setTitle.innerHTML	= "sets";

			var weightTitle = document.createElement("th");
			weightTitle.setAttribute('class','weightTitle');
			rowTitle.appendChild(weightTitle);
			weightTitle.innerHTML	= "weight";

			var repsTitle = document.createElement("th");
			repsTitle.setAttribute('class','repsTitle');
			rowTitle.appendChild(repsTitle);
			repsTitle.innerHTML	= "reps";


			for (var j = 0; j < history[i].reps.length; j++ ) {
					var row = document.createElement("tr");
					row.setAttribute('class','progressRow');
					weightRepsTable.appendChild(row);
					row.setAttribute('class','unit-table');

					var set = document.createElement("th");
					set.setAttribute('class','progressSet');
					row.appendChild(set);
					set.innerHTML = j + 1;

					var weight = document.createElement("th");
					weight.setAttribute('class','progressWeight');	
					weight.id = "weightToUpdate";				
					row.appendChild(weight);
					weight.innerHTML = updateWeightInfo(history[i].weight[j]);

					var reps = document.createElement("th");
					reps.setAttribute('class','progressReps')
					row.appendChild(reps);
					reps.innerHTML	= history[i].reps[j];
			}
	}
	
}

function processWeight(weight) {
	if(getAppMeasurement() == 'kg') {
		return (weight * 2.204);
	} else {
		return (weight);
	}
}

function updateWeightInfo(weight) {
	if(getAppMeasurement() == 'lbs') {
		return (Math.round(weight) + ' lbs');
	} else {
		return (Math.round(weight * 0.453592) + ' kg');
	}
}

function getExerciseDict(exerciseName) {
	  return JSON.parse(localStorage.getItem( exerciseName ));		
}

function storeExerciseDict(exerciseName, obj) {
  	var JSONexerciseDict = JSON.stringify(obj);
  	localStorage.setItem( exerciseName, JSONexerciseDict );
}

function printExercise(name) {
	var dict = getExerciseDict(name);
	
	console.log("---Start---------PrintExercise-------------");
	console.log("Name:           " + dict.name);
	console.log("history.length: " + dict.history.length);	
	for(var i = 0; i < history.length; i++) {
			var hist = dict.history;
	console.log("     ------------Exercise" + i + "-------------");
	console.log("     Date:           " + hist[i].date);
	console.log("     sets:           " + hist[i].sets);
	console.log("     weight.Length:  " + hist[i].weight.length);
	console.log("     reps.Length:    " + hist[i].reps.length);

	}

	console.log("---End-------PrintExercise----------------");
	

}



/*
		var exerciseContainer = document.createElement("div");
				historyContainer.appendChild(exerciseContainer);

		var setsDiv = document.createElement("div");
				weightRepsDiv.appendChild(setsDiv);

		var setTitle = document.createElement("h2");
				setsDiv.appendChild(setTitle);

		var weightsDiv = document.createElement("div");
				weightRepsDiv.appendChild(weightsDiv);

		var weightsInput = document.createElement("h2");
				weightsDiv.appendChild(weightsInput);

		var repsDiv = document.createElement("div");
				weightRepsDiv.appendChild(repsDiv);

		var repsInput = document.createElement("h2");
				repsDiv.appendChild(repsInput);
*/