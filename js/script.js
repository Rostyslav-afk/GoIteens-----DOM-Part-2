// // const titleEl = document.createElement("h1");
// // titleEl.textContent = "hallo";
// // titleEl.classList.add("title");
// // const pageEl = document.querySelector("body");
// // // pageEl.append(titleEl);
// // const textEl = document.createElement("p");
// // textEl.textContent = "world";
// // textEl.classList.add("text");
// // const descEl = document.createElement("p");
// // descEl.textContent = "hallo!!!!!";
// // descEl.classList.add("desc");
// // pageEl.prepend(textEl, titleEl);

// // // titleEl.before(descEl);
// // titleEl.after(descEl);

// // console.log(pageEl)

// const body = document.querySelector("body");
// const listElement = document.createElement("ul");
// console.log(listElement);
// body.prepend(listElement)

// const itemElement = document.createElement("li");
// listElement.append(itemElement)

// const textElement = document.createElement("p");
// textElement.textContent = "HTML";
// itemElement.appendChild(textElement)

// const h1 = document.createElement("h1");
// h1.textContent = "Hello";
// console.log(h1.innerHTML);
// h1.innerHTML = "Hello 2";
// console.log(h1.innerHTML);

const section = document.querySelector("section");
console.log(section.innerHTML);

section.innerHTML = `<h1>Hello World</h1> <a href="https://youtube.com" target"_blank">Link</a>`;
console.log(section);

