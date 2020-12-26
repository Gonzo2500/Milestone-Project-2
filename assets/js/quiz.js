const cardDisabled =document.querySelector("#quiz-card-container");
const scrumQuiz = document.querySelector(".scrum-quiz");
const kanbanQuiz = document.querySelector(".kanban-quiz");
const productQuiz = document.querySelector(".product-quiz")
const ruleBox = document.querySelector(".rule-box")
const ruleTitle = document.querySelector(".rule-title")
const startQuiz = document.querySelector(".start");
const exitQuiz = document.querySelectorAll(".quit");
const quizBox = document.querySelector(".quiz-container");
const quizBackground = document.querySelector(".quiz-bg");
const questionTitle = document.querySelector(".question-category");
const choiceList = document.querySelector(".choice-list");
const nextButton = document.querySelector(".next-btn");
const choiceContainer = document.querySelector(".choice-container");

let quizCard ="none";
let questions;
let questionCounter = 0;
let questionNumber = 1;
let score = 0;


[[scrumQuiz, "Scrum"],
  [kanbanQuiz, "Kanban"],
  [productQuiz, "Product"],
].forEach(
  (item) =>
    (item[0].onclick = () => {
        quizCard = item[1];
        cardDisabled.classList.add("disabled")
        let titleChange = `<p> Rules of this ${item[1]} Quiz</p>`;
        ruleTitle.innerHTML= titleChange;
        ruleBox.classList.add("active-box");
        if(quizCard === "Scrum"){
            document.querySelector(".text-color").classList.add("scrum-text");
            document.querySelector(".quit").classList.add("scrum");
            document.querySelector(".start").classList.add("scrum");
        } else if( quizCard === "Kanban"){
            document.querySelector(".text-color").classList.add("kanban-text");
            document.querySelector(".quit").classList.add("kanban");
            document.querySelector(".start").classList.add("kanban");
        }else if( quizCard === "Product"){
            document.querySelector(".text-color").classList.add("product-text");
            document.querySelector(".quit").classList.add("product");
            document.querySelector(".start").classList.add("product");
        }
    })
);

startQuiz.onclick = () => {
     if(quizCard === "Scrum"){
            document.querySelector(".next-btn").classList.add("scrum");
        } else if( quizCard === "Kanban"){
            document.querySelector(".next-btn").classList.add("kanban");
        }else if( quizCard === "Product"){
            document.querySelector(".next-btn").classList.add("product");
        }
    ruleBox.classList.remove("active-box");
    quizBox.classList.add("active-box");
    quizBackground.classList.add("active-box");
    inputQuestions(0);
    questionNumber(1);
    timer(60);
}

exitQuiz.forEach(
    (item) => 
    (item.onclick = () => {
        window.location.href ="quiz.html";
    })
);

function inputQuestions(i) {
      if (quizCard === "Scrum"){
            questions = scrumQuestions;
            questionTitle.classList.add("scrum-text");
        }
         else if ( quizCard === "Kanban"){
            questions = kanbanQuestions;
            questionTitle.classList.add("kanban-text");
        }
        else if ( quizCard === "Product"){
            questions = productQuestions;
            questionTitle.classList.add("product-text");
        }

       const questionName = document.querySelector(".question-name");
       let questionInput = "<h1>" +
    questions[i].numb +
    ". " +
    questions[i].question +
    "</h1>";

    let optionInput = '<div class="choice-container ' + questions[i].category.toLowerCase() + '"><p class="choice-text">' +
    questions[i].options[0] +
    "</p></div>" + // get options from question array
    '<div class="choice-container ' + questions[i].category.toLowerCase() + '"><p class="choice-text">' +
    questions[i].options[1] +
    "</p></div>" + // get options from question array
    '<div class="choice-container ' + questions[i].category.toLowerCase() + '"><p class="choice-text">' +
    questions[i].options[2] +
    "</p></div>" + // get options from question array
    '<div class="choice-container ' + questions[i].category.toLowerCase() + '"><p class="choice-text">' +
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

function optionSelected(answer){
    let userAnswer = answer.textContent
    let correctAnswer =questions[questionCounter].answer

      const allOptions = choiceList.children.length; // targets all options

      if (userAnswer === correctAnswer){
        score +=1;
        answer.classList.add("correct");
      }
      else {
          answer.classList.add("false");

          for(let x =0; x < allOptions; x++){
              if(choiceList.children[x].textContent === correctAnswer ){
                  choiceList.children[x].setAttribute("class","choice-container correct");
              }
          }
      }
      for(let x =0; x < allOptions; x++){
        choiceList.children[x].classList.add("disabled")
      }
       nextButton.style.display ="block";
}

nextButton.onclick = () => {
    if(questionCounter < questions.length -1){
        questionCounter ++;
        questionNumber ++;
        inputQuestions(questionCounter)
        nextButton.style.display ="none";
    }
    else{
        showresult();
    }
}