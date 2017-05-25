



                var buttons = document.querySelectorAll("button");
                
                for (var i = 0; i < buttons.length; i++) {
                   buttons[i].addEventListener("click", function(evt) { 
                       if (colicinobtn.style.display === "none" && evt.target.innerHTML === "Ms. Colicino") {      
                         colicinobtn.style.display = "block";
                      }
                      else {
                         colicinobtn.style.display = "none";
                      }
   


