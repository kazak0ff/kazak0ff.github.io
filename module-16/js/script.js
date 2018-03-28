 class Shape {
     constructor(color, initX, initY) {
         this.color = color;
         this.initX = initX;
         this.initY = initY;
     }

     getColor() {
         return this.color;
     }

     setColor(val) {
         this.color = val;
     } 
 
     getCoords() {
         return [this.initX, this.initY];
     }

     moveTo(newX, newY) {
         this.initX = newX;
         this.initY = newY;
     }
 }

 class Rectangle extends Shape {
     constructor(color, initx, initY, initWidth, initHeight) {
         super(color, initx, initY);
         this.initWidth = initWidth;
         this.initHeight = initHeight;
     }

     setWidth(newWidth) {
         this.initWidth = newWidth;
     }

     setHeight(newHeight) {
         this.initHeight = newHeight;
     }

     getDims() {
         return [this.initWidth, this.initHeight]
     }

     draw() {
         console.log(`Drawing a Rectangle at: \n
         (x: ${this.getDims()})\n
         With Dimentions:\n
         width ${this.initWidth}\n
         height: ${this.initHeight}\n
         Filled withclor: ${this.color}`)
     }
  }

  class Circle extends Rectangle {
      constructor(color, initx, initY, initWidth, initHeight, initRadius) {
          super(color, initx, initY, initWidth, initHeight);
          this.initRadius = initRadius;
      }

      getRadius() {
          return this.initRadius;
      }

      setRadius(val) {
          this.initRadius = val;
      }

      draw() {
        console.log(`Drawing a Circle at: \n
        (x: ${this.getDims()})\n
        With Dimentions:\n
        radius: ${this.getRadius()}
        Filled withclor: ${this.color}`)
    }
  }

  rectangle = new Rectangle("fff", 0, 0, 100, 100); 
  rectangle.setWidth(200);
  rectangle.setHeight(200);
  console.log(`getDims for Rectangle: ${rectangle.getDims()}`);
  rectangle.draw();

  circle = new Circle("fff", 0, 0, 100, 100, 50);
  circle.setRadius(60);
  console.log(`Radius for Circle ${circle.getRadius()}`);
  circle.draw();
