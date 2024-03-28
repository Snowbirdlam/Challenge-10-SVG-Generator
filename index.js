const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const  generateSVG = require("./utils/generateMarkdown");

const svgInput = [
  {
    type: "list",
    message:
      "What shape do you want for your logo? (circle, triangle, and square)",
      choices: ["triangle", "circle", "square"],
    name: "shape",
  },
  {
    type: "input",
    message: "What colors do you wish for your shapes?",
    name: "shapeColors",
  },
  {
    type: "input",
    message: "What title do you want for your logo? (Up to three characters)",
    name: "nameBrand",
  },
  {
    type: "input",
    message: "What color do you want for your text?",
    name: "nameColors",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
inquirer
.prompt(svgInput)
.then((responses) => {
  console.log(responses);
  console.log("Creating SVG");
  const svgContent = generateSVG(responses);
  writeToFile("logo.svg", svgContent);
  console.log("SVG created successfully!");
})
.catch((error) => {
    console.error("Something happened", error);
})
}

init();
