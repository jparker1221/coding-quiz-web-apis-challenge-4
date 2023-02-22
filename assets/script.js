// questions array
var questionsArray = [
{ 
  question: "Commonly used data types DO NOT include:",
  choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  answer: "3. alerts"
},
{
  question: "The condition in an if / else statement is enclosed with ____.",
  choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
  answer: "3. parenthesis"
},
{
  question: "Arrays in JavaScript can be used to store:",
  choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
  answer: "4. all of the above"
},
{
  question: "String values must be enclosed in ____ when being assigned to variables.",
  choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. commas"],
  answer: "1. quotes"
},
{
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
  answer: "4. console.log"
},
];

// Selectors
var timerEl = document.getElementById('countdown');
var startQuizEl = document.getElementById('start');
var questionEl = document.getElementById('question');
var choicesEl = document.getElementById('choices');
var checkAnswerEl = document.getElementById('checkAnswer');
var startEl = document.querySelector('.start');
var button0 = document.getElementById('choice0');
var button1 = document.getElementById('choice1');
var button2 = document.getElementById('choice2');
var button3 = document.getElementById('choice3');

// variables
var timeInterval;
var currentIndex = 0;

// quiz timer
function countdown() {
  var timeLeft = 75;
  timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft;
    timeLeft--;
    if(timeLeft <= 0) {
    clearInterval(timeInterval);
    }
  }, 1000);
}

function renderQuestion() {
  questionEl.textContent = questionsArray[currentIndex].question;

  questionsArray[currentIndex].choices.forEach(function(choice,index){
    var choiceBtn = document.getElementById('choice'+index);
    choiceBtn.textContent = choice;
    choiceBtn.setAttribute("value",choice);
  })
}

function checkAnswer(event) {
  var userAnswer = event.target.textContent
  var correctAnswer = questionsArray[currentIndex].answer;
    if (userAnswer == correctAnswer) {
        checkAnswerEl.textContent = "Correct!"
        currentIndex++;
        renderQuestion()
    } else {
        checkAnswerEl.textContent = "Wrong!"
        currentIndex++;
        renderQuestion()
    }
}

// event listeners for buttons
startQuizEl.addEventListener('click', function() {
    countdown();
    renderQuestion();
    startEl.setAttribute("class","hide");
});

button0.addEventListener('click',checkAnswer);
button1.addEventListener('click',checkAnswer);
button2.addEventListener('click',checkAnswer);
button3.addEventListener('click',checkAnswer);