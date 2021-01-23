const quiz = [
        {question: "What is Superman's real name?", answer: "Clark Kent"},
        {question: "Where does Superman work?", answer: "The Daily Planet"},
        {question: "Which superhero has super tools such as the magic lasso and bullet-proof bracelets?", answer: "Wonder Woman"},
        {question: "What is Wonder Woman's real name?", answer: "Diana Prince"},
        {question: "What is Batman's real name?", answer: "Bruce Wayne"},
        {question: "Batman protects which city?", answer: "Gotham City"},
        {question: "What is Spiderman's real name", answer: "Peter Parker"},
        {question: "What animal bit Peter Parker and gave him powers?", answer: "spider"},
        {question: "Which superhero has an indestructible shield?", answer: "Captain America"},
        {question: "What is Captain America's real name?", answer: "Steve Rogers"}
    ];

document.getElementById("startBtn").addEventListener("click", () => {start(quiz)});

/*
1) Display array quiz question
2) Let user input answer, then click submit
3) check user response against array answer

*/
function start(quiz){
    let score = 0;
    // main game loop
    quiz.forEach((item) => {
        document.getElementById("question").innerHTML = item.question;
        const answer = item.answer;
        document.getElementById("submitBtn").addEventListener("click", check(answer));
    })

    // end of main game loop
    gameOver();
   
    //Callback functions

    function check(answer){
        const response = document.getElementById("answer").value;
        console.log(response);
    
        if(response === answer){
            document.getElementById("feedback").innerHTML ="Correct!";
            score++;
            } 
            else {
            document.getElementById("feedback").innerHTML ="Wrong! The correct answer was " + answer;
            }
        }
    
    function gameOver(){
        document.getElementById("feedback").innerHTML ="Game Over, you scored " + score + " points.";
    }
}