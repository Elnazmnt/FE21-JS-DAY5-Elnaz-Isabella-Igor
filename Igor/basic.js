var car1 = {

    brand: 'VW',
    model: 'Polo',
    type: 'small',
    color: 'white',
    isNew: true,
    price: 2500,
    infoCar: function() {

        return this.brand + ' ' + this.model + ', ' + this.color + ': ' + this.price + 'Euro';

    }

}

var car2 = {

    brand: 'Nissan',
    model: 'Micra',
    type: 'very small',
    color: 'gray',
    isNew: true,
    price: 1500,
    infoCar: function() {

        return this.brand + ' ' + this.model + ', ' + this.color + ': ' + this.price + 'Euro';

    }

}

var car3 = {

    brand: 'Mini',
    model: 'Cooper',
    type: 'small',
    color: 'black',
    isNew: true,
    price: 5000,
    infoCar: function() {

        return this.brand + ' ' + this.model + ', ' + this.color + ': ' + this.price + 'Euro';

    }

}

var animal1 = {
    type: 'cat',
    breed: 'Bengal Cat',
    age: 2,
    name: 'Lukas',
    isVaccinated: true,
    infoAnimal: function() {

        return 'This is ' + this.type + ' ' + this.name + ', ' + this.breed;

    }

}

var animal2 = {
    type: 'dog',
    breed: 'Pitbull',
    age: 4,
    name: 'Jerry',
    isVaccinated: true,
    infoAnimal: function() {

        return 'This is ' + this.type + ' ' + this.name + ', ' + this.breed;

    }

}

var animal3 = {
    type: 'parrot',
    breed: 'Ara',
    age: 1,
    name: 'Tom',
    isVaccinated: true,
    infoAnimal: function() {

        return 'This is ' + this.type + ' ' + this.name + ', ' + this.breed;

    }

}


var person1 = {

    firstName: "Alex",

    lastName: "Hill",

    age: 25,

    drivingLicense: true,

    hobbies: ['swim', 'read', 'coding'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName + ", " + this.age;

    }

}

var person2 = {

    firstName: "David",

    lastName: "Bowie",

    age: 32,

    drivingLicense: true,

    hobbies: ['swim', 'read', 'sport'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName + ", " + this.age;

    }

}

var person3 = {

    firstName: "John",

    lastName: "Wick",

    age: 28,

    drivingLicense: false,

    hobbies: ['swim', 'read', 'shooting'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName + ", " + this.age;

    }

}

console.log(animal3.infoAnimal())

console.log(car2.infoCar())

console.log(person2.fullName())