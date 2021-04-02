//Business Logic



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

    for (let index = 0; index <= userInput; index++) {
      if (index.toString().indexOf("3") > -1) {
        console.log("Won't you be my neighbor?");
      } else if (index.toString().indexOf("2") > -1) {
        console.log("Boop!")
      } else if (index.toString().indexOf("1") > -1) {
        console.log("Beep!")
      } else {
        console.log(index)
      }
    }
  });
});