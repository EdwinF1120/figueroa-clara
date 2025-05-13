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
  
  if (checkComplete()) {
    let EdwinnerDiv = document.getElementById("Edwinner");
    EdwinnerDiv.style.display = "block";
    
    let EdwinnerText = document.querySelector("#Edwinner div")
    EdwinnerText.innerText = isXTurn ? "Player X wins!" : "Player 0 wins!";
    
  }
    
    isXturn = !isXturn;
  }
}

function checkComplete() {
  for (let _i = 0; _i < 3; _i++) {
    if ((squareArr[_i].innerText == "X" || squareArr[_i].innerText == "O") 
      && squareArr[_i].innerText == squareArr[_i + 3].innerText
      && squareArr[_i].innerText == squareArr[_i + 6].innerText
     ) return true;
  else if ((squareArr[3 * _i].innerText == "X" || squareArr[3 * _i].innerText == "O") 
      && squareArr[3 * _i].innerText == squareArr[3 * _i + 3].innerText
      && squareArr[3 * _i].innerText == squareArr[3 * _i + 6].innerText
     ) return true;
  }
  
 if ((squareArr[0].innerText == "X" || squareArr[0].innerText == "O") 
    && squareArr[0].innerText == squareArr[4].innerText
    && squareArr[0].innerText == squareArr[8].innerText
    ) return true;
 else if ((squareArr[2].innerText == "X" || squareArr[2].innerText == "O") 
    && squareArr[2].innerText == squareArr[4].innerText
    && squareArr[2].innerText == squareArr[6].innerText
    ) return true;
  else return false;
  
}
