function startInteractive() {
    // Hide the home section and show the interactive section
    document.getElementById('home').style.display = 'none';
    document.getElementById('interactive').style.display = 'block';
}

function chooseOption(option) {
    // Hide the interactive section and show the riddle section
    document.getElementById('interactive').style.display = 'none';
    document.getElementById('riddle').style.display = 'block';

    // Set riddle text based on the chosen option
    if (option === 'riddle1') {
        document.getElementById('riddle-text').innerText = 'What has keys but can’t open locks?';
        window.correctAnswer = 'keyboard';
    } else if (option === 'riddle2') {
        document.getElementById('riddle-text').innerText = 'What has to be broken before you can use it?';
        window.correctAnswer = 'egg';
    } else if (option === 'riddle3') {
        document.getElementById('riddle-text').innerText = 'I’m tall when I’m young, and I’m short when I’m old. What am I?';
        window.correctAnswer = 'candle';
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('riddle-answer').value.toLowerCase();
    const feedback = document.getElementById('answer-feedback');

    if (userAnswer === window.correctAnswer) {
        feedback.innerText = "Correct! Here's your video message.";
        document.getElementById('riddle').style.display = 'none';
        document.getElementById('video-message').style.display = 'block';
    } else {
        feedback.innerText = 'Oops! Try again.';
    }
}
