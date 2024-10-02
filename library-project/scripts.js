const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let book_section = document.querySelector(".book-section");

function displayBooks() {
  book_section.innerHTML = "";
  myLibrary.forEach((book) => {
    let book_card = document.createElement("div");
    book_card.className = "card";
    let book_text1 = document.createElement("div");
    book_text1.className = "book-text";
    book_text1.textContent = book.name;
    let book_text2 = document.createElement("div");
    book_text2.className = "book-text";
    book_text2.textContent = book.author;
    let book_text3 = document.createElement("div");
    book_text3.className = "book-text";
    book_text3.textContent = book.pages;
    book_card.appendChild(book_text1);
    book_card.appendChild(book_text2);
    book_card.appendChild(book_text3);
    let remove_btn = document.createElement("button");
    remove_btn.textContent = "Remove";
    remove_btn.className = "btn";
    remove_btn.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayBooks();
    });
    book_card.appendChild(remove_btn);
    book_section.appendChild(book_card);
  });
}

addBookToLibrary(new Book("book demo", "author demo", 1));

displayBooks();

const dialog = document.querySelector("dialog");
const add_btn = document.querySelector("#add-btn");
const submit_btn = document.querySelector("#submit-btn");
const cancel_btn = document.querySelector("#cancel-btn");

add_btn.addEventListener("click", () => {
  dialog.showModal();
});

submit_btn.addEventListener("click", () => {
  let name = document.querySelector("#name").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  addBookToLibrary(new Book(name, author, pages));
  console.log(myLibrary);
  dialog.close();
  displayBooks();
});

cancel_btn.addEventListener("click", () => {
  dialog.close();
});
