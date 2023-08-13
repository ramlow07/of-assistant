const feedbackContainer = document.querySelector('.feedback-container')
const feedbackElements = document.querySelectorAll('.feedback')

let currentFeedbackIndex = 0;

function showFeedback(index) {
    feedbackContainer.style.transform = `translateX(-${index * 100}%)`;

}

function nextFeedback(){
    currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackElements.length;
    showFeedback(currentFeedbackIndex);
}

setInterval(nextFeedback, 5000); // auto-switch every 5 seconds
