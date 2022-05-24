//quiz class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.index = 0;
    }
    getQuestionByIndex() {
        return this.questions[this.index];
    }
    checkForCorrectAnswer(answer) {
        let question = this.getQuestionByIndex();
        if (question.isCorrectAnswer(answer)) {
            this.score++;
        }
        this.index++;
    }
    isEnded() {
        return this.index === this.questions.length;
    }
}

//Question class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(selectedChoice) {
        return this.answer === selectedChoice;
    }
}

//questions
const quizQuestions = 
[
    new Question (
        "What is the capital of India?",
        ["Mumbai", "Bangalore", "New Delhi", "Calcutta"],
        "New Delhi"
    ),
    new Question (
        "What is the capital of Brazil?",
        ["Rio de Janeiro", "Sao Paolo", "Porto Alegre", "Brasilia"],
        "Brasilia"
    ),
    new Question (
        "What is the capital of Italy?",
        ["Rome", "Milan", "Bologna", "Florence"],
        "Rome"
    ),
    new Question (
        "What is the capital of Pakistan?",
        ["Hyderabad", "Islamabad", "Lahore", "Rawalpindi"],
        "Islamabad"
    ),
    new Question (
        "What is the capital of China?",
        ["Beijing", "Shanghai", "Wuxi", "Shenzhen"],
        "Beijing"
    ),
    new Question (
        "What is the capital of Australia?",
        ["Sydney", "Melbourne", "Canberra", "Perth"],
        "Canberra"
    ),
    new Question (
        "What is the capital of Argentina?",
        ["Salta", "Rosario", "Mendonza", "Buenos Aires"],
        "Buenos Aires"
    ),
    new Question (
        "What is the capital of England?",
        ["Birmingham", "Liverpool", "London", "Manchester"],
        "London"
    ),
    new Question (
        "What is the capital of France?",
        ["Nice", "Paris", "Marseille", "Lyon"],
        "Paris"
    ),
    new Question (
        "What is the capital of Portugal",
        ["Porto", "Coimbra", "Braga", "Lisbon"],
        "Lisbon"
    )
];



function loadQuestions(){
    if(quiz.isEnded()){
        console.log("quiz not ended");
        showFinalScores();
        return;
    }

    //display the question
    let currentQuestion = quiz.getQuestionByIndex();
    console.log(currentQuestion);
    let questionElement = document.getElementById('question');
    questionElement.innerHTML = currentQuestion.text;

    //display the answers
    let displayedChoices = currentQuestion.choices;
    for(let i= 0; i<displayedChoices.length; i++){
        let eachChoiceElement = document.getElementById('choice'+i);
        eachChoiceElement.innerHTML = displayedChoices[i];

        let eachChoiceBtn = document.getElementById('btn'+i);
        eachChoiceBtn.onclick = function(){
            quiz.checkForCorrectAnswer(displayedChoices[i]);
            loadQuestions();
        }
    }

    showProgress();

}

let quiz = new Quiz(quizQuestions);
loadQuestions();

function showProgress(){
    let questionNumber = quiz.index + 1;
    let progressElement = document.getElementById('progress');
    progressElement.innerHTML = `Question ${questionNumber} of ${quiz.questions.length}`;
}

function showFinalScores(){
    let resultPercent = (quiz.score / quizQuestions.length) * 100;
    let scoresHTML = `
        <h1>Results...</h1>
        <h2 id="score">Your score is: ${quiz.score}</h2>
        <h2>Overall percentage is: ${resultPercent}</h2>
        <h1>Congratulations!</h1>
    `;

    let quizCanvas = document.getElementById('quiz');
    quizCanvas.innerHTML = scoresHTML;
}