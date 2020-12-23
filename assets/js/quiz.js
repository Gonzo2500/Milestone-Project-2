const cardDisabled =document.querySelector("#quiz-card-container");
const scrumQuiz = document.querySelector(".scrum-quiz");
const kanbanQuiz = document.querySelector(".kanban-quiz");
const productQuiz = document.querySelector(".product-quiz")
const ruleBox = document.querySelector(".rule-box")
const ruleTitle = document.querySelector(".rule-title")

let quizCard ="none";


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
