export class Car{
  brand;
  model;
  speed;
  isTrunkOpen = true;

  constructor(brand, model, speed = 0, isTrunkOpen) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.isTrunkOpen = isTrunkOpen
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, ${this.isTrunkOpen}`);
  }

  go() {
    this.speed += Math.min(this.speed + 5, 200); 
    
    openTrunk();
  }

  brake() {
    this.speed -= Math.max(this.speed - 5, 0); 
  }

  openTrunk() {
    if (this.isTrunkOpen) {
      this.isTrunkOpen = Open;
    } else {
      this.isTrunkOpen = Closed;
    }

    closeTrunk();
  }

  closeTrunk() {
    if (!this.isTrunkOpen) {
      this.isTrunkOpen = Closed;
    } else {
      this.isTrunkOpen = Open;
    }
  }
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');

console.log(car1);
console.log(car2);

car1.displayInfo();
car2.displayInfo();

car1.go();
car2.go();
car1.go();
car2.go();

car1.brake();
car2.brake();

car1.displayInfo();
car2.displayInfo();
