let paintFunctions = (function() {
  //try to save hexcode of color
  let rgbColor;

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

  let undoLast = function() {};

  let storeLast = function(items) {};

  let fillColor = function() {};

  return {
    loadColor: loadColor,
    colorIn: colorIn,
    undoLast: undoLast,
    storeLast: storeLast,
    fillColor: fillColor
  };
})();
