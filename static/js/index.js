try {
    window.addEventListener('load', function () {
        const elem = document.querySelector('#map-container')
        const parent = elem.parentElement
        const panzoom = Panzoom(elem, {
            maxScale: 4,
            minScale: 1,
            cursor: "url(\"../img/cursor.cur\")",
            contain: "outside",
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

try {
    let notification = document.querySelector("#notification")
    const answers = document.querySelectorAll('.answer')
    for (let i in answers) {
        answers[i].addEventListener('click', _ => {
            navigator.clipboard.writeText(answers[i].innerHTML)
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
