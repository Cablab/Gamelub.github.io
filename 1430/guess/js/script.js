// JAVASCRIPT

var startHeading = document.getElementById("gameHeading").innerText;
var startPic = document.getElementById("gamePic").src;
var heading;
var pic;

function startGame()
{
   gameNum = setGameNum();
   document.getElementById("gameHeading").innerText = startHeading;
   document.getElementById("gamePic").src = startPic;
   document.getElementById("guess").value = "";  
   document.getElementById("guess").select();
}

function newGame()
{
   startGame();
}

function setGameNum()
{
   gameNum = 0;
   while (gameNum == 0)
   {
      gameNum = Math.floor(Math.random() * 100);
   }
   return gameNum;
}

function testGameNum()
{
   alert("The number is: " + gameNum);
}

function testNum()
{
   userNum = document.getElementById("guess").value;
   if (userNum == null || isNaN(userNum) || userNum < 1 || userNum > 99)
   {
      alert("Please enter a number from 1 to 99");
   }
   else if (userNum > gameNum)
   {
      if (userNum - gameNum > 30)
      {
         heading = userNum + " is Too High. You're Freezing!";
         pic = "img/freezing.jpg";
      }
      else if (userNum - gameNum > 20)
      {
         heading = userNum + " is Too High. You're Cold!";
         pic = "img/cold.jpg";
      }
      else if (userNum - gameNum > 10)
      {
         heading = userNum + " is Too High. You're Warm!";
         pic = "img/warm.jpg";
      }
      else if (userNum - gameNum > 5)
      {
         heading = userNum + " is Too High. You're Hot!";
         pic = "img/hot.jpg";
      }
      else
      {
         heading = userNum + " is Too High. You're Burning Up!";
         pic = "img/burning.jpg";
      }
      document.getElementById("gameHeading").innerText = heading;
      document.getElementById("gamePic").src = pic;
   }
   else if (userNum < gameNum)
   {
      if (gameNum - userNum > 30)
      {
         heading = userNum + " is Too Low. You're Freezing!";
         pic = "img/freezing.jpg";
      }
      else if (gameNum - userNum > 20)
      {
         heading = userNum + " is Too Low. You're Cold!";
         pic = "img/cold.jpg"; 
      }
      else if (gameNum - userNum > 10)
      {
         heading = userNum + " is Too Low. You're Warm!";
         pic = "img/warm.jpg"; 
      }
      else if (gameNum - userNum > 5)
      {
         heading = userNum + " is Too Low. You're Hot!";
         pic = "img/hot.jpg"; 
      }
      else
      {
         heading = userNum + " is Too Low. You're Burning Up!";
         pic = "img/burning.jpg"; 
      }
      document.getElementById("gameHeading").innerText = heading;
      document.getElementById("gamePic").src = pic;
   }
   else
   {
      heading = userNum + " is Right! You Win!";
      pic = "img/victory.jpg";
      document.getElementById("gameHeading").innerText = heading;
      document.getElementById("gamePic").src = pic;
   }
   document.getElementById("guess").select();
}  
