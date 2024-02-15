//Bind Concept 

// const person =  {
//     fullname: function(){
//         return this.firstname + " " + this.lastname
//     }
// }

// const person1 = {
//     firstname: "Soura",
//     lastname: "Baral"
// }

// const result = person.fullname.bind(person1);
// console.log(result());

// Call Concept

// const person = {
//     fullname: function (city , country){
//         return this.firstname + " " + this.lastname + city + country
//     }
// }

// const person1 = {
//     firstname: "Soura",
//     lastname: "Baral"
// }

// console.log(person.fullname.call(person1,"Dhenkanal", "India"));

//Apply Concept

// const person = {
//     fullname: function (city , country){
//         return this.firstname + " " + this.lastname + city + country
//     }
// }

// const person1 = {
//     firstname: "Soura",
//     lastname: "Baral"
// }

// console.log(person.fullname.apply(person1,["Dhenkanal", "India"]));

// let x = '5';
// console.log(x == "5");

// console.log(Math.trunc(4.8));

//Filter Concept

// const ages = [32,34,12,23,2,54,7];
// console.log(ages.filter(checkteen));

// function checkteen(age){
//     return age < 18;
// }

// function multiply (x,y){
//  console.log(x*y);
// }

//  let multiplybytwo = multiply.bind(this, 3);
//  multiplybytwo(5);

setTimeout(function(){
    console.log(2*3);
}, 2000);
