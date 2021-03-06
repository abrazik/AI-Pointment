console.log("loaded signup");

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("You clicked me!");


  const first_name = document.querySelector('#first_name').value.trim();
  console.log(first_name);
  const last_name = document.querySelector('#last_name').value.trim();
  console.log(last_name);
  const email = document.querySelector('#email').value.trim();
  console.log(email);
  const password = document.querySelector('#password').value.trim();
  console.log(password);

  if (first_name && last_name && email && password) {

    const response = await fetch('/api/v1/auth/signup/', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
};

window.onload = function () {
  console.log("loaded function signup");
  document
    .querySelector("#signup")
    .addEventListener("click", signupFormHandler);
}

