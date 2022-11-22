// Напиши класс Car с указанными свойствами и методами.

/*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0 */

class Car {
    static getSpecs({speed, price, maxSpeed, isOn, distance}){
        console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`)

    }

    constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}){
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    turnOn(){
        this.isOn = true;
    }

    turnOff(){
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        if (this.speed + value < this.maxSpeed ){
            this.speed += value;
        }
    }

    decelerate(value){
        if (this.speed - value > 0 ) {
            this.speed -= value;
        }
    }

    drive(hours) {
        if (this.isOn){
            this.distance += hours * this.speed;
        }
    }

}

const mustang = new Car({maxSpeed: 200, price: 2000});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang); // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang); // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);

