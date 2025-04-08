//arr of books
const myLibrary = [];

//constructor for Book object
function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

//funciton to create new Book and add to library
function addBooktoLibrary(name, author, pages) {
  const newBook = new Book(name, author, pages);
  myLibrary.push(newBook);
}

//debugging console.log
addBooktoLibrary("The Great Gatsby", "F. Scott Fitzgerald", 245);
console.log(myLibrary);
addBooktoLibrary("The Innocent", "John Grisham", 310);

//get div
const div = document.querySelector("div");

//loop for arr then each obj
for (let i = 0; i < myLibrary.length; i++) {
  const card = document.createElement("div");
  card.setAttribute("class", "book");
  for (const key in myLibrary[i]) {
    if (key == "id") {
      continue;
    }
    const cardInfo = document.createElement("div");
    cardInfo.setAttribute("class", "info");
    cardInfo.textContent += myLibrary[i][key];
    card.appendChild(cardInfo);
    console.log(cardInfo);
  }
  div.appendChild(card);
}
