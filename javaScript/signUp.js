var passwordInput = document.getElementById('userPassword');

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    document.querySelector('.toggle-password').classList.add('show-password');
  } else {
    passwordInput.type = 'password';
    document.querySelector('.toggle-password').classList.remove('show-password');
  }
}

function checkPasswordMatch(){
  var password = document.getElementById('password')
  var passwordConfirmation = document.getElementById('passwordConfirmation')

  if (password != passwordConfirmation.value)  {
    document.getElementById('passwordError').innerHTML = "Password didn't matched";
  }
  else{
    document.getElementById('passwordError').innerHTML = " ";
  }  

  
}
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("userPassword");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}