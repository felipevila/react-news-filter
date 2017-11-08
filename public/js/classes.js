class Car {
    constructor() {
        this.wheels = 4;
        this.type = 'hatchback';
    }
    whatever() {
        //console.log("hey")
    }
}

class Ford extends Car {
    constructor() {
        super();    
    }
}

const car = new Car();
const ford = new Ford();

car.whatever();

//console.log(ford.wheels);