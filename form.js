let email = document.querySelector('#username');
let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm');
let form = document.querySelector('form');
let emailtxt = document.querySelector('.small-text');
let text = document.querySelector('.text');
let first = document.querySelector('#firstName');
let last = document.querySelector('#lastName');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const emailRegex = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d\S]{8,}$/;
  let isValid = true;

  let emailValid = emailRegex.test(email.value.trim());
  let passwordValid = passRegex.test(password.value.trim());
  let confirmValid = password.value.trim() === confirm.value.trim();

  if (!emailValid) {
    emailtxt.textContent = 'Please enter a valid email address.';
    emailtxt.style.color = 'red';
    isValid = false;
  } else {
    emailtxt.textContent = 'You can use letters, numbers & periods'; 
    emailtxt.style.color = '#155';
    isValid = true;
    // clear error
  }
   if (!passwordValid) {
    text.style.color = 'red';
    isValid = false;
  } else if (!confirmValid) {
    text.textContent = 'Passwords do not match.';
    text.style.color = 'red';
    isValid = false;
  } else {
    text.style.color = '#155';
    isValid = true;
  }

    if (isValid) {
    email.value = '';
    password.value = '';
    first.value = '';
    last.value = '';
    confirm.value = '';
    emailtxt.textContent = 'You can use letters, numbers & periods'; 
    text.textContent = 'Use 8 or more characters with a mix of letters, numbers & symbols';
    alert('Form submitted successfully!');
    }
});