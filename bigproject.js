// JavaScript File

// 1) querySelectorAll /Use myButtons 
// 2) for loop to apply an event LIstener to all 
// elements retreived by the query selector
// 3) use evt in your event Listener to determine the target (todo list?)
// 4) ???? what will you do to the target?
// 5) profit

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



var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function(evt) {
      if (parrelbtn.style.display === "none" && evt.target.innerHTML === "Mr. Parrell") {
         parrelbtn.style.display = "block";
      }
      else {
         parrelbtn.style.display = "none";
      }
      if (kellybtn.style.display === "none" && evt.target.innerHTML === "Mr. Kelly") {
         kellybtn.style.display = "block";
      }
      
      else {
         kellybtn.style.display = "none";
      }

      if (colicinobtn.style.display === "none" && evt.target.innerHTML === "Ms. Colicino") {
         colicinobtn.style.display = "block";
      }
      else {
         colicinobtn.style.display = "none";
      }

      if (lolabtn.style.display === "none" && evt.target.innerHTML === "Mr. Lola") {
         lolabtn.style.display = "block";
      }
      else {
         lolabtn.style.display = "none";
      }

      if (thompsonbtn.style.display === "none" && evt.target.innerHTML === "Ms. Thompson") {
         thompsonbtn.style.display = "block";
      }
      else {
         thompsonbtn.style.display = "none";
      }

      if (ballardbtn.style.display === "none" && evt.target.innerHTML === "Mr. Ballard") {
         ballardbtn.style.display = "block";
      }
      else {
         ballardbtn.style.display = "none";
      }

      if (bonnezbtn.style.display === "none" && evt.target.innerHTML === "Ms. Bonnez") {
         bonnezbtn.style.display = "block";
      }
      else {
         bonnezbtn.style.display = "none";
      }

      if (edwardsbtn.style.display === "none" && evt.target.innerHTML === "Mr. Edwards") {
         edwardsbtn.style.display = "block";
      }
      else {
         edwardsbtn.style.display = "none";
      }

    

      if (hsiaobtn.style.display === "none" && evt.target.innerHTML === "Mrs. Hsiao") {
         hsiaobtn.style.display = "block";
      }
      else {
         hsiaobtn.style.display = "none";
      }

      if (tellezbtn.style.display === "none" && evt.target.innerHTML === "Mr. Tellez") {
         tellezbtn.style.display = "block";
      }
      else {
         tellezbtn.style.display = "none";
      }


     

      if (alfarobtn.style.display === "none" && evt.target.innerHTML === "Mr. Alfaro") {
         alfarobtn.style.display = "block";
      }
      else {
         alfarobtn.style.display = "none";
      }

      if (hoybtn.style.display === "none" && evt.target.innerHTML === "Mr. Hoy") {
         hoybtn.style.display = "block";
      }
      else {
         hoybtn.style.display = "none";
      }

      if (feeneybtn.style.display === "none" && evt.target.innerHTML === "Mr. Feeney") {
         feeneybtn.style.display = "block";
      }
      else {
         feeneybtn.style.display = "none";
      }

   

      if (howelbtn.style.display === "none" && evt.target.innerHTML === "Mr. Howel") {
         howelbtn.style.display = "block";
      }
      else {
         howelbtn.style.display = "none";
      }

      if (hesbybtn.style.display === "none" && evt.target.innerHTML === "Mr. Hesby") {
         hesbybtn.style.display = "block";
      }
      else {
         hesbybtn.style.display = "none";
      }
      
      if (macbtn.style.display === "none" && evt.target.innerHTML === "Mrs. Mac") {
         macbtn.style.display = "block";
       } 
       
       else { 
          macbtn.style.display = "none";
          
       }
   });


}