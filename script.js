// Open Login Form Popup
function openLoginForm() {
    document.getElementById('loginFormPopup').style.display = 'block';
}

// Close Login Form Popup
function closeLoginForm() {
    document.getElementById('loginFormPopup').style.display = 'none';
}

// Open Create Account Form Popup
function openCreateAccountForm() {
    document.getElementById('createAccountPopup').style.display = 'block';
    closeLoginForm();
}

// Close Create Account Form Popup
function closeCreateAccountForm() {
    document.getElementById('createAccountPopup').style.display = 'none';
}

// Open Forgot Password Form Popup
function openForgotPasswordForm() {
    document.getElementById('forgotPasswordPopup').style.display = 'block';
    closeLoginForm();
}

// Close Forgot Password Form Popup
function closeForgotPasswordForm() {
    document.getElementById('forgotPasswordPopup').style.display = 'none';
}

// Open Job Description Form Popup (after successful login)
function openJobDescriptionForm() {
    document.getElementById('jobDescriptionPopup').style.display = 'block';
    closeLoginForm();
}

// Close Job Description Form Popup
function closeJobDescriptionForm() {
    document.getElementById('jobDescriptionPopup').style.display = 'none';
}

// Handle Job Description Form Submission
document.getElementById('jobDescriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Job Description Submitted Successfully!');
    closeJobDescriptionForm();
});

// Simulate Login Process (redirect to job description form)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here, you'd typically check credentials
    openJobDescriptionForm();  // After successful login, open job description form
});


// Handle Job Description Form Submission
function submitJobDescription(event) {
    event.preventDefault(); // Prevent default form submission
    // Here you can handle form data if needed

    // Redirect to the field selection page
    window.location.href = 'field-selection.html'; // Change this to the actual path of your field selection page
}



document.getElementById('fieldSelectionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedField = document.getElementById('interviewField').value;
    window.location.href = `interviewPage.html?field=${selectedField}`;
});

/*audio*/
let questions = [
    "What is your greatest strength?",
    "Why do you want to work for this company?",
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 30;

function playQuestion() {
    let question = questions[currentQuestionIndex];
    let speech = new SpeechSynthesisUtterance(question);
    window.speechSynthesis.speak(speech);
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 30; // Reset time
    document.getElementById("timer").innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! Please record your answer.");
            // Automatically submit or move to the next question if needed
        }
    }, 1000);
}

function startRecording() {
    // Use the Web Speech API or another method to record the answer
    alert("Recording answer... (this needs to be implemented)");
}

function submitInterview() {
    // Process answers and redirect to feedback page
    alert("Interview submitted! Redirecting to feedback page...");
    window.location.href = 'feedback.html'; // Change to your feedback page URL
}
