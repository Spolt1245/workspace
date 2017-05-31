
// Each line of code creates a button variable that has a specific name to each teacher, and sets it equal to the id of that exact same name as in the variable. Gives the each button a specific name. The code makes it so that the computer will be able to correspond information with id/name of the button when clicked.
//this gets the element using an id. 
//First step to creating a functional button. 
var parrelbtn = document.getElementById('parrelbtn');
var kellybtn = document.getElementById('kellybtn');
var colicinobtn = document.getElementById('colicinobtn');
var lolabtn = document.getElementById('lolabtn');
var thompsonbtn = document.getElementById('thompsonbtn');
var ballardbtn = document.getElementById('ballardbtn');
var bonnezbtn = document.getElementById('bonnezbtn');
var edwardsbtn = document.getElementById('edwardsbtn');
var hsiaobtn = document.getElementById('hsiaobtn');
var tellezbtn = document.getElementById('tellezbtn');
var alfarobtn = document.getElementById('alfarobtn');
var hoybtn = document.getElementById('hoybtn');
var feeneybtn = document.getElementById('feeneybtn');
var howelbtn = document.getElementById('howelbtn');
var hesbybtn = document.getElementById('hesbybtn');
var macbtn = document.getElementById('macbtn');


//Creates an array of all the teacher buttons, and stores them in a list. (for example: "colicinobtn") All the variables above are put in the list. If a button is clicked with a specific name of a teacher, the computer will look one by one through the list to determine which variable is performing a function.
var buttons = document.querySelectorAll("button");

//Creates a loop, that determines if the variable i is less than the button length.  when there is a lot of the same commands trying to be accomplished, it can do that command over, and over without having to write the same code over and over again. 
for (var i = 0; i < buttons.length; i++) {
   //Listens for the user to click on the button. 
   buttons[i].addEventListener("click", function(evt) {
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.
      if (parrelbtn.style.display === "none" && evt.target.innerHTML === "Mr. Parrell") {
         parrelbtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         parrelbtn.style.display = "none";
     //The rest of the if, and else statements follow the same format, and perform the same commands. They just have different variable names, and id's. 
      }
         //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.
      if (kellybtn.style.display === "none" && evt.target.innerHTML === "Mr. Kelly") {
         kellybtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         kellybtn.style.display = "none";
      }
//Hides information when the button is clicked a second time
      if (colicinobtn.style.display === "none" && evt.target.innerHTML === "Ms. Colicino") {
         colicinobtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         colicinobtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.

      if (lolabtn.style.display === "none" && evt.target.innerHTML === "Mr. Lola") {
         lolabtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         lolabtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.

      if (thompsonbtn.style.display === "none" && evt.target.innerHTML === "Ms. Thompson") {
         thompsonbtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         thompsonbtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.

      if (ballardbtn.style.display === "none" && evt.target.innerHTML === "Mr. Ballard") {
         ballardbtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         ballardbtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.

      if (bonnezbtn.style.display === "none" && evt.target.innerHTML === "Ms. Bonnez") {
         bonnezbtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         bonnezbtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.

      if (edwardsbtn.style.display === "none" && evt.target.innerHTML === "Mr. Edwards") {
         edwardsbtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         edwardsbtn.style.display = "none";
      }

    
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.

      if (hsiaobtn.style.display === "none" && evt.target.innerHTML === "Mrs. Hsiao") {
         hsiaobtn.style.display = "block";
      }
    //Hides information when the button is clicked a second time
      else {
         hsiaobtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.

      if (tellezbtn.style.display === "none" && evt.target.innerHTML === "Mr. Tellez") {
         tellezbtn.style.display = "block";
      }
     //Hides information when the button is clicked a second time
      else {
         tellezbtn.style.display = "none";
      }

    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.

     

      if (alfarobtn.style.display === "none" && evt.target.innerHTML === "Mr. Alfaro") {
         alfarobtn.style.display = "block";
      }
     
     //Hides information when the button is clicked a second time
      else {
         alfarobtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.
      if (hoybtn.style.display === "none" && evt.target.innerHTML === "Mr. Hoy") {
         hoybtn.style.display = "block";
      }
     //Hides information when the button is clicked a second time
      else {
         hoybtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.
      if (feeneybtn.style.display === "none" && evt.target.innerHTML === "Mr. Feeney") {
         feeneybtn.style.display = "block";
      }
     //Hides information when the button is clicked a second time
      else {
         feeneybtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.
      if (howelbtn.style.display === "none" && evt.target.innerHTML === "Mr. Howel") {
         howelbtn.style.display = "block";
      }
     //Hides information when the button is clicked a second time
      else {
         howelbtn.style.display = "none";
      }
    //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.
      if (hesbybtn.style.display === "none" && evt.target.innerHTML === "Mr. Hesby") {
         hesbybtn.style.display = "block";
      }
      //Hides information when the button is clicked a second time
      else {
         hesbybtn.style.display = "none";
      }
          //If the teachers information is not being displayed, and the user clicks on the button with the specific name of the teacher it will target the innerhtml, and display the hidden info.
      if (macbtn.style.display === "none" && evt.target.innerHTML === "Mrs. Mac") {
         macbtn.style.display = "block";
       } 
       //Hides information when the button is clicked a second time
       else { 
          macbtn.style.display = "none";
          
       }
   });


}
