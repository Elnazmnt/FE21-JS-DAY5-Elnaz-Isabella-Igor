//Extra

class Hotel {
    hotelName;
    numberOfNights;
    address;
    image;

    constructor(hname, nights, add, img) {
        this.hotelName = hname;
        this.numberOfNights = nights;
        this.address = add;
        this.image = img;
    }
    showAvailability() {

    }
}

var randomN = Math.floor(Math.random() * 11);

var hotel1 = ("Gold Crate", randomN, "Gold Street 1", "img");
var hotel2 = ("Blue Lagoon", randomN, "Blue Street 45", "img");
var hotel3 = ("Red Hell", randomN, "Red Street 666", "img");