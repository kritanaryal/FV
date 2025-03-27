let form = document.querySelector(".form-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  let fullname = document.querySelector("#fullname").value;
  let email = document.querySelector("#email").value;
  let age = document.querySelector("#age").value;
  let fee = document.querySelector("#fee").value;

  let FullnameError = document.querySelector(".fullname-error");
  let EmailError = document.querySelector(".email-error");
  let AgeError = document.querySelector(".age-error");
  let FeeError = document.querySelector(".fee-error");

  FullnameError.textContent = "";
  EmailError.textContent = "";
  AgeError.textContent = "";
  FeeError.textContent = "";

//   fullname 
  if (fullname.trim() === "") {
    isValid = false;
    FullnameError.textContent = "Fullname is required";
  } else if (fullname.trim().length < 4) {
    isValid = false;
    FullnameError.textContent = "Fullname must be atleast of 4 characters";
  }

//   email
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === "") {
    isValid = false;
    EmailError.textContent = "Email is required";
  }else if (!emailPattern.test(email)){
    isValid = false;
    EmailError.textContent = 'Please enter a valid email address';
  }

//   age
  if (age.trim() === "") {
    isValid = false;
    AgeError.textContent = "Age is required";
  } else if (isNaN(age)) {
    isValid = false;
    AgeError.textContent = "Age not valid";
  } else if (parseInt(age) < 18) {
    isValid = false;
    AgeError.textContent = "Age must be above 18 ";
  }

//   fee
  if (fee === "") {
    isValid = false;
    FeeError.textContent = "Fee is required";
  }else if (isNaN(fee)) {
    isValid = false;
    FeeError.textContent = "Fee not valid";
  } else if (parseInt(fee) !== 20000) {
    isValid = false;
    FeeError.textContent = "Please enter correct fee detail ";
  }



if(isValid){
    alert('Form submitted successfully')
}

});
