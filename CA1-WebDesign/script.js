
function validForm(event){
    event.preventDefault();


    //Declare variables
    
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const querySelect = document.getElementById("querySelect");
    const messageTextArea = document.getElementById("message");

    const errorSpans = document.querySelectorAll(".text-danger");
    errorSpans.forEach(span => (span.innerText = ""));

    let valid = true; //validate the form//

   

        if(nameInput.value === ""){ //input//
        document.getElementById("nameError").innerText= "Please fill this field.*";
        valid = false;
        }

        if(emailInput.value === ""){ //input//
            document.getElementById("emailError").innerText= "Please fill this field.*"; //output//
            valid = false;
        }

        if(phoneInput.value === ""){ //input//
            document.getElementById("phoneError").innerText= "Please fill this field.*"; //output//
            valid = false;
        }

        if(querySelect.value === ""){ //input//
            document.getElementById("queryError").innerText= "Please select a query type.*"; ///output//
            valid = false;
        }


        if(!emailInput.checkValidity()){ //input//
        document.getElementById("emailError").innerText= "Please fill in a valid email.*"; //output//
        valid = false;
        }

        if(messageTextArea.value === ""){ //input//
            document.getElementById("messageError").innerText= "Please fill this field.*";
            valid = false;
        } else if(messageTextArea.value.length < 10){
        document.getElementById("messageError").innerText= "Message should be at leats 10 characters long.*" //output//
        valid = false;
        }

        if(!valid) return false;

        const successMessage = document.getElementById("successMessage"); //output//
        successMessage.classList.remove("d-none");

        if(valid){
            const audio = document.getElementById("jaguarSound");//output//
            audio.play();
        }

        document.getElementById("form").reset();
        return true;
   }
    
    

