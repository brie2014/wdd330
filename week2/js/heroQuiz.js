const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["Where does Superman work?", "The Daily Planet"],
    ["Which superhero has super tools such as the magic lasso and bullet-proof bracelets?", "Wonder Woman"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"],
    ["Batman protects which city?", "Gotham City"],
    ["What is Spiderman's real name", "Peter Parker"],
    ["What animal bit Peter Parker and gave him powers?", "spider"],
    ["Which superhero has an indestructible shield?", "Captain America"],
    ["What is Captain America's real name?", "Steve Rogers"]
];

document.getElementById("startBtn").addEventListener("click", start(quiz));

function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz) {
        document.getElementById("question").innerHTML = question;
        const response = document.getElementById("answer").innerHTML;
        document.getElementById("submitBtn").addEventListener("click", check(answer, response));
    }
    // end of main game loop
    gameOver();
   
    //Callback functions
    function check(answer,response){
        
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