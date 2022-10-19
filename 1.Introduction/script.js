
let a = document.querySelector('title');
console.log(a.textContent);

a.innerHTML = "Modifying the DOM";
console.log(a.textContent);

let body = document.querySelector('body')
//body.style.background = '#FF69B4';
//body.style.background = 'rgb(134,4,34)';
let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);
console.log(x,y,z);
body.style.background = 'rgb('+ x +','+ y +','+ z +')';


let parent = document.querySelector('body');
let elements = parent.children;
for (let element of elements) {
    console.log(element);
}

let par2 = document.querySelector('body');
let children = par2.childNodes;
for (let child of children) {
    console.log(child);
}
//.textContent