'use strict';

const Person = function(firstName, birthYear) {
    //console.log(this); ---pozove Person {i prazan objekat zbog NEW}
    // insntance properties jer ce firstName i birthYear biti prisutni na svim instancama
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

//******************************************************************************** */
//////////////////////////////////PROTOTYPES//////////////////////////////////////
//******************************************************************************** */
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
//////POSTOJI SAMO JEDNA OVA FUNKCIJA, ALI SVI OBJEKTI KREIRANI CONSTRUCTOR FUNKCIJOM (Person), MOGU DA JE KORISTE.
//////UNUTAR FUNKCIJE "this.birthYear" THIS JE SETOVANO PO OBJEKTU KOJI POZIVA METODU
luka.calcAge();
pavle.calcAge();
Person.prototype.species = 'Homo Sapiens';  //SVI OBJEKTI KREIRANI OD PERSON MOGU DA KORISTE SVOJSTVO "SPECIES"
console.log(luka.species,pavle);

console.log(luka.__proto__); // PROTOTIP OD LUKA OBJEKTA SVE OSOBINE POPRIMLJENE OD KONSTRUKTOR FUNKCIJE(Person)
console.log(luka.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(luka)); //Person je prototip od objekta luka? (TRUE)
console.log(Person.prototype.isPrototypeOf(pavle));//Person je prototip od objekta Pavle? (TRUE)
console.log(Person.prototype.isPrototypeOf(Person));//Person nije prototip od Person. (FALSE)


console.log(luka.hasOwnProperty('firstName'));// Ovo je true zato sto je property dodat gore u "const luka = new Person('Luka',1994);"
console.log(luka.hasOwnProperty('species'));// Ovaj property nije unutar luka Objekta, ovaj objekat ima samo pristup tom property-ju
// zbog --  Person.prototype.species = 'Homo Sapiens' (LINIJA 40), nije deklarisan kroz prototype!!