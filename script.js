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

// highlight links
const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
); // get the button

// highlight links function
function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a"); // get all anchor elements
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight"); // add highlight class to each anchor element
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks); // when button is clicked, call highlightLinks function

// display user data
const dummyUserData = {
  firstName: "andrei",
  lastName: "razvan",
  age: 1,
  jobTitle: "it support",
  hobbies: ["sports", "coding"],
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button"); // get the button

// display user data function
function displayUserDate() {
  // console.log("displaying user data..."); // log to console
  const userDataElement = document.getElementById("output-user-data"); // get the output field
  userDataElement.innerHTML = ""; // clear the output field

  for (const key in dummyUserData) {
    const newUserDataElement = document.createElement("li"); // create a new list item element
    newUserDataElement.textContent = `${key} : ${dummyUserData[key]}`; // set the text content of the list item
    userDataElement.append(newUserDataElement); // append the list item to the output field
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserDate); // when button is clicked, call displayUserDate function

// statictic date / roll a dice

const rollDiceButtonElement = document.querySelector("#statistics button"); // get the button

// roll dice function
function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // generate a random number between 1 and 6
}

// number of rolls function
function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number"); // get the input field
  const diceRollsListElement = document.getElementById("dice-rolls"); // get the output field

  const enteredNumber = targetNumberInputElement.value; // get the value of the input field
  diceRollsListElement.innerHTML = ""; // clear the output field

  // check if number is between 1 and 6
  if (enteredNumber < 1 || enteredNumber > 6 || isNaN(enteredNumber)) {
    alert("Please enter a number between 1 and 6.");
    return; // exit the function
  }

  let hasRolledTargetNumber = false; // variable to check if the target number has been rolled
  let numberOfRolls = 0; // variable to store the number of rolls

  while (!hasRolledTargetNumber) {
    const rollNumber = rollDice(); // roll the dice

    // if (rollNumber == enteredNumber) {
    //   hasRolledTargetNumber = true; // set the variable to true if the target number has been rolled
    // }

    numberOfRolls++; // increment the number of rolls
    const newRollListItemElement = document.createElement("li"); // create a new list item element
    const outputText = `Roll ${numberOfRolls}: ${rollNumber}`; // set the text content of the list item
    newRollListItemElement.textContent = outputText; // set the text content of the list item
    diceRollsListElement.append(newRollListItemElement); // append the list item to the output field
    hasRolledTargetNumber = rollNumber == enteredNumber; // set the variable to true if the target number has been rolled
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls"); // get the output field
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  ); // get the output field

  outputTargetNumberElement.textContent = enteredNumber; // display the target number
  outputTotalRollsElement.textContent = numberOfRolls; // display the number of rolls
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls); // when button is clicked, call deriveNumberOfDiceRoll function
