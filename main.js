class Human {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}

const artem = new Human('Artem', 'Men');
const anton = new Human('Anton', 'Men');
const ivan = new Human('Ivan', 'Men');

class Apartment {
    residents = [];
    addResident(user){
    this.residents.push(user);
    }
}

const apartment1 = new Apartment();
apartment1.addResident(artem);

const apartment2 = new Apartment();
apartment1.addResident(anton);

const apartment3 = new Apartment();
apartment3.addResident(ivan);

class House {
    apartments = [];
    constructor(maxApartments){
        this.maxApartments = maxApartments;
    }

    addApartment(apartment){
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
          } else {
            console.log("Не достатньо квартир.");
          }
    }
}

const house = new House(3);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

console.log(house);



