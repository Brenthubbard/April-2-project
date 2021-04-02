//Business Logic



// function numbersInput(numbers) {
//   let numberArray = []
//   numbersInput.forEach(function (element) {

//   })
//   return "greater than zero";
// }

// function number1change(number1) {
// if 

// }

// let numbers


//User Logic

$(document).ready(function () {
  $("form#user").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#userInput").val());

    for (let index = 0; index <= userInput; index++) {
      if (index === 1) {
        console.log("Beep!");
      } else if (index === 2) {
        console.log("Boop!")
      } else if (index === 3) {
        console.log("Won't you be my neighbor?")
      } else {
        console.log(index)
      }
    }
    console.log(typeof userInput);
  });
});