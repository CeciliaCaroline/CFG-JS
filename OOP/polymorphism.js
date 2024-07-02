class Shape {
    getArea() {
      throw new Error('Method getArea() must be implemented by sub classes');
    }
  }

class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
      this.name = "Circle"
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
}
  

class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
      this.name = "Rectangle"
    }
  
    getArea() {
      return this.width * this.height;
    }
}

function printArea(shape) {
    console.log(`The area of the shape is: ${shape.getArea()} `)
}

const circle = new Circle(5);
const rectangle = new Rectangle(3, 5);

printArea(circle)
printArea(rectangle)