function signup() {
    // Read input values
    const username = document.getElementById('Username').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    // Save user details
    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);

    // Hide the signup form
    document.getElementById('signupForm').style.display = 'none';

    // Display welcome message
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.display = 'block';
    document.getElementById('displayUsername').innerText = username;
}

function login() {
    // Check if the entered username is "adm"
    var username = document.getElementById('Username').value;
    if (username === "adm") {
        // Attempt "adm" mode with 3 password chances
        let chances = 3;
        while (chances > 0) {
            var enteredPassword = prompt("Enter your password (You have " + chances + " chances remaining):");
            if (enteredPassword === "123") {
                // Correct password, redirect to index.html
                window.location.href = 'index.html';
                return; // Exit the function after successful login
            } else if (enteredPassword === "hacker") {
                // User inputs "hacker" to break the loop
                break; // Exit the loop
            } else {
                // Incorrect password, decrement chances
                chances--;
                continue; // Skip the rest of the loop and move to the next iteration
            }
        }
        // If chances are zero or "hacker" was entered, display a message
        if (chances === 0) {
            alert("You have run out of chances. Please try again later.");
        } else {
            alert("Hacker detected. Access denied."); // Alert if "hacker" is entered
        }
    } else {
        // Regular login process
        var storedUsername = localStorage.getItem('Username');
        
        if (storedUsername && storedUsername === username) {
            // Account exists, show welcome message
            const welcomeMessage = document.getElementById('welcomeMessage');
            welcomeMessage.style.display = 'block';
            document.getElementById('displayUsername').innerText = username;
            
        } else {
            // Account doesn't exist, display an error message
            alert('Account not found. Please sign up first.');
        }
    }
}




