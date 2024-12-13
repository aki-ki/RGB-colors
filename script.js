// RGB Colors

// Variables to store HTML elements
let previewBtnEl = document.getElementById("preview-btn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
// // Event Listeners
document.getElementById("blackIn").addEventListener("click", blackFcn);
document.getElementById("whiteIn").addEventListener("click", whiteFcn);

redInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
document.getElementById("prevWidth").addEventListener("change", changeSize);
document.getElementById("prevHeight").addEventListener("change", changeSize);

// Event Function
function rgbPreview() {
  // Input: get red green blue values
  let rValue = redInEl.value;
  let gValue = greenInEl.value;
  let bValue = blueInEl.value;

  //   Validate Colors (Constrain colors between 0-255)
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }
  function whiteFcn() {
    rValue = 255;
    gValue = 255;
    bValue = 255;
  }

  // Process: build rgb string rbg(___, ___, ___)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update the color preview
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

function changeSize() {
  // Get values
  let widthValue = document.getElementById("prevWidth").value; // min 50 max 400
  let heightValue = document.getElementById("prevHeight").value; // min 50 max 200
  // Validate numbers
  if (widthValue > 400) {
    widthValue = 400;
  } else if (widthValue < 50) {
    widthValue = 50;
  }

  if (heightValue > 200) {
    heightValue = 200;
  } else if (heightValue < 50) {
    heightValue = 50;
  }
  // Create strings
  let width = widthValue + "px";
  let height = heightValue + "px";

  // Output
  displayEl.style.width = width;
  displayEl.style.height = height;
  // Replace the inputs
  document.getElementById("prevWidth").value = widthValue;
  document.getElementById("prevHeight").value = heightValue;
}

function whiteFcn() {
  displayEl.style.background = "rgb(255, 255, 255)";
}
function blackFcn() {
  displayEl.style.background = "rgb(0, 0, 0)";
}
