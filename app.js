'use strict'

let seattleList = document.getElementById('seattleList');

console.log(seattleList);


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  totalsum:0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  render: function (){
    let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm'
    , '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
    for (let i = 0; i < hours.length; i++) {
      let perHour = this.getRandomCustomers();
      let li = document.createElement('li');
      li.textContent = (`${hours[i]}: ${perHour} Cookies`); 
      seattleList.appendChild(li);
     this.totalsum += perHour;
    }
  let finalTotalElement=document.createElement('li')
  finalTotalElement.textContent=(`Total: ${this.totalsum}`)
  seattleList.appendChild(finalTotalElement) 
}

}
seattle.render();


let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  totalsum:0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  render: function (){
    let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm'
    , '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
    for (let i = 0; i < hours.length; i++) {
      let perHour = this.getRandomCustomers();
      let li = document.createElement('li');
      li.textContent = (`${hours[i]}: ${perHour} Cookies`); 
      seattleList.appendChild(li);
     this.totalsum += perHour;
    }
  let finalTotalElement=document.createElement('li');
  finalTotalElement.textContent = (`Total: ${this.totalsum}`);
  seattleList.appendChild(finalTotalElement);
}

}
console.log(tokyo.render);
tokyo.render();
console.log()

let dubai = {
  name: 'dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  totalsum:0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  render: function (){
    let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm'
    , '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
    for (let i = 0; i < hours.length; i++) {
      let perHour = this.getRandomCustomers();
      let li = document.createElement('li');
      li.textContent = (`${hours[i]}: ${perHour} Cookies`); 
      seattleList.appendChild(li);
     this.totalsum += perHour;
    }
  let finalTotalElement=document.createElement('li');
  finalTotalElement.textContent = (`Total: ${this.totalsum}`);
  seattleList.appendChild(finalTotalElement);
}

}
console.log(dubai.render);
dubai.render();
console.log()


let paris = {
  name: 'paris',
  min: 20,
  max: 38,
  avg: 3.7,
  totalsum:0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  render: function (){
    let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm'
    , '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
    for (let i = 0; i < hours.length; i++) {
      let perHour = this.getRandomCustomers();
      let li = document.createElement('li');
      li.textContent = (`${hours[i]}: ${perHour} Cookies`); 
      seattleList.appendChild(li);
     this.totalsum += perHour;
    }
  let finalTotalElement=document.createElement('li');
  finalTotalElement.textContent = (`Total: ${this.totalsum}`);
  seattleList.appendChild(finalTotalElement);
}

}
console.log(paris.render);
paris.render();
console.log()

let lima = {
  name: 'lima',
  min: 2,
  max: 16,
  avg: 4.6,
  totalsum:0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  render: function (){
    let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm'
    , '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
    for (let i = 0; i < hours.length; i++) {
      let perHour = this.getRandomCustomers();
      let li = document.createElement('li');
      li.textContent = (`${hours[i]}: ${perHour} Cookies`); 
      seattleList.appendChild(li);
     this.totalsum += perHour;
    }
  let finalTotalElement=document.createElement('li');
  finalTotalElement.textContent = (`Total: ${this.totalsum}`);
  seattleList.appendChild(finalTotalElement);
}

}
console.log(lima.render);
lima.render();
console.log()
// cookiesPerHour.render();


