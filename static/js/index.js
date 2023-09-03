try {
    window.addEventListener('load', function () {
        const elem = document.querySelector('#map-container')
        const parent = elem.parentElement
        const panzoom = Panzoom(elem, {
            maxScale: 3,
            minScale: 0.2,
            cursor: "url(\"../img/cursor.cur\")",
            contain: "outside",
            startScale: 0.2,
            smoothScroll: false
        })
        parent.addEventListener('wheel', panzoom.zoomWithWheel)
    });

    const hintMark = document.querySelector(".hint_mark")
    const hintWindow = document.querySelector(".hint_window")

    hintMark.addEventListener("mouseover", (event) => {
        hintWindow.classList.toggle('active');
    });

    hintMark.addEventListener("mouseout", (event) => {
        hintWindow.classList.toggle('active');
    });
} catch (e) {
    console.log(e)
}

async function copyAnswerToClipboard(text) {
    await navigator.clipboard.writeText(text)
}

try {
    let notification = document.querySelector("#notification")
    const answers = document.querySelectorAll('.answer')
    for (let i in answers) {
        answers[i].addEventListener('click', async _ => {
            await navigator.clipboard.writeText(answers[i].innerHTML)
            ShowNotification(notification)
        }, false)
    }
} catch (e) {
    console.log(e)
}

function ShowNotification(notif) {
    notif.classList.toggle('active');
    setTimeout(() => notif.classList.toggle('active'), 1000);
}
