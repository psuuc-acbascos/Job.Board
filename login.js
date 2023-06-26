
function validateForm() {
  // Fetching input field values
  var firstName = document.getElementById('firstName').value;
  var middleName = document.getElementById('middleName').value;
  var lastName = document.getElementById('lastName').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var country = document.getElementById('country').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
 
  
   // Regular expression for checking valid characters (letters only)
   var lettersRegex = /^[A-Za-z]+$/;

   // Validating the fields
   if (firstName === '' || !firstName.match(lettersRegex)) {
     alert('Please enter a valid first name.');
     return false;
   }
 
   if (middleName === '' || !middleName.match(lettersRegex)) {
     alert('Please enter a valid middle name.');
     return false;
   }
 
   if (lastName === '' || !lastName.match(lettersRegex)) {
     alert('Please enter a valid last name.');
     return false;
   }
 
   if (username === '') {
     alert('Please enter a valid username.');
     return false;
   }

   if (email === '') {
    alert('Please enter a valid email address.');
    return false;
  } else if (!email.includes('@gmail.com')) {
    alert('Email address must contain "@gmail.com".');
    return false;
  }  

  if (address === '') {
    alert('Please enter a valid address.');
    return false;
  }

  if (country === '') {
    alert('Please select a valid country.');
    return false;
  }

  if (state === '') {
    alert('Please provide a valid state.');
    return false;
  }

  if (zip === '') {
    alert('Please enter a valid zip code.');
    return false;
  }
    return true;
    
}

// Attaching the validateForm function to the form's submit event
document.getElementById('register').addEventListener('click', function(event) {
  event.preventDefault();
  if (validateForm()) {
    // Form submission can be performed here
    alert('Form submitted successfully!');
    window.location.href = 'Login.html';
  }
});

