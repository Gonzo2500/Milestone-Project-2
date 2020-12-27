//Card const
const cardDisabled = document.querySelector("#quiz-card-container");
const scrumQuiz = document.querySelector(".scrum-quiz");
const kanbanQuiz = document.querySelector(".kanban-quiz");
const productQuiz = document.querySelector(".product-quiz");
// rule box const
const ruleBox = document.querySelector(".rule-box");
const ruleTitle = document.querySelector(".rule-title");
const startQuiz = document.querySelector(".start");
const exitQuiz = document.querySelectorAll(".quit");
//quiz box const
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
//Variables
let quizCard = "none"; // stores which card the user clicked
let questions; // variable used to get the right question array. depending on user click
let questionCounter = 0; // used to iterate through the questions
let questionNumber = 1; // Variable used t display question in the footer
let score = 0; // Used to display the quiz score
let timerCounter;
let timeValue = 20;

[
  [scrumQuiz, "Scrum"],
  [kanbanQuiz, "Kanban"],
  [productQuiz, "Product"], //Array to get questions depending on card click
].forEach(
  (item) =>
    (item[0].onclick = () => {
      quizCard = item[1];
      cardDisabled.classList.add("disabled");
      let titleChange = `<p> Rules of this ${item[1]} Quiz</p>`;
      ruleTitle.innerHTML = titleChange;
      ruleBox.classList.add("active-box");
      if (quizCard === "Scrum") {
        document.querySelector(".text-color").classList.add("scrum-text");
        document.querySelector(".quit").classList.add("scrum");
        document.querySelector(".start").classList.add("scrum");
      } else if (quizCard === "Kanban") {
        document.querySelector(".text-color").classList.add("kanban-text");
        document.querySelector(".quit").classList.add("kanban");
        document.querySelector(".start").classList.add("kanban");
      } else if (quizCard === "Product") {
        document.querySelector(".text-color").classList.add("product-text");
        document.querySelector(".quit").classList.add("product");
        document.querySelector(".start").classList.add("product");
      }
    })
);

startQuiz.onclick = () => {
  if (quizCard === "Scrum") {
    document.querySelector(".next-btn").classList.add("scrum");
  } else if (quizCard === "Kanban") {
    document.querySelector(".next-btn").classList.add("kanban");
  } else if (quizCard === "Product") {
    document.querySelector(".next-btn").classList.add("product");
  }
  ruleBox.classList.remove("active-box");
  quizBox.classList.add("active-box");
  quizBackground.classList.add("active-box");
  inputQuestions(0);
  questionFooter(1);
  startTimer(20);
};

exitQuiz.forEach(
  (item) =>
    (item.onclick = () => {
      window.location.href = "quiz.html";
    })
);

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
  let questionInput =
    "<h1>" + questions[i].numb + ". " + questions[i].question + "</h1>";

  let optionInput =
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

  questionName.innerHTML = questionInput;
  choiceList.innerHTML = optionInput;
  questionTitle.innerHTML = questions[i].category;

  const option = choiceList.querySelectorAll(".choice-container");

  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  clearInterval(timerCounter);
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCounter].answer;

  const allOptions = choiceList.children.length; // targets all options

  if (userAnswer === correctAnswer) {
    score += 1;
    answer.classList.add("correct");
  } else {
    answer.classList.add("false");

    for (let x = 0; x < allOptions; x++) {
      if (choiceList.children[x].textContent === correctAnswer) {
        choiceList.children[x].setAttribute(
          "class",
          "choice-container correct"
        );
      }
    }
  }
  for (let x = 0; x < allOptions; x++) {
    choiceList.children[x].classList.add("disabled");
  }
  nextButton.style.display = "block";
}
nextButton.onclick = () => {
  if (questionCounter < questions.length - 1) {
    questionCounter++;
    questionNumber++;
    clearInterval(timerCounter); // timer reset
    inputQuestions(questionCounter);
    questionFooter(questionNumber);
    startTimer(timeValue);
    nextButton.style.display = "none";
  } else {
    showResult();
  }
};

function questionFooter(questionTotal) {
  const question_counter = document.querySelector(".total");
  let totalQuestionTag = `<span><p>${questionTotal}</p> of <p>${questions.length}</p> Questions</span>`;
  question_counter.innerHTML = totalQuestionTag;
}

function startTimer(time) {
  timerCounter = setInterval(timer, 1000);

  function timer() {
    timerCount.textContent = time;
    time--;

    if (time < 9) {
      let addZero = timerCount.textContent;
      timerCount.textContent = "0" + addZero; // add a 0 from 9
    }
    if (time < 0) {
      clearInterval(timerCounter);
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
  quizBox.classList.remove("active-box");
  quizBackground.classList.remove("active-box");
  resultBox.classList.add("active-box");
  if (quizCard === "Scrum") {
    document.querySelector(".other-quiz").classList.add("scrum");
  } else if (quizCard === "Kanban") {
    document.querySelector(".other-quiz").classList.add("kanban");
  } else if (quizCard === "Product") {
    document.querySelector(".other-quiz").classList.add("product");
  }

  if (score < 3) {
    let scoreTag = `<p>You scored <span>${score}</span> out of <span>${questions.length}</span> questions.</p><p>Maybe check out our ${questions[0].category} beginner training to learn the basics!</p>`;
    resultScore.innerHTML = scoreTag;
  } else if (score < 6 && score >= 3) {
    let scoreTag = `<p>You scored <span>${score}</span> out of <span>${questions.length}</span> questions.</p><p>Maybe check out our ${questions[0].category} advanced training to learn even more!</p>`;
    resultScore.innerHTML = scoreTag;
  } else if (score < 10 && score >= 6) {
    let scoreTag = `<p>You scored <span>${score}</span> out of <span>${questions.length}</span> questions.</p><p>Maybe check out our ${questions[0].category} masterclass training and bring your knowledge to the next level!</p>`;
    resultScore.innerHTML = scoreTag;
  } else {
    let scoreTag = `<p>Wow you scored <span>${score}</span> out of <span>${questions.length}</span> questions.</p><p>That's a perfect score!</p>`;
    resultScore.innerHTML = scoreTag;
  }
}
