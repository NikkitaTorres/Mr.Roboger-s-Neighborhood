 function beepBoop(){
 // Push numbers from 0 to the user's inputted number into the array
 for (let i = 0; i <= num; i++) {
  
  //Check if number contains the digit 1
  if (numberString.includes("3")) {
    numbersArray.push("Won't you be my neighbor?");
    } else if (numberString.includes("2")) {
    numbersArray.push("Boop!");
    } else if (numberString.includes("1")) {
    numbersArray.push("Beep!");
    } else {
    numbersArray.push(i);
    }
  }
}