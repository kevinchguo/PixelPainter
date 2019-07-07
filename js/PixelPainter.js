//find pixelPainter id and append a menu to it

let findPixelPainter = document.getElementById("pixelPainter");
let menuOptions = document.createElement("div");
menuOptions.id = "menuOptions";
findPixelPainter.appendChild(menuOptions);

let modifierButtons = {
  eraseColor: "erase",
  clearCanvas: "clear",
  fillColor: "fill",
  saveCanvas: "save",
  shareCanvas: "share"
};

//make values in obj into buttons
Object.keys(modifierButtons).forEach(function(btns) {
  let buttons = document.createElement("button");
  buttons.className = "modifierButtons";
  buttons.innerHTML = modifierButtons[btns]; //btns = the keys
  menuOptions.appendChild(buttons);
});

//append color.js file into html
let jsColor = document.createElement("input");
jsColor.className = "jscolor";
findPixelPainter.appendChild(jsColor);

//Choose color prompt
let jsColorPrompt = document.createElement("div");
jsColorPrompt.id = "prompt";
jsColorPrompt.innerHTML = "Choose your color: ";
findPixelPainter.appendChild(jsColorPrompt);

/*===============Save favorite colors==================*/

//find color of the color picker box
let selectColor = document.getElementsByClassName("jscolor");
// selectColor[0].style.backgroundColor;

//save button to save the color to use for later
let findjsColorPrompt = document.getElementById("prompt");
let saveColorButton = document.createElement("button");
saveColorButton.innerHTML = "Save Color";
jsColorPrompt.appendChild(saveColorButton);

//make a div box for saved colors
let savedColorsBox = document.createElement("div");
savedColorsBox.id = "savedColors";
jsColorPrompt.appendChild(savedColorsBox);

//save button function
saveColorButton.addEventListener("click", function() {
  let createNewColor = document.createElement("button");
  let hexColorCode = selectColor[0].style.backgroundColor;
  createNewColor.id = hexColorCode;
  createNewColor.className = "newColors";
  createNewColor.style.backgroundColor = hexColorCode;
  savedColorsBox.appendChild(createNewColor);
  createNewColor.addEventListener("mousedown", function() {
    paintFunctions.loadColor(this.style.backgroundColor);
    // createNewColor.style.border = "2px solid black";
  });
});

//Current color box
let currentColor = document.createElement("div");
currentColor.id = "currentColor";
currentColor.innerHTML = "Current color";
jsColorPrompt.appendChild(currentColor);
// savedColorsBox.style.backgroundColor =

//find new color boxes and add load function so drawing works

/*=================Create grid to color in==============*/

let canvasGrid = document.createElement("div");
canvasGrid.id = "canvasGrid";
findPixelPainter.appendChild(canvasGrid);

let makeCanvas = (function() {
  return function() {
    for (let gridRows = 0; gridRows < 60; gridRows++) {
      for (let gridColumns = 0; gridColumns < 60; gridColumns++) {
        let gridButton = document.createElement("button");
        gridButton.className = "gridColors";
        canvasGrid.appendChild(gridButton);
        if ((gridColumns + gridRows) % 2 === 0) {
          gridButton.style.backgroundColor = "#f2f2f2";
        } else {
          gridButton.style.backgroundColor = "#ffffff";
        }
      }
      let breakGrid = document.createElement("BR");
      canvasGrid.appendChild(breakGrid);
    }
  };
})();

let createCanvas = makeCanvas();

//Find all the boxes of canvas
let findCanvas = document.getElementsByClassName("gridColors");

//Add even listener to each boxes in canvas and color in
let isDown = false;

for (let y = 0; y < findCanvas.length; y++) {
  findCanvas[y].addEventListener("mousedown", function() {
    isDown = true;
    paintFunctions.colorIn(this);
  });

  findCanvas[y].addEventListener("mouseup", function() {
    isDown = false;
  });

  findCanvas[y].addEventListener("mouseover", function() {
    if (isDown) {
      paintFunctions.colorIn(this);
    }
  });
}
