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


function Store(name,min,max,avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  // this.dailytotal = dailytotal
}

// Store.prototype.

let seattle = new Store(
'Seattle',
23,
65,
6.3,
  console.log(store(seattle))
)

let tokyo = new Store(
  'Tokyo',
  3,
  24,
  1.2
)

let dubai = new Store(
'Dubai',
20,
38,
3.7
)

let paris = new Store(
'Paris',
20,
38,
3.7
)

let lima = new Store(
'Lima',
2,
16,
4.6
)

let studentArray =[juan,sara];

for (let i=0;i < studentArray.length;i++) {
  studentArray[i].introduce();

} */

let seattleList = document.getElementById('seattleList');

let hour = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm'
  , '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailytotal: 0,
  cookiesSoldEachHourArray: [],
  getRandomNumberCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcHourlySales: function () {
    for (let i = 0; i < hour.length; i++) { 
      let randNum = this.getRandomNumberCustomers();
      console.log(randNum);
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      console.log(cookiesSoldThisHour);
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailytotal = this.dailytotal += cookiesSoldThisHour;
      // console.log(cookiesSoldThisHour)
    }
  },
  renderList : function() {
    console.log('we made it here')
    this.calcHourlySales();
    console.log(this.cookiesSoldEachHourArray);
  for (let i = 0; i < hour.length; i++) {
    let listItemSea = document.createElement('li');
    listItemSea.textContent = `${hour[i]}: ${this.cookiesSoldEachHourArray[i]} Cookies`;
    seattleList.appendChild(listItemSea);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.dailytotal} Cookies`;
    seattleList.appendChild(totalLi);
  }
}
seattle.renderList();

let tokyoList = document.getElementById('tokyoList');

let tokyo = {
  name: 'tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailytotal: 0,
  cookiesSoldEachHour: [],
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcHourlySales: function () {
    for (let i = 0; i < hour.length; i++){ 
      let randNum = this.getRandomNumberCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHour.push(cookiesSoldThisHour);
      this.dailytotal = this.dailytotal += cookiesSoldThisHour;
    }
  },
  renderList : function() {
    this.calcHourlySales();
  for(let i = 0; i < hour.length; i++) {
    let listItemSea = document.createElement('li');
    listItemSea.textContent = `${hour[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
    tokyoList.appendChild(listItemSea);
    }
    let totalLi = document.createElement('Li');
    totalLi.textContent = `Total: ${this.dailytotal} Cookies`;
    tokyoList.appendChild(totalLi);
  }
}
tokyo.renderList();

let dubaiList = document.getElementById('dubaiList');
let dubai = {
  name: 'dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailytotal: 0,
  cookiesSoldEachHour: [],
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcHourlySales: function () {
    for (let i = 0; i < hour.length; i++){ 
      let randNum = this.getRandomNumberCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHour.push(cookiesSoldThisHour);
      this.dailytotal = this.dailytotal += cookiesSoldThisHour;
    }
  },
  renderList : function() {
    this.calcHourlySales();
  for(let i = 0; i < hour.length; i++) {
    let listItemSea = document.createElement('li');
    listItemSea.textContent = `${hour[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
    dubaiList.appendChild(listItemSea);
    }
    let totalLi = document.createElement('Li');
    totalLi.textContent = `Total: ${this.dailytotal} Cookies`;
    dubaiList.appendChild(totalLi);
  }
}
dubai.renderList();

let parisList = document.getElementById('parisList');
let paris = {
  name: 'paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailytotal: 0,
  cookiesSoldEachHour: [],
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcHourlySales: function () {
    for (let i = 0; i < hour.length; i++){ 
      let randNum = this.getRandomNumberCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHour.push(cookiesSoldThisHour);
      this.dailytotal = this.dailytotal += cookiesSoldThisHour;
    }
  },
  renderList : function() {
    this.calcHourlySales();
  for(let i = 0; i < hour.length; i++) {
    let listItemSea = document.createElement('li');
    listItemSea.textContent = `${hour[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
    parisList.appendChild(listItemSea);
    }
    let totalLi = document.createElement('Li');
    totalLi.textContent = `Total: ${this.dailytotal} Cookies`;
    parisList.appendChild(totalLi);
  }
}
paris.renderList();

let limaList = document.getElementById('limaList');
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailytotal: 0,
  cookiesSoldEachHour: [],
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcHourlySales: function () {
    for (let i = 0; i < hour.length; i++){ 
      let randNum = this.getRandomNumberCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      this.cookiesSoldEachHour.push(cookiesSoldThisHour);
      this.dailytotal = this.dailytotal += cookiesSoldThisHour;
    }
  },
  renderList : function() {
    this.calcHourlySales();
  for(let i = 0; i < hour.length; i++) {
    let listItemSea = document.createElement('li');
    listItemSea.textContent = `${hour[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
    limaList.appendChild(listItemSea);
    }
    let totalLi = document.createElement('Li');
    totalLi.textContent = `Total: ${this.dailytotal} Cookies`;
    limaList.appendChild(totalLi);
  }
}
lima.renderList();
// console.log(seattle.calcHourlySales());
// console.log(seattle.cookiesSoldEachHour)
