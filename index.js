// ----------------class-2 -------------------//

//classes in javaScript

class Rectangle {
    // it accepts three arguments -------

    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    // methods--------

    area(){
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

// object Creation--------
const react = new Rectangle(2,4)

// Calling Methods-------
const area = react.area();
console.log(area)