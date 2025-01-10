
const personalForm = document.getElementById('personalForm');
const emailForm = document.getElementById('emailForm');
const mobileForm = document.getElementById('mobileForm');


const personalEditBtn = document.getElementById('editButton');
const personalSaveBtn = document.querySelector('#personalForm #saveButton');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const genderInputs = document.querySelectorAll('input[name="gender"]');

const emailEditBtn = document.querySelector('#emailForm button[type="button"]');
const emailSaveBtn = document.querySelector('#emailForm #saveButton');
const emailInput = document.querySelector('#emailForm input[type="email"]');

const mobileEditBtn = document.querySelector('#mobileForm button[type="button"]');
const mobileSaveBtn = document.querySelector('#mobileForm #saveButton');
const mobileInput = document.querySelector('#mobileForm input[type="number"]');

// Utility functions
function enableInputs(inputs) {
    inputs.forEach(input => {
        input.disabled = false;
        input.classList.remove('bg-gray-50');
        input.classList.add('bg-white');
    });
}

function disableInputs(inputs) {
    inputs.forEach(input => {
        input.disabled = true;
        input.classList.add('bg-gray-50');
        input.classList.remove('bg-white');
    });
}

function resetSections() {
    // Disable all inputs and hide all save buttons
    disableInputs([firstName, lastName, ...genderInputs]);
    personalSaveBtn.classList.add('hidden');

    disableInputs([emailInput]);
    emailSaveBtn.classList.add('hidden');

    disableInputs([mobileInput]);
    mobileSaveBtn.classList.add('hidden');
}

// Personal Information Edit/Save
personalEditBtn.addEventListener('click', () => {
    resetSections();
    enableInputs([firstName, lastName, ...genderInputs]);
    personalSaveBtn.classList.remove('hidden');
    personalSaveBtn.disabled = false;
    firstName.focus();
});

personalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedGender = document.querySelector('input[name="gender"]:checked')?.value;

    const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        gender: selectedGender
    };

    console.log('Saving personal information:', formData);
    resetSections();
});

// Email Edit/Save
emailEditBtn.addEventListener('click', () => {
    resetSections();
    enableInputs([emailInput]);
    emailSaveBtn.classList.remove('hidden');
    emailSaveBtn.disabled = false;
    emailInput.focus();
});

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Saving email:', emailInput.value);
    resetSections();
});

// Mobile Edit/Save
mobileEditBtn.addEventListener('click', () => {
    resetSections();
    enableInputs([mobileInput]);
    mobileSaveBtn.classList.remove('hidden');
    mobileSaveBtn.disabled = false;
    mobileInput.focus();
});

mobileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Saving mobile:', mobileInput.value);
    resetSections();
});

// Initialize all inputs on page load
resetSections();
