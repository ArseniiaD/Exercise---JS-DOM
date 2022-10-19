//Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
 let addTitle = document.querySelectorAll('.important');
for (let item of addTitle) {
item.setAttribute ("title", "This is an important item");
console.log(item);
}


//Select all the img tags and loop through them. If they have no important class, turn their display property to none
let images = document.querySelectorAll('img');
for (let elem of images) {
    if (elem.classList.contains("important")) {
       elem.style.display = "none";
    }
}

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
let ps = document.querySelectorAll('p');
for (let variant of ps) {
    console.log(variant.innerHTML);
    console.log(variant.className)
} 

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
    
let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
for (let part of paragraphs) {
    if (!part.className) {
        let x = Math.floor(Math.random() * 255);
        let y = Math.floor(Math.random() * 255);
        let z = Math.floor(Math.random() * 255);
    part.style.color = 'rgb('+ x +','+ y +','+ z +')';
    }
}
