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


function copyToClipboard(text){
    if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        unsecuredCopyToClipboard(text);
    }
}

function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy')
    } catch (err) {
        console.error('Unable to copy to clipboard', err)
    }
    document.body.removeChild(textArea)
}

try {
    let notification = document.querySelector("#notification")
    const answers = document.querySelectorAll('.answer')
    for (let i in answers) {
        answers[i].addEventListener('click', _ => {
            copyToClipboard(answers[i].innerHTML)
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
