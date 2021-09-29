//object basic
let car1 = {
    brand: "Volkswagen",
    model: "Golf",
    type: "medium",
    color: "anthracite",
    printOBJ: function() {
        return `The new ${this.model} of ${this.brand} comes in the size ${this.type} and color ${this.color}.`;
    }
}

document.getElementById("place").innerHTML = car1.printOBJ();


let car2 = {
    brand: "BMW",
    model: "??",
    type: "big",
    color: "black",
    printOBJ: function() {
        return ` <br> The new ${this.model} of ${this.brand} comes in the size ${this.type} and color ${this.color}.`;
    }
}

document.getElementById("place").innerHTML += car2.printOBJ();

let car3 = {
    brand: "Audi",
    model: "??",
    type: "smol",
    color: "smurf-blue",
    printOBJ: function() {
        return ` <br> The new ${this.model} of ${this.brand} comes in the size ${this.type} and color ${this.color}.`;
    }
}

document.getElementById("place").innerHTML += car3.printOBJ();

// same with other themes, but no time

//classes basic
class car {
    brand;
    model;
    type;
    color;

    constructor(a, b, c, d) {
        this.brand = a;
        this.model = b;
        this.type = c;
        this.color = d;
    }
    printOBJ() {
        return ` <br> The new ${this.model} of ${this.brand} comes in the size ${this.type} and color ${this.color}.`;
    }
}

var carlos1 = new car("BMW", "Cabrio", "huge", "mid-life-crisis-red");
var carlos2 = new car("Porsche", "Cabrio", "smooth but small", "single-blue");
let carlos3 = new car("SsangYong", "SUV", "big", "royal-black");


document.getElementById("place").innerHTML = carlos1.printOBJ();
document.getElementById("place").innerHTML += carlos2.printOBJ();
document.getElementById("place").innerHTML += carlos3.printOBJ();

class Person {
    fName;
    lName;
    age;
    car;

    constructor(a, b, c, d) {
        this.fName = a;
        this.lName = b;
        this.age = c;
        this.car = d;
    }
    callOut() {
        return `<br> ${this.fName} ${this.lName} is ${this.age} old and drives a ${this.car}.`
    }
}

var carlos4 = new Person("Carlos", "Ehrlich", "40", "BMW-Cabrio");
var carlos5 = new Person("Carlos", "Wild", "36", "Porsche");
var carlos6 = new Person("Carlos", "Unehrlich", "48", "SsangYong");

document.getElementById("placetobe").innerHTML = carlos4.callOut();
document.getElementById("placetobe").innerHTML += carlos5.callOut();
document.getElementById("placetobe").innerHTML += carlos6.callOut();

class Animal {
    type;
    age;
    color;

    constructor(a, b, c) {
        this.type = a;
        this.age = b;
        this.color = c;
    }
    printAnimal() {
        return ` <br> My uncle has a ${this.age} years old ${this.color}-colored ${this.type}.`
    }
}

var ani1 = new Animal("Hound", "4", "black");
var ani2 = new Animal("Giraffe", "5", "yellow");
var ani3 = new Animal("Mouse", "1", "neon-green");

var array = [ani1, ani2, ani3];
for (let val of array) {
    document.getElementById("spot").innerHTML += val.printAnimal();
}

//intermediate

class Motorbike extends car {
    wheels;

    constructor(a, b, c, d, e) {
        super(a, b, c, d);
        this.wheels = e;
    }
    printMotor() {
        return ` <br> The new ${this.model} of ${this.brand} comes in the size ${this.type} and color ${this.color} and has ${this.wheels} wheels.`;
    }
}

var motorlos1 = new Motorbike("KTM", "big thang", "biggo", "red", "2");
var motorlos2 = new Motorbike("Kawasaki", "Boom", "Pow", "Wow", "3");
var motorlos3 = new Motorbike("Honda", "normal", "premium", "blue", "2");


document.getElementById("spottobe").innerHTML += motorlos1.printMotor();
document.getElementById("spottobe").innerHTML += motorlos2.printMotor();
document.getElementById("spottobe").innerHTML += motorlos3.printMotor();


class Profession extends Person {
    jobposition;

    constructor(a, b, c, d, e) {
        super(a, b, c, d);
        this.jobposition = e;
    }
    callOutagain() {
        return `<br> ${this.fName} ${this.lName} is ${this.age} old and drives ${this.car} and works as ${this.jobposition}.`
    }
}

var carlos7 = new Profession("Carlos", "Motorlos", "17", "nothing", "unemployed");
var carlos8 = new Profession("Carlos", "Ruhig", "28", "VW", "Marketing-Senior");
var carlos9 = new Profession("Carlos", "Unehrlich", "33", "SsangYong", "Kindergardener");

document.getElementById("square").innerHTML += carlos7.callOutagain();
document.getElementById("square").innerHTML += carlos8.callOutagain();
document.getElementById("square").innerHTML += carlos9.callOutagain();

class Fish extends Animal {
    watertype;

    constructor(a, b, c, d) {
        super(a, b, c);
        this.watertype = d;
    }
    printFish() {
        return ` <br> My uncle has a ${this.age} year(s) old ${this.color}-colored ${this.type} and it lives in ${this.watertype}.`
    }
}

var fishy1 = new Fish("Goldfish", "1", "orange", "saltwater");
var fishy2 = new Fish("Trout", "1", "greyish", "freshwater");
var fishy3 = new Fish("Mandarin fish", "1", "blue and orange", "saltwater");

var fisharray = [fishy1, fishy2, fishy3];

for (let value of fisharray) {
    document.getElementById("round").innerHTML += value.printFish();
}