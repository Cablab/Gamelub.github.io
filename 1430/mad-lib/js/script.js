// JAVASCRIPT
var nounTemp;
var adjTemp;
var exclaimTemp;
var verbTemp;

var noun1 = prompt("Enter a noun:");
var noun2 = prompt("Enter a noun:");
var verb1 = prompt("Enter a verb (present participle):");
var verb2 = prompt("Enter a verb (present participle):");
var verb3 = prompt("Enter a verb (past participle):");
var verb4 = prompt("Enter a verb (past participle):");
var adj1 = prompt("Enter an adjective:");
var adj2 = prompt("Enter an adjective:");
var exclaim1 = prompt("Enter an exclaimation:");
var exclaim2 = prompt("Enter an exclaimation:");

var story = "Yesterday was " + adj1 + ": A " + noun1 + " came " + verb1 + " through my classroom"
          + " while our " + noun2 + ", Ms. Bubbles, tried to stop it. The " + noun1 + " was"
          + " too " + adj2 + ", though, and " + verb3 + " right past all the desks. " 
          + exclaim1 + "!";

alert(story);

function placeWords()
{
   document.getElementById("noun1").innerText = noun1;
   document.getElementById("noun1.2").innerText = noun1;
   document.getElementById("noun2").innerText = noun2;
   document.getElementById("verb1").innerText = verb1;
   document.getElementById("verb2").innerText = verb3;
   document.getElementById("adj1").innerText = adj1;
   document.getElementById("adj2").innerText = adj2;
   document.getElementById("exclaim").innerText = exclaim1;
}

function shuffleNouns()
{
   nounTemp = noun2;
   noun2 = noun1;
   noun1 = nounTemp;
   document.getElementById("noun1").innerText = noun1;
   document.getElementById("noun1.2").innerText = noun1;
   document.getElementById("noun2").innerText = noun2;

}

function shuffleAdjs()
{
   adjTemp = adj2;
   adj2 = adj1;
   adj1 = adjTemp;
   document.getElementById("adj1").innerText = adj1;
   document.getElementById("adj2").innerText = adj2;
}

function shuffleExclaims()
{
   exclaimTemp = exclaim2;
   exclaim2 = exclaim1;
   exclaim1 = exclaimTemp;
   document.getElementById("exclaim").innerText = exclaim1;
}

function shuffleVerbs()
{
   verbTemp = verb2;
   verb2 = verb1;
   verb1 = verbTemp;
   document.getElementById("verb1").innerText = verb1;

   verbTemp = verb4;
   verb4 = verb3;
   verb3 = verbTemp;
   document.getElementById("verb2").innerText = verb3;
}
            