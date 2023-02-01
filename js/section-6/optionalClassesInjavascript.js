// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 === object2 ); // true
console.log(object1 === object3 ); // false

// Context vs scope

const object4 = {
  a: function() {
    console.log(this);
  }
}

object4.a(); // => { a: : ƒ}
// Instatiation 
class Player {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'am ${this.type}`);
  }
}

class Wizzar extends Player {
  constructor(name, type) {
    super(name, type)
    console.log('wizar', this);
  }
  play() {
    console.log(`Weeeee I'm a ${this.type}`);
  }
}

const wizzar1 = new Wizzar('Shelly', 'Healer');
const wizzar2 = new Wizzar('Shaw', 'Dark Magic');


// Classical Inheritance
// var Player = function(name, type){
//   this.name= name;
//   this.type = type;
// }

// Player.prototype.introduce = function(){
//   console.log('Hi I am '+ this.name + ', I\'am '+ this.type );
// }

// var wizzar1 = new Wizzar('Shelly', 'Healer');
// var wizzar2 = new Wizzar('Shaw', 'Dark Magic');

// wizzar1.play = function(){
//   console.log(`Weeeee I'm a ${this.type}`);
// }