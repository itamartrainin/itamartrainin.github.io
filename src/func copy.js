//document.documentElement.scrollTop = 0

// var lastScrollTop = 0;

// function getScrollPercent() {
//     var h = document.documentElement, 
//         b = document.body,
//         st = 'scrollTop',
//         sh = 'scrollHeight';
//     return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
// }

// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     const ret = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
//     return ret
// }

// function slideIn(el) {

//     console.log(getScrollPercent())

//     if (isInViewport(el)) {
//         // el.setAttribute("transform", "translate(100, 0)");
//         // console.log(el.attributes.transform)
//         // if (el.style.left) {
//         //     el.style.left += '100px'
//         // } else {
//         //     el.style.left = '0px'
//         // }

//         // if (el.left_save) {
//         //     var st = window.pageYOffset || document.documentElement.scrollTop;
//         //     if (st > lastScrollTop){
//         //         // downscroll code
//         //         el.left_save += 10
//         //         el.style.left = el.left_save + 'px';
//         //     } else {
//         //         // upscroll code
//         //         el.left_save -= 100
//         //         el.style.left = el.left_save + 'px';
//         //     }
//         //     lastScrollTop = st <= 0 ? 0 : st;
//         // } else {
//         //     el.left_save = -el.offsetWidth            
//         // }
//         // console.log(el.left_save)


//     } else {
//         // el.left_save = -el.offsetWidth
//         // console.log(el.left_save)
//     }
// }
// function runScrollEvents() {
//     slideIn(document.getElementById('text_box_1_0'))
// }
// window.addEventListener("scroll", runScrollEvents);






// function positionTheDot() {

//   // What percentage down the page are we? 
//   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//   // console.log('scrollPercentage: ' + scrollPercentage)
//   // console.log('document.documentElement.scrollTo: ' + document.documentElement.scrollTop)
//   // console.log('document.body.scrollTop: ' + document.body.scrollTop)
//   // console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollHeight)
//   // console.log('document.documentElement.clientHeight: ' + document.documentElement.clientHeight)

//   // Get path length
//   var circle = document.getElementById("circle");
//   circle.setAttribute("transform", "translate("+ document.documentElement.scrollTop + "," + 2*document.documentElement.scrollTop + ")");
  
// };

// var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit quam et ante pharetra scelerisque. Etiam ac lacinia enim, eu ultricies tortor. Nam lobortis et justo nec varius. Vestibulum volutpat at quam a cursus. Fusce eget tempus metus, sit amet imperdiet tellus. Quisque ultrices commodo ipsum ut dignissim. Nunc pretium libero diam, id maximus nisi aliquam eu.\n" + 
//                  "Etiam non massa ac mi egestas euismod sed eget libero. Duis varius sagittis purus at sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris luctus tincidunt maximus. Sed sed consectetur leo. Etiam nec mi at tortor vulputate ultrices eu eu sapien. Mauris odio libero, dictum sed mollis sit amet, egestas in leo. Sed semper facilisis venenatis.\n" +
//                  "Sed pulvinar sagittis lacus eget scelerisque. Fusce aliquam dui id turpis efficitur, vel aliquet orci posuere. Quisque bibendum posuere sem. Aenean interdum odio ac massa fringilla suscipit. Quisque sagittis velit eu neque sagittis ullamcorper. Sed ut feugiat sem. Cras semper fermentum justo at iaculis. Duis hendrerit est nec bibendum feugiat. Etiam et arcu in tellus placerat imperdiet. Mauris ac nisi a eros facilisis facilisis ut quis nibh.\n"

// var content_len = 0

// function typeText() {  
//   if (content_len == loremIpsum.length) {
//     console.log('stop')
//     stopInterval(typer)
//   }
//   write = loremIpsum.substring(0, content_len++)
//   document.getElementById('text').innerText = write

// }

// // Update dot position when we get a scroll event.
// window.addEventListener("scroll", positionTheDot);

// // Set the initial position of the dot.
// positionTheDot();

// var typer = setInterval(typeText, 70)


