window.onload = () => {
    document.body.style.overflowY = 'visible';
    let search_box = document.querySelector(".search-box");
    let allQuestionsBlocks = document.querySelectorAll(".question_block");
    let questions_and_answers = document.querySelector("#questions_and_answers");
    let stockAllQuestionsBlocks = questions_and_answers;

    updateList();

    search_box.onkeyup = function () {
        updateList();
        let search_text = this.value;
        questions_and_answers.innerHTML = ''
        allQuestionsBlocks.forEach((item, i) => {
            if (item.querySelector(".question").textContent.toLowerCase().includes(search_text.toLowerCase())) {
                questions_and_answers.innerHTML +=
                    `
                    <div class="question_block">
                        <div class="question">${item.querySelector(".question").textContent}</div>
                        <div class="answer">${item.querySelector(".answer").textContent}</div>
                    </div>
                    `
            }
        })
        updateAnswers()

    }

    function updateList() {
        questions_and_answers = stockAllQuestionsBlocks
    }
}