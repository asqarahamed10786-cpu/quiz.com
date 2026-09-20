```javascript
/* =========================================
   TECHNOVA QUIZ GAME
   5 LEVELS × 10 QUESTIONS
   15 SECONDS PER QUESTION
========================================= */


/* =========================================
   QUIZ DATA
========================================= */

const quizData = [

    /* =====================================
       LEVEL 1
    ===================================== */

    [
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing User"
            ],
            answer: 0
        },

        {
            question: "Which device is mainly used to type text into a computer?",
            options: [
                "Monitor",
                "Keyboard",
                "Printer",
                "Speaker"
            ],
            answer: 1
        },

        {
            question: "Which of these is an operating system?",
            options: [
                "Windows",
                "Google",
                "Intel",
                "HTML"
            ],
            answer: 0
        },

        {
            question: "What does WWW stand for?",
            options: [
                "World Wide Web",
                "Web World Wire",
                "World Web Window",
                "Wide World Website"
            ],
            answer: 0
        },

        {
            question: "Which device displays information from a computer?",
            options: [
                "Keyboard",
                "Mouse",
                "Monitor",
                "Microphone"
            ],
            answer: 2
        },

        {
            question: "Which company developed the Windows operating system?",
            options: [
                "Apple",
                "Microsoft",
                "Samsung",
                "Intel"
            ],
            answer: 1
        },

        {
            question: "Which technology is commonly used for wireless internet?",
            options: [
                "HDMI",
                "USB",
                "Wi-Fi",
                "VGA"
            ],
            answer: 2
        },

        {
            question: "Which device is commonly used to move the pointer on a computer?",
            options: [
                "Mouse",
                "Scanner",
                "Printer",
                "Speaker"
            ],
            answer: 0
        },

        {
            question: "What is the brain of a computer commonly called?",
            options: [
                "RAM",
                "CPU",
                "SSD",
                "Keyboard"
            ],
            answer: 1
        },

        {
            question: "Which one is a web browser?",
            options: [
                "Chrome",
                "Excel",
                "Windows",
                "Photoshop"
            ],
            answer: 0
        }
    ],


    /* =====================================
       LEVEL 2
    ===================================== */

    [
        {
            question: "What does RAM stand for?",
            options: [
                "Random Access Memory",
                "Rapid Action Machine",
                "Read Access Module",
                "Remote Access Memory"
            ],
            answer: 0
        },

        {
            question: "Which language is mainly used to structure web pages?",
            options: [
                "Python",
                "HTML",
                "Java",
                "C++"
            ],
            answer: 1
        },

        {
            question: "What does USB stand for?",
            options: [
                "Universal Serial Bus",
                "United System Board",
                "Universal Storage Box",
                "User Serial Base"
            ],
            answer: 0
        },

        {
            question: "Which of these is a search engine?",
            options: [
                "Google",
                "WhatsApp",
                "Windows",
                "Bluetooth"
            ],
            answer: 0
        },

        {
            question: "Which storage device generally has no moving mechanical parts?",
            options: [
                "SSD",
                "DVD",
                "Floppy Disk",
                "Magnetic Tape"
            ],
            answer: 0
        },

        {
            question: "What does URL stand for?",
            options: [
                "Universal Read Link",
                "Uniform Resource Locator",
                "User Resource Line",
                "Unified Routing Link"
            ],
            answer: 1
        },

        {
            question: "Which technology allows nearby devices to communicate wirelessly over short distances?",
            options: [
                "Bluetooth",
                "Ethernet",
                "HDMI",
                "VGA"
            ],
            answer: 0
        },

        {
            question: "Which company created Android before it was acquired by Google?",
            options: [
                "Android Inc.",
                "Microsoft",
                "IBM",
                "Nokia"
            ],
            answer: 0
        },

        {
            question: "What type of device is a printer?",
            options: [
                "Input device",
                "Output device",
                "Storage device",
                "Processing device"
            ],
            answer: 1
        },

        {
            question: "What does AI stand for?",
            options: [
                "Automatic Internet",
                "Artificial Intelligence",
                "Advanced Interface",
                "Artificial Internet"
            ],
            answer: 1
        }
    ],


    /* =====================================
       LEVEL 3
    ===================================== */

    [
        {
            question: "Which programming language is widely used for artificial intelligence and data science?",
            options: [
                "Python",
                "HTML",
                "CSS",
                "XML"
            ],
            answer: 0
        },

        {
            question: "What does IP stand for in computer networking?",
            options: [
                "Internet Protocol",
                "Internal Program",
                "Internet Processor",
                "Information Port"
            ],
            answer: 0
        },

        {
            question: "Which protocol is commonly used for secure websites?",
            options: [
                "HTTP",
                "HTTPS",
                "FTP",
                "SMTP"
            ],
            answer: 1
        },

        {
            question: "What is cloud computing?",
            options: [
                "Computing only during rainy weather",
                "Using remote internet-based computing resources",
                "Repairing computer hardware",
                "Connecting only two computers"
            ],
            answer: 1
        },

        {
            question: "Which component stores data temporarily while programs are running?",
            options: [
                "RAM",
                "SSD",
                "Hard Disk",
                "DVD"
            ],
            answer: 0
        },

        {
            question: "What is the main role of a firewall?",
            options: [
                "Increase monitor brightness",
                "Protect a network from unauthorized access",
                "Charge a computer battery",
                "Improve speaker sound"
            ],
            answer: 1
        },

        {
            question: "Which of these is a programming language?",
            options: [
                "Python",
                "Chrome",
                "Windows",
                "Wi-Fi"
            ],
            answer: 0
        },

        {
            question: "Which unit is commonly used to measure processor clock frequency?",
            options: [
                "Gigahertz",
                "Gigabyte",
                "Megapixel",
                "Volt"
            ],
            answer: 0
        },

        {
            question: "What is phishing?",
            options: [
                "A cyberattack designed to trick users into revealing information",
                "A computer cooling technique",
                "A programming method",
                "A file compression method"
            ],
            answer: 0
        },

        {
            question: "Which technology enables digital currencies such as Bitcoin to record transactions?",
            options: [
                "Bluetooth",
                "Blockchain",
                "HTML",
                "GPS"
            ],
            answer: 1
        }
    ],


    /* =====================================
       LEVEL 4
    ===================================== */

    [
        {
            question: "What does IoT stand for?",
            options: [
                "Internet of Things",
                "Interface of Technology",
                "Internet of Telephones",
                "Input of Technology"
            ],
            answer: 0
        },

        {
            question: "Which system allows computers to translate domain names into IP addresses?",
            options: [
                "DNS",
                "USB",
                "GPU",
                "HTML"
            ],
            answer: 0
        },

        {
            question: "What is a GPU mainly designed to process efficiently?",
            options: [
                "Graphics and highly parallel calculations",
                "Keyboard input only",
                "Internet passwords",
                "Printed documents"
            ],
            answer: 0
        },

        {
            question: "Which HTTP status code commonly means 'Page Not Found'?",
            options: [
                "200",
                "301",
                "404",
                "500"
            ],
            answer: 2
        },

        {
            question: "What is machine learning?",
            options: [
                "A method enabling computers to learn patterns from data",
                "A mechanical keyboard design",
                "A type of computer monitor",
                "A wired networking standard"
            ],
            answer: 0
        },

        {
            question: "Which company originally developed the Java programming language?",
            options: [
                "Sun Microsystems",
                "Apple",
                "Intel",
                "Adobe"
            ],
            answer: 0
        },

        {
            question: "What does SQL commonly help developers do?",
            options: [
                "Manage and query relational databases",
                "Create physical computer chips",
                "Increase internet signal strength",
                "Repair monitors"
            ],
            answer: 0
        },

        {
            question: "Which device forwards data packets between different networks?",
            options: [
                "Router",
                "Keyboard",
                "Scanner",
                "Monitor"
            ],
            answer: 0
        },

        {
            question: "What is encryption primarily used for?",
            options: [
                "Protecting information by transforming it into a coded form",
                "Increasing screen size",
                "Cooling a processor",
                "Printing documents"
            ],
            answer: 0
        },

        {
            question: "Which number system is fundamentally used by digital computers?",
            options: [
                "Decimal",
                "Binary",
                "Roman",
                "Octal only"
            ],
            answer: 1
        }
    ],


    /* =====================================
       LEVEL 5
    ===================================== */

    [
        {
            question: "How many bits are in one byte?",
            options: [
                "4",
                "8",
                "16",
                "32"
            ],
            answer: 1
        },

        {
            question: "What is the binary representation of decimal number 10?",
            options: [
                "1010",
                "1001",
                "1110",
                "1100"
            ],
            answer: 0
        },

        {
            question: "What does API stand for?",
            options: [
                "Application Programming Interface",
                "Advanced Program Internet",
                "Application Processing Input",
                "Automated Programming Internet"
            ],
            answer: 0
        },

        {
            question: "Which data structure follows the LIFO principle?",
            options: [
                "Queue",
                "Stack",
                "Tree",
                "Graph"
            ],
            answer: 1
        },

        {
            question: "Which data structure normally follows the FIFO principle?",
            options: [
                "Stack",
                "Queue",
                "Tree",
                "Hash"
            ],
            answer: 1
        },

        {
            question: "What is Git primarily used for?",
            options: [
                "Version control",
                "Video editing",
                "Hardware repair",
                "Wi-Fi encryption"
            ],
            answer: 0
        },

        {
            question: "Which part of an operating system manages core hardware and system resources?",
            options: [
                "Kernel",
                "Browser",
                "Compiler",
                "Spreadsheet"
            ],
            answer: 0
        },

        {
            question: "What does JSON stand for?",
            options: [
                "JavaScript Object Notation",
                "Java Source Object Network",
                "Java System Output Name",
                "Joined Script Object Node"
            ],
            answer: 0
        },

        {
            question: "Which search method repeatedly halves a sorted search interval?",
            options: [
                "Linear Search",
                "Binary Search",
                "Depth-First Search",
                "Bubble Sort"
            ],
            answer: 1
        },

        {
            question: "What does IDE stand for in software development?",
            options: [
                "Integrated Development Environment",
                "Internet Development Engine",
                "Internal Data Environment",
                "Integrated Digital Equipment"
            ],
            answer: 0
        }
    ]

];


/* =========================================
   GAME VARIABLES
========================================= */

let currentLevel = 0;

let currentQuestion = 0;

let score = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let levelStartScore = 0;

let timeLeft = 15;

let timerInterval;

let answered = false;


/* =========================================
   HTML ELEMENTS
========================================= */

const startScreen =
    document.getElementById("startScreen");

const quizScreen =
    document.getElementById("quizScreen");

const levelCompleteScreen =
    document.getElementById("levelComplete");

const finalScreen =
    document.getElementById("finalScreen");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const timerElement =
    document.getElementById("timer");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const levelDisplay =
    document.getElementById("levelDisplay");

const questionNumber =
    document.getElementById("questionNumber");

const progress =
    document.getElementById("progress");


/* =========================================
   START GAME
========================================= */

function startGame() {

    startScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    currentLevel = 0;

    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    levelStartScore = 0;

    updateLevelIndicators();

    loadQuestion();
}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    clearInterval(timerInterval);

    answered = false;

    const questionData =
        quizData[currentLevel][currentQuestion];


    levelDisplay.textContent =
        `LEVEL ${currentLevel + 1}`;


    scoreDisplay.textContent =
        score;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} / 10`;


    progress.style.width =
        `${((currentQuestion + 1) / 10) * 100}%`;


    questionElement.textContent =
        questionData.question;


    answersElement.innerHTML = "";


    const letters = ["A", "B", "C", "D"];


    questionData.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer-btn";


            button.innerHTML = `
                <span class="answer-letter">
                    ${letters[index]}
                </span>

                <span>
                    ${option}
                </span>
            `;


            button.onclick = () =>
                selectAnswer(index, button);


            answersElement.appendChild(button);

        }
    );


    startTimer();
}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    timeLeft = 15;

    timerElement.textContent =
        timeLeft;

    timerElement.classList.remove(
        "timer-danger"
    );


    timerInterval =
        setInterval(() => {

            timeLeft--;

            timerElement.textContent =
                timeLeft;


            if (timeLeft <= 5) {

                timerElement.classList.add(
                    "timer-danger"
                );

            }


            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                timeUp();

            }

        }, 1000);
}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) return;

    answered = true;

    clearInterval(timerInterval);


    const questionData =
        quizData[currentLevel][currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (
        selectedIndex ===
        questionData.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );


        /*
            Base score = 100
            Time bonus = remaining seconds × 5
        */

        score +=
            100 +
            timeLeft * 5;


        correctAnswers++;

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );


        buttons[
            questionData.answer
        ].classList.add("correct");


        wrongAnswers++;

    }


    scoreDisplay.textContent =
        score;


    setTimeout(() => {

        nextQuestion();

    }, 1100);
}


/* =========================================
   TIME UP
========================================= */

function timeUp() {

    if (answered) return;

    answered = true;

    wrongAnswers++;


    const questionData =
        quizData[currentLevel][currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    buttons[
        questionData.answer
    ].classList.add("correct");


    setTimeout(() => {

        nextQuestion();

    }, 1100);
}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion <
        quizData[currentLevel].length
    ) {

        loadQuestion();

    }

    else {

        showLevelComplete();

    }
}


/* =========================================
   LEVEL COMPLETE
========================================= */

function showLevelComplete() {

    quizScreen.classList.add("hidden");

    levelCompleteScreen.classList.remove(
        "hidden"
    );


    const earnedScore =
        score - levelStartScore;


    document.getElementById(
        "levelScore"
    ).textContent =
        `Level Score: ${earnedScore}`;


    document.getElementById(
        "completeText"
    ).textContent =
        `You completed Level ${
            currentLevel + 1
        }!`;


    const nextButton =
        document.getElementById(
            "nextLevelButton"
        );


    if (currentLevel === 4) {

        nextButton.textContent =
            "VIEW FINAL RESULT 👑";

    }

    else {

        nextButton.textContent =
            `UNLOCK LEVEL ${
                currentLevel + 2
            } 🚀`;

    }


    updateLevelIndicators();
}


/* =========================================
   NEXT LEVEL
========================================= */

function nextLevel() {

    levelCompleteScreen.classList.add(
        "hidden"
    );


    if (currentLevel === 4) {

        showFinalResult();

        return;

    }


    currentLevel++;

    currentQuestion = 0;

    levelStartScore = score;


    quizScreen.classList.remove(
        "hidden"
    );


    updateLevelIndicators();

    loadQuestion();
}


/* =========================================
   UPDATE LEVEL INDICATORS
========================================= */

function updateLevelIndicators() {

    const dots =
        document.querySelectorAll(
            ".level-dot"
        );


    dots.forEach((dot, index) => {

        dot.classList.remove(
            "current",
            "completed"
        );


        if (index < currentLevel) {

            dot.classList.add(
                "completed"
            );

        }

        else if (
            index === currentLevel
        ) {

            dot.classList.add(
                "current"
            );

        }

    });
}


/* =========================================
   FINAL RESULT
========================================= */

function showFinalResult() {

    finalScreen.classList.remove(
        "hidden"
    );


    document.getElementById(
        "finalScore"
    ).textContent =
        `${correctAnswers}/50`;


    document.getElementById(
        "correctStat"
    ).textContent =
        correctAnswers;


    document.getElementById(
        "wrongStat"
    ).textContent =
        wrongAnswers;


    const accuracy =
        Math.round(
            (correctAnswers / 50) * 100
        );


    document.getElementById(
        "accuracyStat"
    ).textContent =
        accuracy + "%";


    const message =
        document.getElementById(
            "finalMessage"
        );


    if (accuracy >= 90) {

        message.textContent =
            "🏆 Outstanding! You are a true Tech Master!";

    }

    else if (accuracy >= 75) {

        message.textContent =
            "🚀 Excellent performance! Your technology knowledge is impressive.";

    }

    else if (accuracy >= 60) {

        message.textContent =
            "⚡ Good job! Keep learning and improving your technology skills.";

    }

    else if (accuracy >= 40) {

        message.textContent =
            "💡 Nice attempt! Practice more and try the challenge again.";

    }

    else {

        message.textContent =
            "🌱 Every expert starts somewhere. Learn, retry and level up!";

    }
}


/* =========================================
   RESTART GAME
========================================= */

function restartGame() {

    clearInterval(timerInterval);


    finalScreen.classList.add(
        "hidden"
    );


    currentLevel = 0;

    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    levelStartScore = 0;


    quizScreen.classList.remove(
        "hidden"
    );


    updateLevelIndicators();

    loadQuestion();
}
```
