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


