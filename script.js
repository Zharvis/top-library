const cards = document.querySelector(".cards");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  let readInfo = this.isRead ? "read" : "not read yet";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readInfo}.`;
};

function addBookToLibrary(book) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("card");

  let bookTitle = document.createElement("h2");
  bookTitle.classList.add("card__title");
  bookTitle.textContent = book.title;

  let bookAuthor = document.createElement("p");
  bookAuthor.classList.add("card__author");
  bookAuthor.textContent = book.author;

  let bookPages = document.createElement("p");
  bookPages.classList.add("card__pages");
  bookPages.textContent = book.pages;

  let bookStatus = document.createElement("div");
  bookStatus.classList.add("card__status");
  bookStatus.textContent = book.isRead ? "x" : "";

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookStatus);

  cards.appendChild(bookCard);

  myLibrary.push(book);
}
