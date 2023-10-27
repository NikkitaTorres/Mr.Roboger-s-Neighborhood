 function beepBoop(){
 // Push numbers from 0 to the user's inputted number into the array
 for (let i = 0; i <= num; i++) {
  
  //Check if number contains the digit 1
  if (i.toString().includes("1")) {
    numbersArray.push("Beep!");
    } else {
      numbersArray.push(i);
      }
  }
}