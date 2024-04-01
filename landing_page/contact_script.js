document.getElementById('submit-btn').addEventListener('click', function() {
    // Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate form inputs (you can add additional validation if needed)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    } else {
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
        // Reset form inputs after successful submission (optional)
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});
