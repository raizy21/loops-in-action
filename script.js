// sum number calculator
const calculateSumButtonElement = document.querySelector("#calculator button");

// calculate sum function
function calculateSum() {
  // console.log("calculating sum..."); // log to console
  const userNumberInputElement = document.getElementById("user-number"); // get the input field
  const enteredNumber = userNumberInputElement.value; // get the value of the input field

  let sumUpToNumber = 0; // variable to store the sum

  for (let i = 1; i <= enteredNumber; i++) {
    sumUpToNumber += i; // add the current number to the sum
  }

  const outputResultElement = document.getElementById("calculated-sum"); // get the output field
  outputResultElement.textContent = sumUpToNumber; // display the result
  outputResultElement.style.display = "block"; // show the result
}

// add event listener to button
calculateSumButtonElement.addEventListener("click", calculateSum); // when button is clicked, call calculateSum function
