 var button = document.querySelector(".write-us");
 var modal = document.querySelector(".modal");
 var mouseover = modal.querySelector(".close");
 var login = modal.querySelector("[name=login]");
 var email = modal.querySelector("[name=email]");
 var letter = modal.querySelector("[name=letter]");
 var form = modal.querySelector("form");
 var submit = modal.querySelector(".submit");
 var error = modal.querySelector("span");
 var storage = localStorage.getItem("login");

          
 button.addEventListener("click", function (e) {
 	 e.preventDefault();
 	 console.log(modal.classList.contains("open"));
     modal.classList.toggle("open");



     if(storage) {
     	login.value = storage;
     	email.focus();
     } else {
     	login.focus();
     }
     });

    window.addEventListener("keydown", function(e) {
    	if(e.keyCode === 27) {
    		modal.classList.remove('open');
    	}
    });

    window.addEventListener("keyup", function(e) {
    	if(e.keyCode === 13) {
    		form.addEventListener("submit", function(e){;
    	});
    	}
    });
    
    

 	form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(!email.value) {
        error.classList.add("err");
    
    }else {
        localStorage.setItem("Ваше имя",login.value);
        form.addEventListener("submit", function(e){;
        });
      
    }

    });
    
    
   




    
   






   
    
   
 

 
  
        
          