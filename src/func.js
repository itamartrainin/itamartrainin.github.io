// function alignTextboxToText(textElem, boxElem) {
//     text_rect = textElem.getBoundingClientRect()
//     box_rect = boxElem.getBoundingClientRect()
//     dx = text_rect.left - box_rect.left
//     dy = text_rect.top - box_rect.top
//     boxElem.style.left = dx 
//     boxElem.style.top = dy   
// }

// alignTextboxToText(document.getElementById('about_me'), document.getElementById('text_box_1'))

// function getScrollPercent() {
//     var h = document.documentElement, 
//         b = document.body,
//         st = 'scrollTop',
//         sh = 'scrollHeight';
//     return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
// }

// function runScrollEvents() {
//     slideIn(document.getElementById('text_box_1_0'))
// }

// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     const ret = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
//     return ret
// }

// function slideIn(el) {
//     console.log(getScrollPercent())
// }

// window.addEventListener("scroll", runScrollEvents);