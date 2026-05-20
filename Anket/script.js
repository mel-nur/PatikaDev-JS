const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const resultSpan = result.querySelector("span");

form.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    let correct = "E"
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer) => {
        if(answer === "E"){
            score += 25
        }
    })
    result.classList.remove("d-none")
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