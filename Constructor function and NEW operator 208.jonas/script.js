'use strict';

const Person = function(firstName, birthYear) {
    //console.log(this); ---pozove Person {i prazan objekat zbog NEW}
    // isntance properties jer ce firstName i birthYear biti prisutni na svim instancama
     this.firstName = firstName;
     this.birthYear = birthYear;
}


const jonas = new Person('Jonas', 1991);
//console.log(jonas); -- pozove Person { firstName: 'Jonas', birthYear: 1991 }
// zbog NEW

// 1. New {object} is created
// 2. function is called, this = {}
//3. {object} linked to prototype
//4. function automatically return {}


const luka = new Person('Luka',1994);
const pavle = new Person('Pavle', 1995);
console.log(luka,pavle);

console.log(luka instanceof Person); //svaki objekat kreitan iz klase je instanca
//              *** TRUE ***