var setNum = 0; 

function addSet(){
  setNum++;
  var setsTable = document.getElementById('myTable');
  var myTd,myInput;
  var myTr = document.createElement('tr');
  myTr.setAttribute('class','unit-table');
  myTr.id = "tableRow";
  for (var i=0; i<3;i++){
    myTd = document.createElement('td');
    myTd.id = "tableTdId";

    if(i == 0){
      myTd.setAttribute('class','titleRowTd');


      myTitle = document.createElement('h3');
      myTitle.innerHTML = "Set " + setNum;
      myTitle.id = "setTitleID";
      myTd.appendChild(myTitle);
      myTr.appendChild(myTd);
    } else {
      myTd.setAttribute('class','recordRowTd');

      myInput = document.createElement('input');
      myInput.setAttribute('type','text');
      myInput.setAttribute('class','user-Input');
      myInput.id = "inputFieldID";
      myTd.appendChild(myInput);
      myTr.appendChild(myTd);
    }
  }
  setsTable.appendChild(myTr);
}

function removeRows() {
    var Parent = document.getElementById("myTable");
    while(Parent.hasChildNodes()) {
      Parent.removeChild(Parent.firstChild);
    }
    setNum =0;
    addSet();
}

function initializePage() {
  document.getElementById("defaultOpen").click();
  addSet();
}