class Shape {
  constructor(text, textColor) {
    this.color = "white";
    this.text = text;
    this.textColor = textColor;
  }
  setColor(color) {
    this.color = color;
  }
  renderSVG() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.render()}
    <text x="120" y="135" fill="${this.textColor}">${this.text}</text>
  </svg>
  `;
  }
}

class Triangle extends Shape {
  constructor(text, textColor) {
    super(text, textColor);
  }
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}
class Circle extends Shape {
  constructor(text, textColor) {
    super(text, textColor);
  }
  render() {
    return `<circle cx="130" cy="130" r="50" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  constructor(text, textColor) {
    super(text, textColor);
  }
  render() {
    return `<rect x="40" y="40" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
