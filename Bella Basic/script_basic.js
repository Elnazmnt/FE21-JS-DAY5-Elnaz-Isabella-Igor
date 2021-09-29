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