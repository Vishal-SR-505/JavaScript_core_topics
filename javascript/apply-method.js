// apply() method in JavaScript

/* 🚀 Ever wondered how to dynamically control function contexts and arguments in JavaScript❓

💫 Enter JavaScript's apply() method! 🚀

🎯 The apply() method of function instances calls this function with a given `this` value and `arguments` provided as an array (or an array-like object).

👉 Syntax:

functionName.apply(thisArg, [argsArray])

🔹 functionName: The function to be executed.
🔹 apply(): The method that invokes the function.
🔹 thisArg: Defines the context (this) in which the function will run.
🔹 argsArray: An array or array-like object containing arguments to be passed to the function. */



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
  
