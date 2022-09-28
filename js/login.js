document.getElementById('btn-submit').addEventListener('click', function () {
    // Get The Email Value From an Input
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // Get Password Value
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // DANGER: Veryfy Email and Password.
    if (email === 'user@email.com' && password === 'password') {
        location.href = '../bank.html'
    } else {
        location.href = '../index.html'
    }
})