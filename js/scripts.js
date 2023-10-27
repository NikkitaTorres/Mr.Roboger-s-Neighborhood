function beepBoop(number) {
  const numberString = number.toString();
  if (numberString.includes("3")) {
    return "Won't you be my neighbor?";
    } else if (numberString.includes("2")) {
    return "Boop!";
    } else if (numberString.includes("1")) {
    return "Beep!";
    }
  return number;
}

function changedNumbers(num) {
  const numbersArray = [];
  for (let i = 0; i <= num; i++) {
    numbersArray.push(beepBoop(i));
  }
  return numbersArray;
}

function userResult() {
  const userInput = document.getElementById("userInput").value;
  const num = parseInt(userInput);
  const validInput = (/^\d+$/);
  if (validInput.test(userInput)) {
    const num = parseInt(userInput);
    const numbersArray = changedNumbers(num);
    displayNumbers(numbersArray);
  } else {
      displayErrorMessage("Please enter a valid number.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", userResult);
});

function displayNumbers(numbersArray) {
  document.getElementById("result").textContent = "Counting: " + numbersArray.join(", ");
 }

function displayErrorMessage(message) {
  document.getElementById("result").textContent = message;
}