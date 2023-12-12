// apply() method in JavaScript

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    getInfo: function(additionalInfo) {
      return `${this.year} ${this.brand} ${this.model} - Additional features:${additionalInfo}`;
    }
  };
  
  const anotherCar = {
    brand: 'Honda',
    model: 'Accord',
    year: 2020,
  };
  
  // Applying the getInfo method from the car object to anotherCar with arguments
  const additionalCarInfo = car.getInfo.apply(anotherCar, ["V6 Engine", "Leather Seats"]);
  
  console.log(additionalCarInfo); // Outputs: 2020 Honda Accord - Additional features:V6 Engine,Leather Seats
  