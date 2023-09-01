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

