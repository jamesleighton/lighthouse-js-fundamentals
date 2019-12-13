/*const calculateRectangleArea = function(length, width) {
  let rectArea = length * width;
  return rectArea;
};
console.log(calculateRectangleArea(10, 5));   
console.log(calculateRectangleArea(1.5, 2.5));  
console.log(calculateRectangleArea(-1, 0)); 

const calculateTriangleArea = function(base, height) {
  let triArea = base * height / 2;
  return triArea;
};
console.log(calculateTriangleArea(10, 5)); 
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(-1, 0));

const calculateCircleArea = function(radius) {
  let circArea = radius * radius * Math.PI;
  return circArea;
};
console.log(calculateCircleArea(20)); 
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));*/

var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isClosed = true;
            return "Julia opens the umbrella!";
        }
    },
    umbrella.isOpen();
};