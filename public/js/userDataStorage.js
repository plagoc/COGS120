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
		profilePic: '',
		appMeasurement: 'kg',
		graphType: 'line',
		customWorkoutFilters: [] 
	}
	
	return userData;
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
		return false;
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
	storeUserData(userData);
}

function updateProfleInfo(name, goal) {
	if (!startup()) return false;
	var userData = getUserData();
	userData.name = name;
	userData.goal = goal;
	storeUserData(userData);
}

function storeMeasurmentType( unitOfMeasurement ) {
	console.log("yello");
	
	if (!startup()) return false;
	var userData = getUserData();
	userData.appMeasurement = unitOfMeasurement;
	storeUserData(userData);
}

function storeGraphType( graphType ) {
	if (!startup()) return false;
	var userData = getUserData();
	userData.graphType = graphType;
	storeUserData(userData);
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

/*
 * THESE FUNCTIONS DO NOT CHECK FOR EXISTANCE OF DATA STRUCTURE
 * ONLY USE WHEN YOU CHECK FOR USERDATA FIRST!!!
 */

function getUserData() {
	return JSON.parse(localStorage.getItem( 'userData' ));		
}

function storeUserData(obj) {
  	localStorage.setItem( 'userData', JSON.stringify(obj) );
}



