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
