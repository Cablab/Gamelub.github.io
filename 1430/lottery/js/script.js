// JAVASCRIPT

var numSize = prompt("How many numbers would you like to pick?" +
                     "\n\n(Try entering strings or negative numbers)");
while (isNaN(numSize) || (numSize <= 0) || numSize == null)
{
   alert("Please enter a number greater than 0");
   var numSize = prompt("How many numbers would you like to pick?"); 
}

var lotteryNums = new Array();
var winningNums = new Array();
var numbers = "";
var winners = "";

getNumbers(lotteryNums, numSize);
getNumbers(winningNums, numSize);
numbers = makeTicket(numbers, lotteryNums);
winners = makeTicket(winners, winningNums);

alert(numbers);

document.getElementById("lottery-numbers").innerText = numbers;

function getNumbers(numArray, numSize)
{
   for (var i = 0; i < numSize; i++)
   {
      var ranNum = Math.floor(Math.random() * 100);
      // Cannot have 0 for a number
      if (ranNum == 0)
      {
         ranNum = Math.floor(Math.random() * 100);
         if (ranNum < 10)
         {
            ranNum = "0" + ranNum;           // Make all number 2 digits
         }
         numArray[i] = ranNum;
      }
      else
      {
         if (ranNum < 10)
         {
            ranNum = "0" + ranNum;          // Make all numbers 2 digits
         }
         numArray[i] = ranNum;  
      }
   } 
}

function makeTicket(ticket, numArray)
{
   for  (var i = 0; i < numArray.length; i++)
   {
      if (i != (numArray.length - 1))
      {
         ticket += numArray[i] + "-";
      }
      else
      {
         ticket += numArray[i];
      }
   }
   return ticket;
}


function showWinners()
{
   document.getElementById("winning-numbers").innerText = winners;
}

function goodLuck()
{
   document.getElementById("winning-numbers").innerText = "Good Luck!";
}  

function testWin()
{
   if (document.getElementById("lottery-numbers").innerText == winners)
   {
      //alert("You won!!! Congratulations");
      document.getElementById("answer").innerText = "Yes! Congratulations!";
      document.getElementById("face").src = "img/smile.png";
   }
   else {
      //alert("You did not win. Better luck next time.");
      document.getElementById("answer").innerText = "No. Try again.";
      document.getElementById("face").src = "img/frown.png";

   }
}

function newTicket()
{
   numbers = "";
   getNumbers(lotteryNums, numSize);
   numbers = makeTicket(numbers, lotteryNums);
   document.getElementById("lottery-numbers").innerText = numbers;
}

function forceWin()
{
   numbers = "";
   document.getElementById("lottery-numbers").innerText = winners;
}
