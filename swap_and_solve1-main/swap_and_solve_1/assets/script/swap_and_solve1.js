function signup() {
    // Read input values
    const username = document.getElementById('Username').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    // Save user details (you can use a backend or localStorage for more persistence)
    // For simplicity, we'll just store the details in localStorage
    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);

    // Hide the signup form
    document.getElementById('signupForm').style.display = 'none';

    // Display welcome message
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.display = 'block';
    document.getElementById('displayUsername').innerText = username;
}
