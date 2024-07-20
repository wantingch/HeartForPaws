// This could be placed in a separate file if using modules, then imported here
function validateInput(input) {
    return input.trim().length > 0;
}

function createAlert(message) {
    alert(message);
}

function collectFormData() {
    const form = document.querySelector('.display');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('flname').value,
            email: document.getElementById('Email').value,
            gender: document.getElementById('Gender').value
        };

        processFormSubmission(formData);
    });
}

function processFormSubmission(formData) {
    const allFieldsFilled = Object.values(formData).every(validateInput);

    if (!allFieldsFilled) {
        createAlert('Please enter your information in all fields.');
    } else {
        createAlert('Thank you for your submission, ' + formData.name + '!');
        document.querySelector('.display').reset();
    }
}

document.addEventListener("DOMContentLoaded", collectFormData);
