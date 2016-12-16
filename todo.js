//These var tags create a variable. This makes it so the javascript can do tasks    
var inp = document.getElementById("inp");
var disp = document.getElementById("disp");
var btn = document.getElementById("btn");
var textclr = document.getElementById("textclr");
var clearbtn = document.getElementById("clearbtn");

clearbtn.addEventListener("click", function(){
    
      
    disp.innerHTML = '';
    
})

// This is an addEventListener which wa8its for a certain function to carry out the task. In this situation Click is a function that makes it so that when you press a button it will carry out the task 
btn.addEventListener("click", function() {

//disp.innerHTML += "<div>" + inp.value + "</div>"

    // These are if else statements, if one thing is one way, then if it is else , than its equal to something else.  Each else if statment
    // Each else if statment is changing the text color of the task, and inputting it into the page. It allows for changing certain aspects that are important  
    if (textclr.value == "none") {
        disp.innerHTML += '<div style="color:black;">' + inp.value + '</div>';
    }
    else if (textclr.value == "red") {
        disp.innerHTML += '<div style="color:red">' + inp.value + '</div>';
    }
    else if (textclr.value == "blue") {
        disp.innerHTML += '<div style="color:blue">' + inp.value + '</div>';
    }
    else if (textclr.value == "green") {
        disp.innerHTML += '<div style="color:green">' + inp.value + '</div>';
    }

    else if (textclr.value == "aqua") {
        disp.innerHTML += '<div style="color:aqua">' + inp.value + '</div>';
    }
    
    else if (textclr.value == "white") {
        disp.innerHTML += '<div style="color:white">' + inp.value + '</div>';
    }
});

//
disp.addEventListener("click", function(evt) {
    evt.target.parentNode.removeChild(evt.target);
//This line of code is used to target the thing being display, and removes it upon clicking on it. It is used because it is important remove things in a to do list
})
