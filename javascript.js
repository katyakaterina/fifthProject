 var button = document.querySelector(".write-us");
 var modal = document.querySelector(".modal");
 var mouseover = modal.querySelector(".close");
 var login = modal.querySelector("[name=login]");
 var email = modal.querySelector("[name=email]");
 var form = modal.querySelector("form");
 var submit = modal.querySelector(".submit");

          
 button.addEventListener("click", function (e) {
 	 e.preventDefault();
 	 console.log(modal.classList.contains("open"));
     modal.classList.toggle("open");
     login.focus();

          });

 form.addEventListener("submit", function(e) {
 	e.preventDefault();
 	

 	if(!login.value) {
 		console.log("пусто")
 	
 
 	 } else {
 		console.log("не отправилась");
 	
 	}
 	
 });
 

 
  
        
          