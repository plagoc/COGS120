/*
 * Designed to store our data
 * 
 * Data Structure:     
 * WumboJumbo.JSON = { name, goal, profilePic, appMeasurement, graphType, customWorkoutFilters[]} 
 * 		 			
 * name: user inputed name (settings page)
 * goal: user inputed goal (settings page)
 * profile pic: Link to users profile photo (settigns page)
 * appMeasurement: either kg or lbs (setting sbar slider)
 * graphType: either bar or line (settings bar slider)
 * customWorkoutFilters[]: array contains arrays of custom workout filters.
 *			-first entry is name of filter
 */ 

 function setUpUserData() {
 	var userData = {
		name: 'Johnny AppleSeed',
		goal: 'Plant Lots Of Apples!!',
		profilePic: '/images/lorempixel.people.2.jpeg',
		appMeasurement: 'kg',
		graphType: 'line',
		abTesting: getAbTest(),
		customWorkoutFilters: [] 
	}
	
	return userData;
}

function getAbTest(){
	rand = Math.random();

	if (rand < 0.5) {
		return 'A';
		
	} else {
  		return 'B';		
	}
}

function startup() {
	//console.log("startup!!");
	if (typeof(Storage) !== "undefined") {
  		// Code for localStorage/sessionStorage
  		if( localStorage.getItem('userData') == null ){
  			//SetUp
  			console.log("local storage null, setup userData");
  			storeUserData(setUpUserData());
  			return true;
  		} else {
  			//console.log("local storage found!");
  			return true;
  		}
  	} else {
  		// Sorry! No Web Storage support..
  		console.log("No local Storage");
  		alert("cannot use local Storage");
  		return false;
  	}
}

function createCustomFilter(name) {
	if (!startup()) return false;
	var userData = getUserData();
	var filters = userData.customWorkoutFilters;
	var newFilter = [];	

	var isFound = false;
	//find correct filter
	for(var i=0; i< filters.length; i++) {
		if(filters[i][0] == name){
			isFound = true;
		}
	}

	if(isFound) return false;
	newFilter.push(name);
	filters.push(newFilter);	
	storeUserData(userData);
}

function editCustomFilter(name, exercise) {
	if (!startup()) return false;
	var userData = getUserData();
	var filters = userData.customWorkoutFilters;
	var filter = [];	
	var isFound = false;
	//find correct filter
	for(var i=0; i<filters.length; i++) {
		if(filters[i][0] == name){
			filter = filters[i];
			isFound = true;
		}
	}

	if(!isFound) {
		console.log("no filter matches name");
		//createCustomFilter(name);
		return;
	}

	isFound = false;
	//Search though matched filter for element
	for(var i=0; i<filter.length; i++) {
		if(filter[i] == exercise) {
			filter.splice(i,1);
			isFound = true;
		} 
	}
	if(!isFound) {
		filter.push(exercise);
	}
	
	//filters.push(filter);
	//returns false if removed var, and treu if var was added
	storeUserData(userData);
	return !isFound;
}

function getCustomFilter(name) {
	if (!startup()) return false;
	var userData = getUserData();
	var filters = userData.customWorkoutFilters;
	var filter = [];	
	//find correct filter
	for(var i=0; i<filters.length; i++) {
		if(filters[i][0] == name){
			filter = filters[i];
			return i;
		}
	}
	return -1;

}

function setNameCustomFilter(newName, oldName) {
	if (!startup()) return false;

	var iterOfFilter = getCustomFilter(oldName);
	if (iterOfFilter == -1) return;
	var userData = getUserData();
	var filter = userData.customWorkoutFilters[iterOfFilter];
	filter[0] = newName;

	storeUserData(userData);
}

//must check if custom filter exists first
function containsElement(iterOfFilter, exercise) {
	if (!startup()) return false;
	var userData = getUserData();
	var filters = userData.customWorkoutFilters;
	var filter = filters[iterOfFilter];	
	var isFound = false;


	isFound = false;
	//Search though matched filter for element
	for(var i=0; i<filter.length; i++) {
		if(filter[i] == exercise) {
			return true;
		} 
	}
	return false;
}

function updateProfleInfo(name, goal, pic) {
	if (!startup()) return false;
	var userData = getUserData();
	userData.name = name;
	userData.profilePic = pic;
	userData.goal = goal;
	storeUserData(userData);
}

function storeMeasurmentType( unitOfMeasurement ) {
	if (!startup()) return false;
	var userData = getUserData();
	userData.appMeasurement = unitOfMeasurement;
	// Change the weight header in the exerciseProgress Page
	storeUserData(userData);
}

function storeGraphType( graphType ) {
	if (!startup()) return false;
	var userData = getUserData();
	userData.graphType = graphType;
	storeUserData(userData);
}

function getProfilePic() {
	if(!startup()) return false;
	return getUserData().profilePic;
}

function getName() {
	if (!startup()) return false;	
	return getUserData().name;
}
function getGoal() {
	if (!startup()) return false; 
	return getUserData().goal;
}
function getAppMeasurement() {
	if (!startup()) return false;	
	return getUserData().appMeasurement;
}
function getGraphType() {
	if (!startup()) return false;
	return getUserData().graphType;
}

// For exerciseProgressPage
function initializeExerciseTab() {
	console.log("initializeExerciseTab");
	$("#weightHeader").html('<th id="weightHeader" class="titleTh"> Weights (' + getAppMeasurement() + ') </th>');
}


/*
 * THESE FUNCTIONS DO NOT CHECK FOR EXISTANCE OF DATA STRUCTURE
 * ONLY USE WHEN YOU CHECK FOR USERDATA FIRST!!!
 */

function getUserData() {
	if(!startup()) return false;
	return JSON.parse(localStorage.getItem( 'userData' ));
}

function storeUserData(obj) {
  	localStorage.setItem( 'userData', JSON.stringify(obj) );
}



