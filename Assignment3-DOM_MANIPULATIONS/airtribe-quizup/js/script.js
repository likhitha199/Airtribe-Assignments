const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];

let currQuestionInd = 0;
let score = 0;
let questionElement = document.getElementById("question");
let answersElement = document.getElementById("answer-list");
let submitButton = document.getElementById("submit");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

let submittedQuestions = new Array(questions.length).fill(false);

function loadQuestion() {
    const currQuestion = questions[currQuestionInd];
    questionElement.textContent = currQuestion.text;
    answersElement.innerHTML = "";
    currQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = 'radio';
        input.name = 'option';
        input.value = index;
        li.appendChild(input);
        li.appendChild(document.createTextNode(option));
        answersElement.appendChild(li);
    });

    if (submittedQuestions[currQuestionInd]) {
        submitButton.style.display = 'none';
        nextButton.style.display = 'inline';
    } else {
        submitButton.style.display = 'inline';
        nextButton.style.display = 'none';
    }

    submitButton.disabled = false;
}

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        const correctAnswer = questions[currQuestionInd].correct;

        answersElement.children[correctAnswer].style.backgroundColor = 'lightgreen';

        if (selectedAnswer === correctAnswer) {
            score++;
        } else {
            answersElement.children[selectedAnswer].style.backgroundColor = '#FFCCCB';
        }

        // Disable all radio buttons after submission
        document.querySelectorAll('input[name="option"]').forEach(input => {
            input.disabled = true;
        });

        submittedQuestions[currQuestionInd] = true;
        submitButton.style.display = 'none';
        nextButton.style.display = 'inline';
        prevButton.disabled = false;
    } else {
        alert('Please select an answer.');
    }
});

nextButton.addEventListener("click", () => {
    currQuestionInd++;
    if (currQuestionInd < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = 'Quiz finished!';
        answersElement.innerHTML = '';
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
        alert(`Final score: ${score}`);
    }
});

prevButton.addEventListener("click", () => {
    currQuestionInd--;
    if (currQuestionInd >= 0 && currQuestionInd < questions.length) {
        loadQuestion();
        prevButton.disabled = currQuestionInd === 0;
    } else {
        alert('You can\'t go back any further! Please click next to proceed to the quiz.');
        currQuestionInd++;
    }
});

// Load the first question on startup
loadQuestion();
prevButton.disabled = true;
