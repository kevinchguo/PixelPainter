let paintFunctions = (function() {
  //try to save hexcode of color
  let rgbColor;
  let canvasObjHistory = {};
  let previousColorArray = [];
  let undoHistoryArray = [];
  let redoHistoryArray = [];
  let objOfColors = {};

  let baseCanvas = function() {
    let arry = [];
    for (let x = 0; x < findCanvas.length; x++) {
      let keysCoord = findCanvas[x].id;
      let valuesRGB = findCanvas[x].style.backgroundColor;
      canvasObjHistory[keysCoord] = valuesRGB;
      arry.push(valuesRGB);
    }
    undoHistoryArray.push(arry);
  };

  let loadColor = function(str) {
    rgbColor = str;
  };

  //Colors in the canvas
  let colorIn = function(elem) {
    //elem is 'this' when findCanvas is clicked
    if (rgbColor) {
      elem.style.backgroundColor = rgbColor;
    }
  };

  let undoLast = function() {
    redoHistoryArray.push(undoHistoryArray.pop());
    console.log(undoHistoryArray);
  };

  //   let redoLast = function() {
  //     redoHistoryArray.push(undoHistoryArray.pop());
  //     console.log(redoHistoryArray);
  //   };

  let storeInObj = function(xy_id) {
    //stores the recent color and id of the box of canvas
    objOfColors[xy_id] = rgbColor;
  };

  //creates an obj of the recent pushed buttons, and stores the previous combination to an array
  let pushIntoCanvasObjHistory = function() {
    let obj = canvasObjHistory;
    let arry = [];
    for (let x in objOfColors) {
      obj[x] = objOfColors[x];
    }
    for (let y in obj) {
      arry.push(obj[y]);
    }
    undoHistoryArray.push(arry);
    console.log(undoHistoryArray);
  };

  let pickLoadPreviousColors = function() {
    previousColorArray = undoHistoryArray[undoHistoryArray.length - 2];
    console.log(previousColorArray);
  };

  let loadPrevious = function() {
    console.log(previousColorArray);
    return previousColorArray;
  };

  let clearAll = function() {
    for (x = 0; x < findCanvas.length; x++) {
      findCanvas[x].style.backgroundColor = "#ffffff";
    }
  };

  let fillColor = function() {};

  return {
    baseCanvas: baseCanvas,
    loadColor: loadColor,
    colorIn: colorIn,
    undoLast: undoLast,
    // redoLast: redoLast,
    storeInObj: storeInObj,
    pushIntoCanvasObjHistory: pushIntoCanvasObjHistory,
    pickLoadPreviousColors: pickLoadPreviousColors,
    loadPrevious: loadPrevious,
    clearAll: clearAll,
    fillColor: fillColor
  };
})();
