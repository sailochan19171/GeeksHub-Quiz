const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');


// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: "The CSS property used to specify the transparency of an element is -",
        choices: ["Hover","opacity","clearfix","overlay"],
        answer: "opacity"

    },
    {
        question: "Which of these functions of the Number Object would format a number with different numbers of digits to the decimals right?",
        choices: ["toFixed()","toExponential()","toLocaleString()","toPrecision()"],
        answer: "toFixed()"

    },
    {
        question: "In case a value of an operator is NULL, then the unary operator would return the ____________ typeof",
        choices: ["object","boolean","string","undefined"],
        answer: "undefined"

    },
    {
        question: "In HTML, which of these would add a background color?",
        choices: ["<marquee bgcolor = “plum”>","<marquee bg color: “plum”>","<marquee color = “plum”>","<marquee bg-color = “plum”>"],
        answer: "<marquee bgcolor = “plum”>"

    },
    {
        question: " Which of these tags helps in the creation of a drop-down box or a combo box?",
        choices: ["<input type = “dropdown”>","<list>","<ul>","<select>"],
        answer: "<select>"

    },
    {
        question: " The non-ASCII characters would be replaced with ________ by the process of URL encoding.",
        choices: ["+","%","&","*"],
        answer: "%"

    },
    {
        question: "_________ is set of rules, that is used to communicate applications to each other.",
        choices: ["HTML","Website","Protocol","XML"],
        answer: "Protocol"

    },
    {
        question: " The FTP protocol is used to __________?",
        choices: ["Transfer data over the internet","Exchange files over the internet","Transfer text message over the internet","All of the above"],
        answer: "Exchange files over the internet"

    },
    {
        question: "Which css property you will use if you want to add some margin between a DIV's border and its inner text ?",
        choices: ["padding","spacing","margin","inner-margin"],
        answer: "padding"

    },
    {
        question: "Which one of the following ethernet is simple to configure?",
        choices: ["Gigabit ethernet","Fast ethernet","Both a and b","None of the above"],
        answer: "Fast ethernet"

    },
    {
        question: "Which of the following is used to read an HTML page and render it?",
        choices: ["Web browser","Web network"," Web server","Web matrix"],
        answer: "Web browser"

    },
    {
        question: "What is DOM in HTML?",
    choices: ["Hierarchy of objects in ASP.NET","Application programming interface","Convention for representing and interacting with objects in html documents", "Language dependent application programming"],
        answer: "Convention for representing and interacting with objects in html documents"
    },
    {
        question: "Which of the following is not the element associated with the HTML table layout?",
        choices: ["size", "spanning","alignment","color"],
        answer: "color"
            
     },
     {
        question: " Which of the following is an HTML specification used to add more information to HTML tags?",
        choices: ["Modifydata","Microdata","Minidata","Macrodata"],
        answer: "Microdata"
 
     },
   
    {
        question: " Which of the following function defines a linear gradient as a CSS image?",
        choices: ["grayscale()","gradient()","image()", "linear-gradient()"],
        answer: "linear-gradient()"

    },
    {
        question:  "For displaying data in JavaScript, we cant use ____________",
        choices: ["document.getElementById()","console.log()", "document.write()","innerHTML"],
        answer: "document.getElementById()"
            
    },
    {
        question:  "Dynamic web page ______",
        choices: [ "both is same every time whenever it displays and generates on demand by a program or a request from browser","generates on demand by a program or a request from browser", "is different always in a predefined order", " is same every time whenever it displays"], 
        answer: "generates on demand by a program or a request from browser"

    },
    {
        question:  "What is document object model (DOM)?",
        choices: ["application programming interface","hierarchy of objects in ASP.NET", "scripting language","convention for representing and interacting with objects in html documents"], 
        answer: "convention for representing and interacting with objects in html documents"

    },
    {
        question:  "The default connection type used by HTTP is _________",
        choices: ["Persistent","Can be either persistent or non-persistent depending on connection request","Non-persistent", "None of the mentioned"], 
        answer: "Persistent"
    },
    {
        question:  "User which have its own desktop computer connected to one or more centralized computers is called",
        choices: ["network", "network client","network server", "network topology"],
        answer: "network server"
    }
];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }

    if(currentQuestionIndex < quiz.length){
        startTimer();
    }
}


const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    

    timeLeft = 15;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}


const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    quizOver = true;
    timer.style.display = "none";
}


const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 2000);
}


const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = ()=>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
            if(confirmUser){
                timeLeft = 15;
                startQuiz();
            }
            else{
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}


const stopTimer = () =>{
    clearInterval(timerID);
}


const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}


const startQuiz = () =>{
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleQuestions();
}


startBtn.addEventListener('click', ()=>{
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});