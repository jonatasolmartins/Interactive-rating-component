
const element = document.querySelectorAll('li');

for (let index = 0; index < element.length; index++) {

    element[index].addEventListener("click", function() {
        removeAllSelected(element)
        AddClass(element[index])
    });
}

function AddClass(li){
    li.classList.add("score-picked")
}

function removeAllSelected(doc){
    for (var i = 0; i < doc.length; i++) {
        if (doc[i].classList.contains("score-picked")) {
            doc[i].classList.remove("score-picked");
        }        
    }
}

const button = document.querySelector('button');
button.addEventListener("click", () => {
    const score = document.querySelector(".score-picked");

    if(score !== null){
        document.querySelector(".wrapper").style.display = "none";
        const ratingConfirmation = document.querySelector(".rating-confirmation")

        const value = score.getAttribute("data-score")
        const span = document.querySelector(".score-value")
        span.setAttribute("data-score", value);
        
        ratingConfirmation.style.display = "flex"
    }
})
