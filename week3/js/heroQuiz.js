//Functions
function buildQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            //add an HTML radio button w/ template literals and .push
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.answers[letter]}
              </label>`
            );
        }

        // add question and its answers to the output w/ template literals and .push
        output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
    );
    //use .join to create a string from the ouput array and send it to html doc
    quizContainer.innerHTML = output.join('');
}

function showResults(){

    //select answer containers
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;
  
    //check each question...
    questions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show correct answers out of total
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${questions.length} correct`;
  }

//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const questions = [
    {
        question: "Where does Superman work?",
        answers: {
            a: "Stark Industries",
            b: "The Daily Planet",
            c: "Gotham Police Department"
        },
        correctAnswer: "b"
    },
    {
        question: "Which superhero has super tools such as the magic lasso and bullet-proof bracelets?",
        answers: {
            a: "Superman",
            b: "Bat Girl",
            c: "Wonder Woman"
        },
        correctAnswer: "c"
    },
    {
        question: "Batman protects which city?",
        answers: {
            a: "Gotham City",
            b: "Metropolis",
            c: "New York City"
        },
        correctAnswer: "a"
    },
    {
        question: "What animal bit Peter Parker and gave him powers?",
        answers: {
            a: "spider",
            b: "bear",
            c: "ant"
        },
        correctAnswer: "a"
    },
    {
        question: "Which superhero has an indestructible shield?",
        answers: {
            a: "The Flash",
            b: "Green Lantern",
            c: "Captain America"
        },
        correctAnswer: "c"
    },
];

//Create quiz
buildQuiz();


//Variables for slides
const previousButton = document.getElementById("previousBtn");
const nextButton = document.getElementById("nextBtn");
const slides = document.querySelectorAll(".slide");
const submitButton = document.getElementById("submitBtn");
let currentSlide = 0;

//Functions for slides
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

//Make first question visible
  showSlide(currentSlide);


//Functions run on button clicks
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);