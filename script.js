// variable
let signBtn = document.querySelector('.signBtn');
let logBtn = document.querySelector('.logBtn');
let title = document.querySelector('.title');
let fnameInput = document.querySelector('.firstNameInput');
let lnameInput = document.querySelector('.lastNameInput');
let resetBtn = document.querySelector('.reset-password');
let forgetPassword = document.querySelector('.forget-password');
let password = document.querySelector('.password');
let confirmPassword = document.querySelector('.password-confirm');


// log in button
logBtn.addEventListener('click', () => {

	title.textContent = "Sign In";
	fnameInput.classList.add('remove');
	lnameInput.classList.add('remove');
	logBtn.classList.remove('disable');
	password.style.maxHeight = "65px"
	signBtn.classList.add('disable');
	confirmPassword.classList.add('remove');
	forgetPassword.style.display = "block"
	resetBtn.style.display = "none"



});


// sign in button
signBtn.addEventListener('click', () => {
	title.textContent = "Create Account";
	fnameInput.classList.remove('remove');
	lnameInput.classList.remove('remove');
	logBtn.classList.add('disable');
	signBtn.classList.remove('disable');
	confirmPassword.classList.remove('remove');
	forgetPassword.style.display = "block"
	resetBtn.style.display = "none"




});

// forget password
forgetPassword.addEventListener('click', () => {
	title.textContent = "Reset Password";
	fnameInput.classList.add('remove');
	password.style.maxHeight = "0"
	lnameInput.classList.add('remove');
	confirmPassword.classList.add('remove');
	logBtn.classList.add('disable');
	signBtn.classList.add('disable');
	forgetPassword.style.display = "none"
	resetBtn.style.display = "block"
});



// AuthentiQ-Code