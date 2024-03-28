const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require('../lib/shapes');

function generateSVG({shape, shapeColors, nameBrand, nameColors}) {
if(shape === "triangle") {
const shape = new Triangle(nameBrand, nameColors)
shape.setColor(shapeColors)
return shape.renderSVG();
} else if (shape === "square") {
    const shape = new Square(nameBrand, nameColors)
    shape.setColor(shapeColors)
    return shape.renderSVG();
} else if (shape === "circle") {
    const shape = new Circle(nameBrand, nameColors)
    shape.setColor(shapeColors)
    return shape.renderSVG();
}
}


module.exports = generateSVG;
