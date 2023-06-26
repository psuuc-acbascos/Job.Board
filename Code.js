// Get the email and password input elements
var emailInput = document.querySelector('input[type="email"]');
var passwordInput = document.querySelector('input[type="password"]');

// Get the login button
var loginButton = document.querySelector('.btn-primary');

// Add click event listener to the login button
loginButton.addEventListener('click', function(event) {
event.preventDefault(); // Prevent form submission

  // Get the entered email and password values
  var enteredEmail = emailInput.value;
  var enteredPassword = passwordInput.value;

 // Check if the entered credentials are correct
if (enteredEmail === 'Alvin@gmail.com' && enteredPassword === 'sheesh') {
  // Redirect to the dashboard page
  window.location.href = 'Dashboard.html';
} else if (enteredEmail === '' && enteredPassword === '') {
  // Show error message
  alert('Email and password are blank. Please fill them up.');
} else if (enteredEmail === '') {
  // Show error message
  alert('You have to enter a username.');
} else if (enteredPassword === '') {
  // Show error message
  alert('You have to enter a password.');
} else {
  // Show error message
  alert('Wrong username or password.');
  alert('Looks like you don\'t have an account yet. Please register first. ');
  window.location.href = 'Register.html';
}
});