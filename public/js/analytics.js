function infoTabClick_A() {
	console.log("Info tab click A");
	ga('create', 'UA-135624501-1', 'auto');
	ga("send", "event", 'infoTab', 'click');
}

function infoTabClick_B() {
	console.log("Info tab click B");
	ga('create', 'UA-135624501-1', 'auto');
	ga("send", "event", 'infoTab', 'click');
}

function recordTab_A() {
	ga("send", "event", 'recordTab', 'click');
}

function recordTab_B() {
	ga("send", "event", 'recordTab', 'click');
}

function progressTab_A() {
	ga("send", "event", 'progressTab', 'click');
}

function progressTab_B() {
	ga("send", "event", 'progressTab', 'click');
}


