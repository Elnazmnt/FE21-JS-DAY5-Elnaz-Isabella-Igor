var ID = ['hot1', 'hot2', 'hot3']

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
    showAvailability(uNights, divId) {
        if (uNights < this.numberOfNights) {
            document.getElementById(divId).innerHTML = `<em>${this.hotelName}<em>: <button style="font-size: 12pt; color: green;" type="button">I'll reserve</button><br><br>`
        } else {
            document.getElementById(divId).innerHTML = `Sorry, no available nights for "<em>${this.hotelName}</em>"<br><br>`
        }
    }
}


var hotel1 = new Hotel("Golden Dragon", Math.floor(Math.random() * 11), "Gold Street 1", 'img1');
var hotel2 = new Hotel("Blue Lagoon", Math.floor(Math.random() * 11), "Blue Street 45", 'img2');
var hotel3 = new Hotel("Red Hell", Math.floor(Math.random() * 11), "Red Street 666", 'img3');

function check() {

    var n = document.getElementById('nights').value;

    hotel1.showAvailability(n, ID[0])
    hotel2.showAvailability(n, ID[1])
    hotel3.showAvailability(n, ID[2])

}

document.getElementById('btn').addEventListener('click', check)

console.log(hotel1.numberOfNights)
console.log(hotel2.numberOfNights)
console.log(hotel3.numberOfNights)