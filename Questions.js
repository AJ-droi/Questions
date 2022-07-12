const plus = document.querySelectorAll(".question-btn");
console.log(plus)
const minus = document.querySelectorAll(".minus-icon");



plus.forEach((plusBtn) => {

    plusBtn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
        console.log(question);
    })
})