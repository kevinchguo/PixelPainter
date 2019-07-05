//find pixelPainter id and append a menu to it

let findPixelPainter = document.getElementById("pixelPainter");
let menuOptions = document.createElement("div");
menuOptions.setAttribute("id", "menuOptions");
findPixelPainter.appendChild(menuOptions);

let modifierButtons = {
    eraseColor: "erase",
    clearCanvas: "clear",
    fillColor: "fill",
    saveCanvas: "save",
    shareCanvas: "share",    
};

Object.keys(modifierButtons).forEach(function(btns){
    let buttons = document.createElement("button");
    buttons.className = "modifierButtons";
    buttons.innerHTML = modifierButtons[btns];//btns = the keys
    menuOptions.appendChild(buttons);
})

//append div for the color selector

// let colorSelector = document.createElement("div");
// colorSelector.setAttribute("id", "colorSelector");
// findPixelPainter.appendChild(colorSelector)

// for (let colorSelectorRows = 0; colorSelectorRows < 10; colorSelectorRows++) {
//     for (let colorSelectorColumns = 0; colorSelectorColumns < 5; colorSelectorColumns++) {
//         let gridButton = document.createElement("button")
//         gridButton.className = "hexColors"
//         colorSelector.appendChild(gridButton)
//         gridButton.innerHTML = "#"
//     }
//     let breakGrid = document.createElement("BR")
//     colorSelector.appendChild(breakGrid)
// }


let jsColor = document.createElement("input");
jsColor.className = "jscolor";
findPixelPainter.appendChild(jsColor);

//Choose color prompt
let jsColorPrompt = document.createElement("div");
jsColorPrompt.setAttribute("id", "prompt");
jsColorPrompt.innerHTML = "Choose your color";
findPixelPainter.appendChild(jsColorPrompt);

//Save favorite colors
let saveButton = document.createElement("button");



let selectColor = document.getElementsByClassName("jscolor");
console.log(selectColor[0]);
// console.log(selectColor.item());
// console.log(selectColor.style.backgroundColor)

//create grid to color in

let canvasGrid = document.createElement("div");
canvasGrid.setAttribute("id", "canvasGrid");
findPixelPainter.appendChild(canvasGrid);

for (let gridRows = 0; gridRows < 50; gridRows++) {
    for (let gridColumns = 0; gridColumns < 50; gridColumns++) {
        let gridButton = document.createElement("button");
        gridButton.className = "gridColors";
        canvasGrid.appendChild(gridButton);
        // gridButton.innerHTML = " ."
        if ((gridColumns + gridRows) % 2 === 0) {
            gridButton.style.backgroundColor = "#f2f2f2";
        } else {
            gridButton.style.backgroundColor = "#ffffff";

        }
    }
    let breakGrid = document.createElement("BR");
    canvasGrid.appendChild(breakGrid);
}
