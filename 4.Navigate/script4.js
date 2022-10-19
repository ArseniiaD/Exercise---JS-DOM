//Select the last child of the <ol> tag and put it at the beginning of the list

const ol= document.querySelector("ol");
let lastChild = ol.children[ol.children.length-1];
ol.prepend(lastChild);
console.log(ol.innerHTML);
 
//Move the <h2> of the third section in the second one and vice-versa

let main = document.querySelector("main");
let section2 = main.children[1];
let b = document.querySelector("div > h2:first-child");
section2.prepend(b);
let a = section2.children[1];
let div = document.querySelector("div");
div.prepend(a);
console.log(main.innerHTML);

//Delete the last section from the DOM, we don't need it anyways

main.removeChild(main.lastElementChild);
//main.removeChild(main.children[2]);
console.log(main.innerHTML);


