# Mr. Roboger's Neighborhood

#### This application was designed to show my ability as a student to to work with arrays, loops and Test Driven Development using JavaScript. 

#### By: Brent Hubbard

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

## Description

This web application is designed to take a number form the user and return a range of numbers from 0 to the number inputted by the user but change the numbers 1,2,3 to different outputs.

## Specs

* Describe: create a list of numbers from 0 to the inputted number,
* Test:count(1,2,3,4)
* Code:function count (num) {
let arr = [];
for (let i = 1; i<= num; i++){
arr.push(i.toString());
}
return arr.toString();
}
* Expected Output: 1,2,3,4

* Describe:replace numbers with 3 with "Won't you be my neighbor"
* Test:input 3
* Code:if (i.toString().indexOf("3") > -1) {
      arr.push("Won't you be my neighbor?");
* Expected Output:(4) [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

* Describe:replace numbers with 2 with "Boop",
* Test:input 2
* Code:if (i.toString().indexOf("2") > -1) {
      arr.push("Boop!");
* Expected Output:(3) [0, "Beep!", "Boop!"]

* Describe:replace numbers with a 1 with "Beep"
* Test:input 1
* Code:(i.toString().indexOf("1") > -1) {
      arr.push("Beep!");
* Expected Output:(2) [0, "Beep!"]

* Describe:maintain a hierarchy within the exception rules 
(3s trump 2s which trump 1s). 
* Test:put conditional statements in descending order
* Code:
* Expected Output:[0, "Beep!", "Boop!", "Won't you be my neighbor?"]




## Setup/Installation Requirements

* Click on the green download code button. Click on the clipboard icon.
* Open your terminal, navigate to the preferred storage location on your desktop.
* Type git clone and then paste the cloned project.
* CD into the cloned project.
* type code . to open the project in your code editor. OR
* Drag cloned project into code editor if your command pallette does not support code .


## Known Bugs

* Logic works but can't get it to print to UI
* 

## License

Copyright 2021 YOUR NAME**
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact Information
hubbardbrent@hotamail.com
