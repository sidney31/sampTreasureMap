window.addEventListener("load", function () {
    updateAnswers();
})

function updateAnswers() {
    let notification = document.querySelector("#notification");
    let answers = document.getElementsByClassName("answer");
    for (let i = 0; i < answers.length; ++i) {
        answers[i].addEventListener("click", function () {
            navigator.clipboard.writeText(answers[i].innerHTML);
            ShowNotification(notification);
        }, false);
    }
}

function ShowNotification(notif) {
    notif.classList.toggle('active');
    setTimeout(() => notif.classList.toggle('active'), 1500);
}