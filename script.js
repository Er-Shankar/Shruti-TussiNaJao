function startInteractive() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('interactive').style.display = 'block';
}

function chooseOption(option) {
    document.getElementById('interactive').style.display = 'none';

    if (option === 'riddle1') {
        window.correctAnswer = 'memory';
    } else if (option === 'riddle2') {
        window.correctAnswer = 'joke';
    } else if (option === 'riddle3') {
        window.correctAnswer = 'love';
    }

    // Display the themed correct answer section if the answer is correct
    document.getElementById('correct-answer').style.display = 'block';
}

function checkAnswer() {
    const userAnswer = document.getElementById('riddle-answer').value.toLowerCase();

    if (userAnswer === window.correctAnswer) {
        document.getElementById('interactive').style.display = 'none';
        document.getElementById('correct-answer').style.display = 'block';
    } else {
        alert("Oops! Try again.");
    }
}


// Function to open the interactive page in a new tab
function openInteractivePage() {
    window.open('interactive.html', '_blank');
}

// Function to open each card's content in a new tab
function openCardPage(page) {
    window.open(page, '_blank');
}
