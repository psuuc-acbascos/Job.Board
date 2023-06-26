// Get form elements
const form = document.querySelector('.needs-validation');
const firstNameInput = document.getElementById('firstName');
const middleNameInput = document.getElementById('middleName');
const lastNameInput = document.getElementById('lastName');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const countryInput = document.getElementById('country');
const stateInput = document.getElementById('state');
const zipInput = document.getElementById('zip');
const aboutInput = document.getElementById('myTextArea');

// Add submit event listener to the form
form.addEventListener('submit', function (event) {
  // Prevent form submission if validation fails
  if (!validateForm()) {
    event.preventDefault();
  }
});

// Validate form inputs
function validateForm() {
  let isValid = true;

  // Validate first name
  if (!isValidName(firstNameInput.value)) {
    firstNameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    firstNameInput.classList.remove('is-invalid');
  }

  // Validate middle name
  if (!isValidName(middleNameInput.value)) {
    middleNameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    middleNameInput.classList.remove('is-invalid');
  }

  // Validate last name
  if (!isValidName(lastNameInput.value)) {
    lastNameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    lastNameInput.classList.remove('is-invalid');
  }

  // Validate username
  if (!isValidUsername(usernameInput.value)) {
    usernameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    usernameInput.classList.remove('is-invalid');
  }

  // Validate email
  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('is-invalid');
    isValid = false;
  } else {
    emailInput.classList.remove('is-invalid');
  }

  // Validate address
  if (addressInput.value.trim() === '') {
    addressInput.classList.add('is-invalid');
    isValid = false;
  } else {
    addressInput.classList.remove('is-invalid');
  }

  // Validate country
  if (countryInput.value === '') {
    countryInput.classList.add('is-invalid');
    isValid = false;
  } else {
    countryInput.classList.remove('is-invalid');
  }

  // Validate state
  if (stateInput.value === '') {
    stateInput.classList.add('is-invalid');
    isValid = false;
  } else {
    stateInput.classList.remove('is-invalid');
  }

  // Validate zip
  if (!isValidZip(zipInput.value)) {
    zipInput.classList.add('is-invalid');
    isValid = false;
  } else {
    zipInput.classList.remove('is-invalid');
  }

  // Validate about yourself
  if (aboutInput.value.trim() === '') {
    aboutInput.classList.add('is-invalid');
    isValid = false;
  } else {
    aboutInput.classList.remove('is-invalid');
  }

  return isValid;
}

// Helper function to validate name inputs
function isValidName(value) {
  return /^[A-Za-z\s]+$/.test(value);
}

// Helper function to validate username
function isValidUsername(value) {
  return value.length >= 8;
}

// Helper function to validate email
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test
}

// Helper function to validate zip
function isValidZip(value) {
  return /^\d{4}$/.test(value);
}