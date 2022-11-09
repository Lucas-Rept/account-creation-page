let buttonConfirmData = document.getElementById("buttonConfirmData");
let alerts = document.getElementsByClassName("alert");
let inputs = document.getElementsByClassName("loginInfo");

buttonConfirmData.addEventListener("click", check);

function check(){
    let valid = 0;
    let firstNameCamp = document.getElementById("first");
    let lastNameCamp = document.getElementById("last");
    let emailCamp = document.getElementById("email");
    let passwordCamp = document.getElementById("pass");

    if(firstNameCamp.value == ""){
        alerts[0].innerHTML = "First Name cannot be empty";
        inputs[0].classList.add("errorStatus");
    }
    else{
        alerts[0].innerHTML = "";
        inputs[0].classList.remove("errorStatus");
        valid++;
    }

    if(lastNameCamp.value == ""){
        alerts[1].innerHTML = "Last Name cannot be empty";
        inputs[1].classList.add("errorStatus");
    }
    else{
        alerts[1].innerHTML = "";
        inputs[1].classList.remove("errorStatus");
        valid++;
    }

    let cont = 0;
    let invalidPos = false;

    for(var char of emailCamp.value){
        if(char == "@"){
            cont++;
            let tamanho = Number(emailCamp.value.length);
            let position = Number(emailCamp.value.indexOf(char));
            if(emailCamp.value.indexOf("@") == 0 ||  position == tamanho - 1){
                invalidPos = true;
            }
        }
    }   

    console.log(invalidPos);

    if(emailCamp.value == ""){
        alerts[2].innerHTML = "Email cannot be empty";
        inputs[2].classList.add("errorStatus");
        inputs[2].classList.remove("emailErrorStatus");
    }
    else if(invalidPos == true || cont != 1){
        alerts[2].innerHTML = "Looks like this is not an email";
        inputs[2].classList.add("emailErrorStatus");
        inputs[2].classList.remove("errorStatus");
    }
    else{
        alerts[2].innerHTML = "";
        inputs[2].classList.remove("errorStatus");
        inputs[2].classList.remove("emailErrorStatus");
        valid++;
    }

    if(passwordCamp.value == ""){
        alerts[3].innerHTML = "Password cannot be empty";
        inputs[3].classList.add("errorStatus");
    }
    else if(passwordCamp.value.length < 8){
        alerts[3].innerHTML = "Password needs to have at least 8 characters";
        inputs[3].classList.add("errorStatus");
    }
    else{   
        alerts[3].innerHTML = "";
        inputs[3].classList.remove("errorStatus");
        valid++;
    }

    if(valid == 4){
        firstNameCamp.value = "";
        lastNameCamp.value = "";
        emailCamp.value = "";
        passwordCamp.value = "";
        congrats();
        setTimeout(removeCongrats, 10000);
    }
}


function congrats(){
    let congrats = document.getElementsByClassName("congrats")[0];
    congrats.classList.add("show");
}

function removeCongrats(){
    let congrats = document.getElementsByClassName("congrats")[0];
    congrats.classList.remove("show");
}