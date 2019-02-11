var setNum = 0; 

function addSet(){
  setNum++;
  var setsTable = document.getElementById('myTable');
  var myTd,myInput;
  var myTr = document.createElement('tr');
  myTr.setAttribute('class','unit-table');
  for (var i=0; i<3;i++){
    myTd = document.createElement('td');
    myTd.id = "tableTdId";
    if(i == 0){
      myTitle = document.createElement('h2');
      myTitle.innerHTML = "Set " + setNum;
      myTitle.id = "setTitleID";
      myTd.appendChild(myTitle);
      myTr.appendChild(myTd);
    } else {
      myInput = document.createElement('input');
      myInput.setAttribute('type','text');
      myInput.id = "inputFieldID";
      myTd.appendChild(myInput);
      myTr.appendChild(myTd);
    }
  }
  setsTable.appendChild(myTr);
}

function initializePage() {
  document.getElementById("defaultOpen").click();
  addSet();
}