//Card const
const cardDisabled = document.querySelector("#quiz-card-container");
const scrumQuiz = document.querySelector(".scrum-quiz");
const kanbanQuiz = document.querySelector(".kanban-quiz");
const productQuiz = document.querySelector(".product-quiz");
// Rule box const
const ruleBox = document.querySelector(".rule-box");
const ruleTitle = document.querySelector(".rule-title");
const startQuiz = document.querySelector(".start");
const exitQuiz = document.querySelectorAll(".quit");
//Quiz box const
const quizBox = document.querySelector(".quiz-container");
const timerCount = document.querySelector(".timer .timer-number");
const quizBackground = document.querySelector(".quiz-bg");
const questionTitle = document.querySelector(".question-category");
const choiceList = document.querySelector(".choice-list");
const nextButton = document.querySelector(".next-btn");
const choiceContainer = document.querySelector(".choice-container");
// Result Box const
const resultBox = document.querySelector(".result-box");
const resultScore = document.querySelector(".score");
const trainingButton = document.getElementById("training-button")
//Variables
let quizCard = "none"; // stores which card the user clicked
let questions; // variable used to get the right question array. depending on user click
let questionCounter = 0; // used to iterate through the questions
let questionNumber = 1; // Variable used t display question in the footer
let score = 0; // Used to display the quiz score
let timerCounter;
let timeValue = 60;

[
  [scrumQuiz, "Scrum"],
  [kanbanQuiz, "Kanban"],
  [productQuiz, "Product"], //Array to get questions depending on card click
].forEach(
  (item) =>
    (item[0].onclick = () => {
      quizCard = item[1];
      cardDisabled.classList.add("disabled"); // disable the card section
      let titleChange = `<p> Rules of this ${item[1]} Quiz</p>`;
      ruleTitle.innerHTML = titleChange;
      ruleBox.classList.add("active-box"); // show rule box
      if (quizCard === "Scrum") { //depending on card change button- and text colors
        document.querySelector(".text-color").classList.add("scrum-text");
        document.querySelector(".quit").classList.add("scrum");
        document.querySelector(".start").classList.add("scrum");
      } else if (quizCard === "Kanban") { //depending on card change button- and text colors
        document.querySelector(".text-color").classList.add("kanban-text");
        document.querySelector(".quit").classList.add("kanban");
        document.querySelector(".start").classList.add("kanban");
      } else if (quizCard === "Product") { //depending on card change button- and text colors
        document.querySelector(".text-color").classList.add("product-text");
        document.querySelector(".quit").classList.add("product");
        document.querySelector(".start").classList.add("product");
      }
    })
);

startQuiz.onclick = () => {
  if (quizCard === "Scrum") { //depending on card change next button background-color
    document.querySelector(".next-btn").classList.add("scrum");
  } else if (quizCard === "Kanban") {//depending on card change next button background-color
    document.querySelector(".next-btn").classList.add("kanban");
  } else if (quizCard === "Product") {//depending on card change next button background-color
    document.querySelector(".next-btn").classList.add("product");
  }
  ruleBox.classList.remove("active-box");// rule box will disappear
  quizBox.classList.add("active-box");// display quiz
  quizBackground.classList.add("active-box");// change background
  inputQuestions(0);// put in the first question from question.js
  questionFooter(1); // calls function and shows that first question is displayed in footer
  startTimer(60); // start timer with 60s
};

exitQuiz.forEach( //each button with class "quit" will send the user to quiz.html"
  (item) =>
    (item.onclick = () => {
      window.location.href = "quiz.html";
    })
);
/*
the inputQuestion function checks which card was 
clicked and depending on that select the right variable from question.js. 
*/
function inputQuestions(i) {
  if (quizCard === "Scrum") {
    questions = scrumQuestions;
    questionTitle.classList.add("scrum-text");
  } else if (quizCard === "Kanban") {
    questions = kanbanQuestions;
    questionTitle.classList.add("kanban-text");
  } else if (quizCard === "Product") {
    questions = productQuestions;
    questionTitle.classList.add("product-text");
  }

  const questionName = document.querySelector(".question-name");
  let questionInput = //used to store the question from question.js
    "<h1>" + questions[i].numb + ". " + questions[i].question + "</h1>"; 
    
  let optionInput =//used to store the options from question.js
    '<div class="choice-container ' +
    questions[i].category.toLowerCase() +
    '"><p class="choice-text">' +
    questions[i].options[0] +
    "</p></div>" + // get options from question array
    '<div class="choice-container ' +
    questions[i].category.toLowerCase() +
    '"><p class="choice-text">' +
    questions[i].options[1] +
    "</p></div>" + // get options from question array
    '<div class="choice-container ' +
    questions[i].category.toLowerCase() +
    '"><p class="choice-text">' +
    questions[i].options[2] +
    "</p></div>" + // get options from question array
    '<div class="choice-container ' +
    questions[i].category.toLowerCase() +
    '"><p class="choice-text">' +
    questions[i].options[3] +
    "</p></div>";

  questionName.innerHTML = questionInput; //used to display the question from question.js
  choiceList.innerHTML = optionInput; //used to display the options from question.js
  questionTitle.innerHTML = questions[i].category;//used to show which quiz the user currently plays

  const option = choiceList.querySelectorAll(".choice-container");

  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }// allows user to select an option via click, calls optionSelected fucntion
}
/*
optionSelected function stores the selected user option in the userAnswer variable
and checks if it matches the correctAnswer variable provided by question.js
*/
function optionSelected(answer) {
  clearInterval(timerCounter); // restart the timer
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCounter].answer;

  const allOptions = choiceList.children.length; // targets all options

  if (userAnswer === correctAnswer) {
    score += 1;
    answer.classList.add("correct"); // changes this option background color to green
  } else {
    answer.classList.add("false");//changes this option background color to red

    for (let x = 0; x < allOptions; x++) {
      if (choiceList.children[x].textContent === correctAnswer) {
        choiceList.children[x].setAttribute(
          "class",
          "choice-container correct"
        );//if the user selects the wrong option, the right option will be displayed with a green background
      }
    }
  }
  for (let x = 0; x < allOptions; x++) {
    choiceList.children[x].classList.add("disabled");
  }// disable click events for the options
  nextButton.style.display = "block";
}// make the next button visible, after user selects answer. 
nextButton.onclick = () => {
  if (questionCounter < questions.length - 1) {
    questionCounter++;//used to get questions from question.js
    questionNumber++;//used to update question number in the footer
    clearInterval(timerCounter); // timer reset
    inputQuestions(questionCounter);// shows next question
    questionFooter(questionNumber);//update question footer
    startTimer(timeValue);// start timer
    nextButton.style.display = "none"; //button is hidden again
  } else {
    showResult(); // function is called when the user finished the 10 questions
  }
};

function questionFooter(questionTotal) {
  const question_counter = document.querySelector(".total"); //select the class "total"
  let totalQuestionTag = 
  `<p>${questionTotal} of ${questions.length} Questions</p> `;//creates a paragraph with information of which question is currently played and the total amount of questions
  question_counter.innerHTML = totalQuestionTag;// update the html of the "total" class
}

function startTimer(time) {
  timerCounter = setInterval(timer, 1000);

  function timer() {
    timerCount.textContent = time;
    time--; //decrease of timer

    if (time < 9) {
      let addZero = timerCount.textContent;
      timerCount.textContent = "0" + addZero; // add a 0 when timer is in single digits
    }
    if (time < 0) {
      clearInterval(timerCounter);// stop the timer
      timerCount.textContent = "00";
      const allChoices = choiceList.children.length; // get options items
      let correcAns = questions[questionCounter].answer; // correct answer from questions array

      for (let i = 0; i < allChoices; i++) {
        if (choiceList.children[i].textContent == correcAns) {
          // match option to correct answer
          choiceList.children[i].setAttribute(
            "class",
            "choice-container correct"
          ); // adding green color answer
        }
      }
      for (let i = 0; i < allChoices; i++) {
        choiceList.children[i].classList.add("disabled"); // disable all options
      }
      nextButton.style.display = "block";
    }
  }
}

function showResult() {
  resultScore;
  quizBox.classList.remove("active-box");//hide quiz box
  quizBackground.classList.remove("active-box");//remove quiz background
  resultBox.classList.add("active-box");// show result box
  if (quizCard === "Scrum") {
    document.querySelector(".other-quiz").classList.add("scrum");
  } else if (quizCard === "Kanban") {
    document.querySelector(".other-quiz").classList.add("kanban");
  } else if (quizCard === "Product") {
    document.querySelector(".other-quiz").classList.add("product");
  }

  if (score < 3) {
    let scoreTag =
     `<p>You scored <span>${score}</span> out of <span>${questions.length}
     </span> questions.</p><p>Maybe check out our ${questions[0].category}
      beginner training to learn the basics!</p>`;
    resultScore.innerHTML = scoreTag;
  } else if (score < 6 && score >= 3) {
    let scoreTag = `<p>You scored <span>${score}</span> out of <span>${questions.length}
    </span> questions.</p><p>Maybe check out our ${questions[0].category}
     advanced training to learn even more!</p>`;
    resultScore.innerHTML = scoreTag;
  } else if (score < 10 && score >= 6) {
    let scoreTag = `<p>You scored <span>${score}</span> out of <span>${questions.length}
    </span> questions.</p><p>Maybe check out our ${questions[0].category}
     masterclass training and bring your knowledge to the next level!</p>`;
    resultScore.innerHTML = scoreTag;
  } else {
    let scoreTag = `<p>Wow you scored <span>${score}</span> out of <span>${questions.length}
    </span> questions.</p><p>That's a perfect score!</p>`;
    resultScore.innerHTML = scoreTag;
  }
}
trainingButton.onclick = function () {
        location.href = "contact.html"; // send user on click to the training page (contact.html)
    };
