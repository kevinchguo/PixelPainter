//find pixelPainter id and append a menu to it

let findPixelPainter = document.getElementById("pixelPainter");
let menuOptions = document.createElement("div");
menuOptions.id = "menuOptions";
findPixelPainter.appendChild(menuOptions);

let modifierButtons = {
  eraseColor: "erase",
  undoLast: "undo",
  redoLast: "redo",
  clearCanvas: "clear",
  fillColor: "fill",
  saveCanvas: 'save <i class="fa fa-save">',
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
jsColorPrompt.innerHTML = "Choose your color ";
findPixelPainter.appendChild(jsColorPrompt);

/*===============Save favorite colors==================*/

//find color of the color picker box
let selectColor = document.getElementsByClassName("jscolor");

//save button to save the color to use for later
let findjsColorPrompt = document.getElementById("prompt");
let saveColorButton = document.createElement("button");
saveColorButton.innerHTML = "Add colors";
jsColorPrompt.appendChild(saveColorButton);

//make a div box for saved colors
let savedColorsBox = document.createElement("div");
savedColorsBox.id = "savedColors";
jsColorPrompt.appendChild(savedColorsBox);

//save button function
saveColorButton.addEventListener("click", function() {
  let createNewColor = document.createElement("button");
  let rgbColorCode = selectColor[0].style.backgroundColor;
  createNewColor.id = rgbColorCode;
  createNewColor.className = "newColors";
  createNewColor.style.backgroundColor = rgbColorCode;
  savedColorsBox.appendChild(createNewColor);
  createNewColor.addEventListener("click", function() {
    pressErase = false;
    paintFunctions.loadColor(this.style.backgroundColor);
  });
});

//delete most recent newColor
let findNewColors = document.getElementsByClassName("newColors");
let deleteNewColors = document.createElement("button");
deleteNewColors.id = "deleteColors";
deleteNewColors.innerHTML = "Delete colors";
jsColorPrompt.appendChild(deleteNewColors);
deleteNewColors.addEventListener("click", function() {
  findNewColors[findNewColors.length - 1].remove();
});

//Current coordinates
let xySpan = document.createElement("span");
let currentCoordinates = document.createElement("div");
currentCoordinates.id = "currentCoordinates";
currentCoordinates.innerHTML = "Coordinates: ";
jsColorPrompt.appendChild(currentCoordinates);
currentCoordinates.appendChild(xySpan);

/*=================Create grid==============*/

let canvasGrid = document.createElement("div");
canvasGrid.id = "canvasGrid";
findPixelPainter.appendChild(canvasGrid);

let makeCanvas = (function() {
  return function() {
    for (let gridRows = 0; gridRows < 60; gridRows++) {
      for (let gridColumns = 0; gridColumns < 60; gridColumns++) {
        let gridButton = document.createElement("button");
        gridButton.className = "gridColors";
        gridButton.id =
          "X: " + (gridColumns + 1) + ", " + "Y: " + (gridRows + 1);
        canvasGrid.appendChild(gridButton);
        gridButton.style.backgroundColor = "#ffffff";
      }
      let breakGrid = document.createElement("BR");
      canvasGrid.appendChild(breakGrid);
    }
  };
})();

let createCanvas = makeCanvas(); // this makes the canvas

/*=================Color in and erase functionality==============*/

//Find all the boxes of canvas
let findCanvas = document.getElementsByClassName("gridColors");
let createBaseCanvas = paintFunctions.baseCanvas(); //saves a blank canvas for undo func

//Add even listener to each boxes in canvas and color in
let isDown = false;
for (let x = 0; x < findCanvas.length; x++) {
  findCanvas[x].addEventListener("mousedown", function() {
    isDown = true;
    paintFunctions.storeInObj(this.id, this.style.backgroundColor); //stores all id and rgb colors
    if (pressErase) {
      paintFunctions.loadColor("#ffffff");
      paintFunctions.colorIn(this);
    } else {
      paintFunctions.colorIn(this);
    }
  });

  findCanvas[x].addEventListener("mouseover", function() {
    if (isDown) {
      paintFunctions.storeInObj(this.id, this.style.backgroundColor); //stores all id and rgb colors
      if (pressErase) {
        paintFunctions.loadColor("#ffffff");
        paintFunctions.colorIn(this);
      } else {
        paintFunctions.colorIn(this);
      }
    } else {
      xySpan.innerHTML = this.id;
    }
  });

  findCanvas[x].addEventListener("mouseup", function() {
    isDown = false;
    paintFunctions.pushIntoCanvasObjHistory();
    paintFunctions.pickLoadPreviousColors();
  });
}

/*===================Modifier buttons ========================*/

//Find modifier buttons
let findModifiers = document.getElementsByClassName("modifierButtons");

//Erase button toggles on/off with the button(functionality built in the colorIn function)
let pressErase = false;
findModifiers[0].addEventListener("click", function() {
  pressErase = true;
});

//undo button
findModifiers[1].addEventListener("click", function() {
  paintFunctions.pickLoadPreviousColors();
  let loadPrevColors = paintFunctions.loadPrevious();
  for (let x = 0; x < findCanvas.length; x++) {
    findCanvas[x].style.backgroundColor = loadPrevColors[x];
  }
  console.log(paintFunctions.undoLast());
});

//redo button
findModifiers[2].addEventListener("click", function() {});

//clear button
findModifiers[3].addEventListener("click", function() {
  paintFunctions.clearAll();
});
