//Business Logic

function loopingTheNumber(number) {
  for (let i = 0; i <= number; i++) {
    if (i.toString().indexOf("3") > -1) {
      console.log("Won't you be my neighbor?");
    } else if (i.toString().indexOf("2") > -1) {
      console.log("Boop!")
    } else if (i.toString().indexOf("1") > -1) {
      console.log("Beep!")
    } else {
      console.log(i)
    }
  }
}

// function numbersInput(numbers) {
//   let numberArray = []
//   numbersInput.forEach(function (element) {

//   })
//   return "greater than zero";
// }



//User Logic

$(document).ready(function () {
  $("form#user").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#userInput").val());

    loopingTheNumber
  });
});