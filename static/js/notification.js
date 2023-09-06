updateAnswers()

function updateAnswers() {
    let notification = document.querySelector("#notification")
    let answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.addEventListener('click', _ => {
            navigator.clipboard.writeText(answer.innerHTML.toString())
            ShowNotification(notification)
        }, false)
    })
}

function ShowNotification(notif) {
    notif.classList.toggle('active');
    setTimeout(() => notif.classList.toggle('active'), 1500);
}