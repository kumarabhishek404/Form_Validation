console.log("Project 4");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;

// console.log(name, email, phone);

name.addEventListener('blur', ()=>{
    console.log("Name is Blured");
    // Validate name is here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your name is valid");
        name.classList.remove("is-invalid")
        validUser = true;
    }
    else{
        console.log("Your name is not Valid");
        name.classList.add("is-invalid")
        validUser = false;
    }
})

email.addEventListener('blur', ()=>{
    console.log("Email is Blured");
    // Validate name is here
    let regex = /^([_\. \-0-9a-zA-Z]+)@([_\. \-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your email is valid");
        email.classList.remove("is-invalid")
        validEmail = true;
    }
    else{
        console.log("Your email is not Valid");
        email.classList.add("is-invalid")
        validEmail = false;
    }
})
phone.addEventListener('blur', ()=>{
    console.log("Phone is Blured");
    // Validate phone is here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove("is-invalid")
        validPhone = true;
    }
    else{
        console.log("Your phone is not Valid");
        phone.classList.add("is-invalid")
        validPhone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener('click' ,(e)=>{
    e.preventDefault();
    if(validUser && validEmail && validPhone){
        console.log("Your UserName, Email and Phone are valid. Submitting your form");
        
        let failure = document.getElementById("failure");
        let success = document.getElementById("success");
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log("One of UserName, Email and Phone are not valid. Hence not submitting your form. Please currect the error and try again");

        let failure = document.getElementById("failure");
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#failure').show();
        $('#success').hide();
    }
})