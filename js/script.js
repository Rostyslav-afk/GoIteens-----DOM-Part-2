// const titleEl = document.createElement("h1");
// titleEl.textContent = "hallo";
// titleEl.classList.add("title");
// const pageEl = document.querySelector("body");
// // pageEl.append(titleEl);
// const textEl = document.createElement("p");
// textEl.textContent = "world";
// textEl.classList.add("text");
// const descEl = document.createElement("p");
// descEl.textContent = "hallo!!!!!";
// descEl.classList.add("desc");
// pageEl.prepend(textEl, titleEl);

// // titleEl.before(descEl);
// titleEl.after(descEl);

// console.log(pageEl)

const body = document.querySelector("body");
const listElement = document.createElement("ul");
console.log(listElement);
body.prepend(listElement)

const itemElement = document.createElement("li");
listElement.append(itemElement)

const textElement = document.createElement("p");
textElement.textContent = "HTML";
itemElement.appendChild(textElement)