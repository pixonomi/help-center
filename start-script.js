const faqQuestions = document.querySelectorAll(
  ".body-container .quick-start-menu .quick-start a"
);
const faqAnswers = document.querySelectorAll(
  ".body-container .quick-start-menu .quick-start .answer"
);
const icons = document.querySelectorAll(".arrow-down");

function initial(){
    
    faqQuestions.forEach(function (allquestion) {
      allquestion.style.color = "rgba(60, 94, 243, 0.938)";
    });
    faqAnswers.forEach(function (result) {
      result.className = "answer hidden";
    });

    icons.forEach(function (icon) {
      icon.className = "arrow-down";
    });
}

initial();

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function (event) {
    event.preventDefault();
    
    const clicked = this.getAttribute("href");
    const answer = document.querySelector(clicked);
    const clickedIcon = document.querySelector(`${clicked}icon`);
      
    if(answer.classList.contains("hidden")){
      initial();  
      this.style.color = "hsl(238, 29%, 16%)";
      answer.className = "answer";
        clickedIcon.classList.add("clicked-arrow-down");
    }else{
      
      initial()
    }
    
    ;
  });
});
