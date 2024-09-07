// Navigating the DOM

// Children: childNodes, firstChild, lastChild

// // list all child nodes of the body tag
// console.log(document.body.childNodes); //Note newline characters is a Text node, which is a child of the body tag

// // list all children of the body tag
// console.log(document.body.children); // Children are not Text nodes

// // Get the first child of the body tag
// console.log(document.body.firstChild); // Same as document.body.childNodes[0]

// // Get the last child of the body tag
// console.log(document.body.lastChild); // Same as document.body.childNodes[document.body.childNodes.length - 1]

// // check if the body tag has children
// console.log(document.body.hasChildNodes()); // true

// // loop through all children of the body tag
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }

// Siblings: previousSibling, nextSibling

// get the previous sibling of the body tag
// console.log("Previous Sibling ", document.body.previousSibling); // this will print out text because newline is treated as sibling and as text.
// To get the previouse element sibling we the following
// console.log("Previous Element Sibling: ", document.body.previousElementSibling); //this will print head element as previous element sibling

// get the next sibling of the head tag
// console.log("Next Sibling: ", document.head.nextSibling); // this will print out text too
//to get the next element sibling of head tag use the following:
// console.log(document.head.nextElementSibling); // will print body element

// Parent: parentNode
// get the parent of the head tag
console.log("Parent: ", document.body.parentNode); // the parentnode of the body tag is the root element html
