var inp =  document.getElementById("inp");
var disp =  document.getElementById("disp");
var btn =  document.getElementById("btn");

btn.addEventListener("click", function(){
 disp.innerHTML+="<div>"+ inp.value+"</div>"
                       
});            