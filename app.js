'use strict';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let donors = [];
let total = 0;
let table = document.getElementById("mainTable");

function Donor(DonorName, Amount,age) {
    this.DonorName = DonorName;
    this.Amount = Amount;
    this.age;
    donors.push(this);
}


let tableRow = document.createElement('tr');
tableRow.setAttribute("id", "totall");
table.appendChild(tableRow);
Donor.prototype.total = function () {
    tableRow.textContent = `Total = ${total}`;

}
Donor.prototype.total();


Donor.prototype.render = function () {
    let tbody = document.getElementById("insideTable")
    let tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);
    let tableData = document.createElement('td');
        tableRow.appendChild(tableData);
    for (let i = 0; i < donors.length; i++) {
        
        tableData.textContent = donors[i].DonorName;
    }
    
        tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        for (let i = 0; i < donors.length; i++){
        tableData.textContent = getRandomInt(18, 30);
        }
        tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        for (let i = 0; i < donors.length; i++){
        tableData.textContent = donors[i].Amount;
        }
    }



let form = document.getElementById("donorForm");
form.addEventListener("submit", handleTable);
function handleTable(event) {
    event.preventDefault();
    let DonorName = event.target.nameDonor.value;
    console.log(DonorName);
    let Amount = event.target.amount.value;
    Amount = parseInt(Amount);
    console.log(Amount);
    let age = getRandomInt(18, 30);
    console.log(age);
    new Donor(DonorName, Amount,)
    total = total + (Amount);
    console.log(total);
    Donor.prototype.render();
    Donor.prototype.total();
    console.log(donors);
    saveToLs();
 

    // document.getElementById("donorForm").reset();
}

function saveToLs(){
    let arrlist = JSON.stringify(donors);
  console.log(donors);
    localStorage.setItem('donarr', arrlist);
    let dataTotal=JSON.stringify(total);
    localStorage.setItem("trackTotal",dataTotal);
    
  }

  function gettingFromLs() {
    let data = localStorage.getItem("donarr");
    let show = JSON.parse(data);
    if (show) {
        for (let i = 0; i < show.length; i++) {
            let reInst = new Donor(show[i].DonorName, show[i].Amount );
            console.log(reInst);


            Donor.prototype.render();
        }
    }
    let data1=localStorage.getItem("trackTotal");
    let show1= JSON.parse(data1);
    if (show1) {
        total=data1;
        Donor.prototype.total();
       total= parseInt(total);

        
    }
    
}
gettingFromLs();
