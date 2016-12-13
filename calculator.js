var num1input= document.getElementById("num1");
var drop = document.getElementById("drop");
var num2input= document.getElementById("num2");
var solve= document.getElementById("solve");
var display= document.getElementById("display");
solve.addEventListener("click",function(){
var num1 = num1input.value;
var num2 = num2input.value;   

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
   
   
  
  
   
   });
    
    