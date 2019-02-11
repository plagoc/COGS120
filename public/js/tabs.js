
function changeTab(evt, tabType) {
    /*
	from w3school.com: how to make tabs tutorial
	*/
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	console.log("hello");

	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabType).style.display = "block";
	evt.currentTarget.className += " active";
}

function initializePage() {
	document.getElementById("defaultOpen").click();
}


