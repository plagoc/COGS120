function setUpExerciseDict(nameOfExercise){
	var list = [];
	var exerciseDict = {
		test: "stored",
		name: nameOfExercise,
		history: [{date: '12/1/2011', sets: 3, reps: [5,4,6], weight:[100, 120, 140]}]
	};
		return exerciseDict;
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
	  		  var exerciseDict = getExerciseDict(name)
	  		  exerciseDict.history.push( newHistoryEntry() );

	 //printExercise(name);		
	  		  storeExerciseDict(name, exerciseDict);
	  		  populateProgressPage(name);

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
  	var dateEntry = d.getMonth() + "/" + d.getDate() + "/" + d.getYear();
  	var setsEntry = document.getElementById("myTable").rows.length - 1;
  	var weightsEntry = []; 
  	var repsEntry = [];
  	var repItr = 0;
  	var weightItr = 0;
  	for(var i = 0; i < document.getElementsByTagName("input").length; i++) {
				//add a check number function
				if(i%2 == 0) {
					weightsEntry[weightItr] = document.getElementsByTagName("input")[i].value;
					weightItr++;
				} else {
					repsEntry[repItr] = document.getElementsByTagName("input")[i].value;
					repItr++;
				}				
	  }
	  var newEntry = {date: dateEntry, sets: setsEntry, reps: repsEntry, weight: weightsEntry};
			
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

			var nameOfExerciseH2 = document.createElement("h2");
			historyContainer.appendChild(nameOfExerciseH2);
			//nameOfExerciseH2.innerHTML = exerciseDict.name;

			var exerciseContainer = document.createElement("div");
			historyContainer.appendChild(exerciseContainer);

			var dateOfExerciseH2 = document.createElement("h2");
			exerciseContainer.appendChild(dateOfExerciseH2);
			dateOfExerciseH2.innerHTML = history[i].date;

			var setsOfExerciseH2 = document.createElement("h2");
			exerciseContainer.appendChild(setsOfExerciseH2);
			//setsOfExerciseH2.innerHTML = history[i].sets;

			var weightRepsTable = document.createElement("table");
			exerciseContainer.appendChild(weightRepsTable);
			weightRepsTable.className = "setsTable";

			var rowTitle = document.createElement("tr");
			weightRepsTable.appendChild(rowTitle);
			rowTitle.className = "setsTableTitle";

			var setTitle = document.createElement("th");
			rowTitle.appendChild(setTitle);
			setTitle.innerHTML	= "sets";

			var weightTitle = document.createElement("th");
			rowTitle.appendChild(weightTitle);
			weightTitle.innerHTML	= "weight";

			var repsTitle = document.createElement("th");
			rowTitle.appendChild(repsTitle);
			repsTitle.innerHTML	= "reps";


			for (var j = 0; j < history[i].reps.length; j++ ) {
					var row = document.createElement("tr");
					weightRepsTable.appendChild(row);
					row.setAttribute('class','unit-table');

					var set = document.createElement("th");
					row.appendChild(set);
					set.innerHTML	= j + 1;

					var weight = document.createElement("th");
					row.appendChild(weight);
					weight.innerHTML	= history[i].weight[j];

					var reps = document.createElement("th");
					row.appendChild(reps);
					reps.innerHTML	= history[i].reps[j];

			}

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