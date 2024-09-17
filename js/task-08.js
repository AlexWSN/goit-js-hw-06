const loginForm = document.querySelector(".login-form");

const handleFormSubmit = (event) => {
  event.preventDefault(); 

  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All fields must be filled!");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  loginForm.reset(); 
};

loginForm.addEventListener("submit", handleFormSubmit);

