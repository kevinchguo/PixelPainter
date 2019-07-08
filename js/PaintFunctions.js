let paintFunctions = (function() {
  //try to save hexcode of color
  let rgbColor;
  let canvasObjHistory = {};
  let previousColorObj;
  let undoHistoryArray = [];
  let redoHistoryArray = [];
  let objOfColors = {};

  let baseCanvas = function() {
    for (let x = 0; x < findCanvas.length; x++) {
      let keysCoord = findCanvas[x].id;
      let valuesRGB = findCanvas[x].style.backgroundColor;
      canvasObjHistory[keysCoord] = valuesRGB;
    }
    undoHistoryArray.push(canvasObjHistory);
    console.log(undoHistoryArray);
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

  let loadPrevious = function() {
    previousColorObj = undoHistoryArray[undoHistoryArray.length - 1];
    console.log(previousColorObj);
  };

  let undoLast = function() {
    for (let x = 0; x < findCanvas; x++) {
      for (let y in previousColorObj) {
        console.log(previousColorObj[y]);
        findCanvas[x].style.backgroundColor = previousColorObj[y];
      }
    }
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
    let obj = {};
    for (let i in canvasObjHistory) {
      obj[i] = canvasObjHistory[i];
    }
    for (let x in objOfColors) {
      obj[x] = objOfColors[x];
    }
    undoHistoryArray.push(obj);
    console.log(undoHistoryArray);
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
    loadPrevious: loadPrevious,
    undoLast: undoLast,
    // redoLast: redoLast,
    storeInObj: storeInObj,
    pushIntoCanvasObjHistory: pushIntoCanvasObjHistory,
    clearAll: clearAll,
    fillColor: fillColor
  };
})();
