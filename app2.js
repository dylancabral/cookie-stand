'use strict'

/*
let oneStudent = {
  name: 'steve',
  codeClass: 201,
  pronouns: 'they,them',
  onLine : true,
}

let twoStudent = {
}


function Student(name){
  this.name = name;
  this.codeClass = 201;
  this.pronouns = pronouns;
  this.onLine = true;
  thes.introduce = function(){
      console.log (`hi my name is ${this.pronouns}. my
         pronouns are ${this.pronouns}. I am in the 201 class`;
  }
}
*/

let hour = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm'
  , '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];


function StoreConstructor(name,min,max,avg){
=======
let stores = [];

function Store(name, min, max, avg) {

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;

  this.hourly = [];
  this.total=0;
  this.createTable();
  allStores.push(this);
}

// Store.prototype.calculateHourly = function() {
  for (let i = 0; i <hour.length; i++) {
    let randNum = avgCookies(this.min,this.max);
    let cookiesPerHour = math.trunc(randNum * this.avg);
    this.hourly
  }
=======
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  // this.Table();
  stores.push(this);
}

Store.prototype.avgCookie = function () {
  return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);

}
Store.prototype.CalculatehourlyCookies =
  function () {
    for (let i = 0; i < hour.length; i++) {
      let randNum = this.avgCookie();
      let CookiesPer = Math.ceil(randNum * this.avg);
      this.hourlyCookies.push(CookiesPer);
      this.dailyTotal += CookiesPer
    }
  }

Store.prototype.CreateTable = function () {
  this.CalculatehourlyCookies();
  let section = document.getElementById('stores');
  let storesRow = document.createElement('tr');
  let storesLabel = document.createElement('td');
  storesLabel.textContent = this.name;
  storesRow.appendChild(storesLabel);
  for (let i = 0; i < hour.length; i++) {
    let cookieData = document.createElement('td');
    cookieData.textContent = this.hourlyCookies[i];
    storesRow.appendChild(cookieData);
  }
  let storeTotal = document.createElement('td');
    storeTotal.textContent = this.dailyTotal;
    storesRow.appendChild(storeTotal);

  section.appendChild(storesRow);
}

function CreateHeader() {
  let topSection = document.getElementById('hours');
  let hoursRow = document.createElement('tr');
  let tableheader = document.createElement('th')
  tableheader.textContent = '';
  hoursRow.appendChild(tableheader);
  topSection.appendChild(hoursRow)

  for (let i = 0; i < hour.length; i++) {
    let hoursLabel = document.createElement('th')
    hoursLabel.textContent = hour[i];
    hoursRow.appendChild(hoursLabel);
    topSection.appendChild(hoursRow);
  }
  let dailyTotalHeader = document.createElement('th');
dailyTotalHeader.textContent= 'daily total'
hoursRow.appendChild(dailyTotalHeader);
}
CreateHeader();

function createFooter() {
  let bottomSection = document.getElementById('cookieTotal')
  let totalRow = document.createElement('tr');
  let tableFooter = document.createElement('td')
  tableFooter.textContent = 'Totals';
  bottomSection.appendChild(totalRow);
  totalRow.appendChild(tableFooter);
  let grandTotal = 0;
  for (let i = 0; i < hour.length; i++) {
    let totalPerHour = 0;
    for (let j = 0; j < stores.length; j++) {
      totalPerHour += stores[j].hourlyCookies[i]
    }
    grandTotal += totalPerHour;
    let TableFooterNum = document.createElement('td');
    TableFooterNum.textContent = totalPerHour;
    totalRow.appendChild(TableFooterNum);
  }
let grandtotalNum = document.createElement('td');
grandtotalNum.textContent = grandTotal;
totalRow.appendChild(grandtotalNum);




}

let seattle = new Store(
  'Seattle',
  23,
  65,
  6.3
);
seattle.CreateTable();

let tokyo = new Store(
  'Tokyo',
  3,
  24,
  1.2
);
tokyo.CreateTable();

let dubai = new Store(
  'Dubai',
  20,
  38,
  3.7
);
dubai.CreateTable();

let paris = new Store(
  'Paris',
  20,
  38,
  3.7
);
paris.CreateTable();

let lima = new Store(
  'Lima',
  2,
  16,
  4.6
);
lima.CreateTable();
console.log(stores)
createFooter();


