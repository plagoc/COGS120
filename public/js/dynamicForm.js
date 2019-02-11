
//create a form
var setsForm = document.createElement("form");
//setsForm.setAttribute('method',"post");
//setsForm.setAttribute('action',"submit.php");

//create input element
var weightRepsDiv = document.createElement("div");

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




//create a checkbox
var c = document.createElement("input");
c.type = "checkbox";
c.id = "checkbox1";
c.name = "check1";

//create a button
var s = document.createElement("input");
s.type = "submit";
s.value = "Submit";

// add all elements to the form
f.appendChild(i);
f.appendChild(c);
f.appendChild(s);

// add the form inside the body
$("body").append(f);   //using jQuery or
document.getElementsByTagName('body')[0].appendChild(f); //pure javascript

