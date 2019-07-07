let paintFunctions = (function() {
  //try to save hexcode of color
  let rgbColor;

  let loadColor = function(str) {
    rgbColor = str;
    console.log(rgbColor);
  };

  //Colors in the canvas
  let colorIn = function(elem) {
    if (rgbColor) {
      elem.style.backgroundColor = rgbColor;
    }
  };

  let eraseColor = function() {};

  let clearCanvas = function() {
    createCanvas();
  };

  let fillColor = function() {};

  return {
    loadColor: loadColor,
    colorIn: colorIn,
    eraseColor: eraseColor,
    clearCanvas: clearCanvas,
    fillColor: fillColor
  };
})();
