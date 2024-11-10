function startInteractive() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('interactive').style.display = 'block';
}

function chooseOption(option) {
    document.getElementById('interactive').style.display = 'none';
    document.getElementById('riddle').style.display = 'block';

    if (option === 'riddle1') {
        document.getElementById('riddle-text').innerText = 'I am something you can’t see, but when I’m around, you’ll never forget me. What am I?';
        window.correctAnswer = 'memory';
    } else if (option === 'riddle2') {
        document.getElementById('riddle-text').innerText = 'What can make you laugh even when you’re down, and is often shared with friends?';
        window.correctAnswer = 'joke';
    } else if (option === 'riddle3') {
        document.getElementById('riddle-text').innerText = 'I am a feeling that lasts forever, and I grow stronger as time goes on. What am I?';
        window.correctAnswer = 'love';
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('riddle-answer').value.toLowerCase();
    const feedback = document.getElementById('answer-feedback');

    if (userAnswer === window.correctAnswer) {
        feedback.innerText = "Correct! Here’s your video message.";
        document.getElementById('riddle').style.display = 'none';
        document.getElementById('video-message').style.display = 'block';
    } else {
        feedback.innerText = 'Oops! Try again.';
    }
}
