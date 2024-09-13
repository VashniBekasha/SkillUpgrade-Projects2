document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Clear previous errors
    clearErrors();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate form inputs
    let isValid = true;

    if (username.length < 3) {
        displayError('usernameError', 'Username must be at least 3 characters long.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        displayError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (isValid) {
        // If form is valid, show success message and clear the form
        document.getElementById('result').textContent = 'Form submitted successfully!';
        document.getElementById('signupForm').reset();
    } else {
        document.getElementById('result').textContent = '';
    }
});

// Function to display error message
function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Function to clear error messages
function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}