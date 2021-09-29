class car {

    brand;
    model;
    type;
    color;
    isNew;
    price;

    constructor(brand, model, type, color, isNew, price) {

        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
        this.isNew = isNew;
        this.price = price
    }

    infoCar() {

        return this.brand + ' ' + this.model + ', ' + this.color + ': ' + this.price + ' Euro' + '<br>';

    }

}

var car1 = new car('VW', 'Polo', 'small', 'red', true, '25000');
var car2 = new car('BMW', 'X5M', 'small', 'white', true, '25000');
var car3 = new car('Audi', 'A7', 'small', 'black', false, '25000');
var car4 = new car('Kia', 'A7', 'small', 'black', true, '25000');
var car5 = new car('Mercedes', 'A7', 'small', 'black', false, '25000');
var car6 = new car('Nissan', 'A7', 'small', 'black', true, '25000');
var car7 = new car('Mini', 'A7', 'small', 'black', false, '25000');
var car8 = new car('Toyoyta', 'A7', 'small', 'black', false, '25000');

var arr = [car1, car2, car3, car4, car5, car6, car7, car8]

for (let i of arr) {

    document.getElementById('cars').innerHTML += i.infoCar();
}



class Motorbike extends car {

    wheelsN;
    weight;

    constructor(brand, model, type, color, isNew, price, wheelsN, weight) {

        super(brand, model, type, color, isNew, price);
        this.wheelsN = wheelsN;
        this.weight = weight;

    }
    infoMoto() {

        return `${this.brand} ${this.model}, color: ${this.color}, weight: ${this.weight}, Price: ${this.price} Euros.<br>`;

    }
}

var motorbike1 = new Motorbike('Suzuki', 'GSX-R600', 'small', 'blue/white', true, '16000', '2', '190kg')
var motorbike2 = new Motorbike('Suzuki', 'GSX-R600', 'small', 'blue/white', true, '16000', '2', '190kg')
var motorbike3 = new Motorbike('Suzuki', 'GSX-R600', 'small', 'blue/white', true, '16000', '2', '190kg')
var motorbike4 = new Motorbike('Suzuki', 'GSX-R600', 'small', 'blue/white', true, '16000', '2', '190kg')
var motorbike5 = new Motorbike('Suzuki', 'GSX-R600', 'small', 'blue/white', true, '16000', '2', '190kg')


var arr2 = [motorbike1, motorbike2, motorbike3, motorbike4, motorbike4, motorbike5]

for (let i of arr2) {

    document.getElementById('moto').innerHTML += motorbike1.infoMoto();
}