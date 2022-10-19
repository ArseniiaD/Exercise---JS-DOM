const studentsList = ["Munise", "Benji", "Andrii", "Yurii", "Anna", "Dariia", "Yunes"];

//Find a way so that everytime you load the page the order of the elements changes!
let shuffled = studentsList.sort(() => Math.random() - 0.5);
console.log(shuffled);

// Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
const body = document.querySelector("body");
const article = document.querySelector("article");
for (let el of studentsList) {
    const section = document.createElement("section");
    const p = document.createElement("p");
    p.innerHTML = el;
    article.appendChild(section);
    section.appendChild(p);
  }

// If the background is dark the text should be white, if the background is light the text should be black
const bgColor = document.querySelectorAll('section');
for (let item of bgColor) {
    let x = Math.floor(Math.random() * 360);
    let y = Math.floor(Math.random() * 100);
    let z = Math.floor(Math.random() * 100);
    item.style.background = 'hsl('+ x +','+ y +'%,'+ z +'%)';
    if (z > 50) {
    item.style.color = 'black';
    }
    else if (z <= 50) {
    item.style.color = 'white';
    }}