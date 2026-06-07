
let emailInput = document.getElementById("email");
let subscribeBtn = document.getElementById("subscribeBtn");

let signupCard = document.getElementById("signupCard");
let successCard = document.getElementById("successCard");

let userEmail = document.getElementById("userEmail");
let errorMessage = document.getElementById("errorMessage");

subscribeBtn.addEventListener("click", function(){

    let email = emailInput.value;

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){

        errorMessage.textContent =
        "Valid email required";

        emailInput.classList.add("error-input");

        return;
    }

    if(!emailPattern.test(email)){

        errorMessage.textContent =
        "Valid email required";

        emailInput.classList.add("error-input");

        return;
    }

    errorMessage.textContent = "";

    emailInput.classList.remove("error-input");

    userEmail.textContent = email;

    signupCard.style.display = "none";
    successCard.style.display = "block";

});

let dismissBtn =
document.getElementById("dismissBtn");

dismissBtn.addEventListener("click", function(){

    successCard.style.display = "none";

    signupCard.style.display = "flex";

    emailInput.value = "";

    errorMessage.textContent = "";

    emailInput.classList.remove("error-input");

});

