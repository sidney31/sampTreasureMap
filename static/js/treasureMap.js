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

const hint_mark = document.querySelector(".hint-mark")
const hint_window = document.querySelector(".hint-window")

hint_mark.addEventListener("mouseover", (event) => {
    hint_window.classList.toggle('active');
});

hint_mark.addEventListener("mouseout", (event) => {
    hint_window.classList.toggle('active');
});
