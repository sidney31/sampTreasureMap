window.addEventListener('load', function () {
    const elem = document.querySelector('#map-container')
    const parent = elem.parentElement
    const panzoom = Panzoom(elem, {
        maxScale: 5,
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
