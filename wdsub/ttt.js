let isXturn = true;
const squareArr = document.querySelectorAll(".square");

for (const _element of squareArr) {
  _element.addEventListener("click", markSquare);
} 
  
square.addEventListener("click", markSquare);

function markSquare(_square) {
  if (_square.srcElement.innerText != "x" && _square.srcElement.innerText != "O") {
  if (isXturn) {
    _square.srcElement.innerText = "X";
  } else {
    _square.srcElement.innerText = "O";
  }
  
    checkComplete();
    
    isXturn = !isXturn;
  }
}

function checkComplete() {
  for (let _i = 0; _i < 3; _i++) {
    if ((SquareArr[_i].innerText == "X" || squareArr[_i].innerText == "O") 
      && squareArr[_i].innerText == squareArr[_i + 3].innerText
      && squareArr[_i].innerText == squareArr[_i + 3].innerText
     ) console.log("game s over");
  }
}
