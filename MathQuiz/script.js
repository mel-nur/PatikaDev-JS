const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const resultSpan = result.querySelector("span");
const correctAnswer = ["50", "12", "45", "10"];
const text = document.getElementById("text");
const button = document.querySelector("button");

form.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 25
        }
    })
    result.classList.remove("d-none")
    if(score === 100){
        text.classList.remove("d-none");
        button.setAttribute("disabled", "");

    }
    let point = 0;
    const print = setInterval(() => {
        resultSpan.textContent = `${point}% `
        if(point === score){
            clearInterval(print);
        }
        else{
            point++;
        }
    }, 15);
})