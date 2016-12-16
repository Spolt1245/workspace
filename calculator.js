//These var tags create a variable. This makes it so the javascript can
var num1input= document.getElementById("num1");
var drop = document.getElementById("drop");
var num2input= document.getElementById("num2");
var solve= document.getElementById("solve");
var display= document.getElementById("display");
  
//This solves the math problems, and waits for someone to click the button to solve

solve.addEventListener("click",function(){  
   
 
    

//The num1 and num2 are the imput values that allow you to do basic math problems
var num1 = num1input.value;
var num2 = num2input.value;   
//These if else statements mean that if the dropdown bar is equal to a sign like +,-,/ etc.  
   if(drop.value === "+") {
       var answer = +num1 + +num2; 
       display.innerHTML = answer; 
   }
    
     else if (drop.value === "-") {
       var answe = num1 - num2; 
       display.innerHTML = answe; 
   }
   else if (drop.value === "*") {
       var answ = num1 * num2; 
       display.innerHTML = answ; 
   }
   else if (drop.value === "/") {
       var ans = num1 / num2; 
       display.innerHTML = ans; 
   
   }
   else if (drop.value === "^") {
      var an = Math.pow(num1,num2); 
      display.innerHTML = an;
   }
   else if (drop.value === "√") {
      var a = Math.sqrt(num1);
      display.innerHTML = a;
   }
   
 //The if else statements use math to solve math related questions.   
  
  
   
   });
    
    