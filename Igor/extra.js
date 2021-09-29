var userNights = 5;


class Hotel {
    hotelName;
    numberOfNights;
    address;
    image;

    constructor(hotelName, numberOfNights, address, image) {
        this.hotelName = hotelName;
        this.numberOfNights = numberOfNights;
        this.address = address;
        this.image = image

    }
    showAvailability() {

    }
}

var random1 = Math.floor(Math.random() * 11);
var random2 = Math.floor(Math.random() * 11);
var random3 = Math.floor(Math.random() * 11);

var hotel1 = new Hotel("Gold Crate", random1, "Gold Street 1", 'img');
var hotel2 = new Hotel("Blue Lagoon", random2, "Blue Street 45", 'img');
var hotel3 = new Hotel("Red Hell", random3, "Red Street 666", 'img');

console.log(hotel1)
console.log(hotel2)
console.log(hotel3)