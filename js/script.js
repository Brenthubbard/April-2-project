//Business Logic

function loopingTheNumber(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().indexOf("3") > -1) {
      arr.push("Won't you be my neighbor?");
    } else if (i.toString().indexOf("2") > -1) {
      arr.push("Boop!");
    } else if (i.toString().indexOf("1") > -1) {
      arr.push("Beep!");
    } else {
      arr.push(i);
    }
  }
  return arr;
}





//User Logic

$(document).ready(function () {
  $("form#user").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#userInput").val());
    const numberArray = loopingTheNumber(userInput);
    console.log(numberArray);

    // return numberArray;
    // function outPut(numberArray) {
    //   $(".outputText").show(numberArray(userInput))
    // };
    // document.getElementById("#answer").innerHTML = numberArray;
    // {
  });

});



    numberArray(function (element) {
    $("#answer").append`<h4>${element}</h4>`;
    });