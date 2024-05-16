const faqQuestions = document.querySelectorAll(
  ".body-container .faq-container .faq h3"
);
const faqAnswers = document.querySelectorAll(
  ".body-container .faq-container .faq .answer"
);
const icons = document.querySelectorAll(
  ".body-container .faq-container .faq img"
);

function initialStyle() {
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

initialStyle();

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function (event) {
    event.preventDefault();

    this.style.color = "hsl(238, 29%, 16%)";

    const nextSibling = question.nextElementSibling;

    // const parentDiv = question.parentElement;
    // const arrow = parentDiv.nextElementSibling.querySelector(".arrow-down");
    // console.log(arrow);

    if (nextSibling && nextSibling.classList.contains("hidden")) {
      initialStyle();
      this.style.color = "hsl(238, 29%, 16%)";
      nextSibling.className = "answer";
      // arrow.className = "arrow-down expanded";
    } else {
      initialStyle();
      // nextSibling.className = "answer hidden";
    }

    // if (nextSibling && nextSibling.classList.contains("answer")) {

    //     nextSibling.style.display =
    //       nextSibling.style.display === "block" ? "none" : "block";

    // }
  });
});
