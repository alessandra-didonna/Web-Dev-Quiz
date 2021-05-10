let html = [
    {
        question: "Which tag do you use to insert a dominant content?",
        answer: ['<main/>', '<body/>'],
        correct: 0
    },
    {
        question: "What does HTML stands for?",
        answer: ['Hyper Text Mark Up Language', 'Hyper Text Multiple Language'],
        correct: 0
    },
    {
        question: "Where can we add external javascript in html?",
        answer: ['<body/>', 'both <head/> or <body/>'],
        correct: 1
    },
    {
        question: "How do you define a class?",
        answer: ['=".container"', '="container"'],
        correct: 1
    }
]

let css = [
    {
        question: "What CSS property do you use to change font?",
        answer: ['font-family', 'font-style'],
        correct: 0
    },
    {
        question: "What kind of CSS style win?",
        answer: ['in-line CSS', 'external CSS'],
        correct: 0
    },
    {
        question: "How to add space between letters?",
        answer: ['margin', 'letter-spacing'],
        correct: 1
    },
    {
        question: "What do rem refer to?",
        answer: ['Relative to font-size of the root element', 'Relative to the parent element'],
        correct: 0
    }
]

let javascript = [
    {
        question: "How do you declare a Javascript variable?",
        answer: ['variable title', 'var title'],
        correct: 1
    },
    {
        question: "How do you write a cycle?",
        answer: ['for(let i = 0; i < 10; i++) {...}', 'for(let i = 0; i < 10 + i) {...}'],
        correct: 0
    },
    {
        question: "How to fill an array?",
        answer: ['array.filter()', 'array.push()'],
        correct: 1
    },
    {
        question: "What is Jquery?",
        answer: ['Framework', 'Library'],
        correct: 1
    }
]

let questionArray = [];
let index = 0;
//let progressScore = 0;

let argumentContainer = document.getElementById("argumentContainer");
let mainContainer = document.getElementById("mainContainer");
let quiz = document.getElementById("quiz");
let questionParagraph = document.getElementById("question");
let containerQuest = document.getElementById("containerQuest");
let progressBar = document.getElementById("progressBar");
let progressBarContainer = document.getElementById("progressBarContainer");
let labelQuiz = document.getElementById("labelQuiz");
let endQuizMessage = document.getElementById("endQuizMessage");

//create the html/css/javascript quiz choice buttons
for(let i = 0; i < 3; i++) {

    let choice = document.createElement('button');
    choice.setAttribute("class", "btn argumentBtn btn-grad");
    choice.setAttribute("id", "choice");
    choice.setAttribute("value", i);
    argumentContainer.appendChild(choice);
    
    if(choice.value == 0) {
        choice.appendChild(document.createTextNode("html"));
    }
    if(choice.value == 1) {
        choice.appendChild(document.createTextNode("css"));
    }
    if(choice.value == 2) {
        choice.appendChild(document.createTextNode("javascript"));
    }
}

for(let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", () => {
        if(choice[i].value == 0) {
            questionArray = html;
            progressScore = 0; //reset the progressbar width when the typology of quiz is changed
            progressBar.style.width = progressScore + "%";
            endQuizMessage.classList.remove("d-block");
            answerReset();
            init(index);
        }
        if(choice[i].value == 1) {
            questionArray = css;
            progressScore = 0;
            progressBar.style.width = progressScore + "%";
            endQuizMessage.classList.remove("d-block");
            answerReset();
            init(index);
        }
        if(choice[i].value == 2) {
            questionArray = javascript;
            progressScore = 0;
            progressBar.style.width = progressScore + "%";
            endQuizMessage.classList.remove("d-block");

            answerReset();
            init(index);
        }
    });
}

function init(index) {
    questionParagraph.innerHTML = questionArray[index].question; //questions printed on page

    for(let i = 0; i < questionArray[index].answer.length; i++) {
        createButtonAnswer(index,i);
    }

    //create the next question button
    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "btn btn-warning nextBtn");
    nextBtn.appendChild(document.createTextNode("Next"));
    containerQuest.appendChild(nextBtn);

    nextBtn.addEventListener("click", () => {
        if (index < questionArray.length - 1) {
            index++;
            answerReset();
            init(index);
        } else { //show an end quiz message
            endQuizMessage.classList.add("d-block");
        }
    });
}
//create buttons for the answers
function createButtonAnswer(index,i) {
    let btnAnswer = document.createElement('button');
    btnAnswer.setAttribute("class", "btn btnAnswer mb-2 border");
    btnAnswer.setAttribute("value", i);
    btnAnswer.appendChild(document.createTextNode(questionArray[index].answer[i]));
    containerQuest.appendChild(btnAnswer);

    btnAnswer.addEventListener("click", (e) => {
        if(e.target.value == questionArray[index].correct) {
            e.target.classList.add("right", "right:hover");
            progressbarIncrement();
        } else {
            e.target.classList.add("wrong", "wrong:hover");
        }
    })
}
//reset the answers when the typology of quiz is changed
function answerReset() {
    while (containerQuest.hasChildNodes()) {
        containerQuest.removeChild(containerQuest.lastChild);
    }
}
//increment the progressbar score when the clicked answer is right
function progressbarIncrement() {
    progressScore = progressScore + 25;
    progressBar.style.width = progressScore + "%";
}
