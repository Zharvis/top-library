const cards = document.querySelector(".cards");
const popupBtn = document.querySelector(".header__btn");
const popup = document.querySelector(".pop-up");
const abortBtn = document.querySelector(".pop-up__abort-btn");

popupBtn.addEventListener("click", () => popup.classList.add("show"));
abortBtn.addEventListener("click", () => popup.classList.remove("show"));

let myLibrary = [
  { title: "Hobbit", author: "Larry", pages: 123, isRead: true },
  { title: "Hobbit 2", author: "Larry", pages: 44, isRead: false },
  { title: "Hobbit 3: The Final", author: "Larry", pages: 678, isRead: false },
];

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

function addBookToDOM(book) {
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
}

function addBookToLibrary(book) {
  if (
    myLibrary.some(
      (myBook) =>
        myBook.title === book.title &&
        myBook.author === book.author &&
        myBook.pages === book.pages &&
        myBook.isRead === book.isRead
    )
  ) {
    console.log(`${book.title} by ${book.author} already in your library.`);
    return;
  }

  addBookToDOM(book);

  myLibrary.push(book);
}

function updateCards() {
  cards.innerHTML = "";
  myLibrary.forEach((book) => addBookToDOM(book));
}

updateCards();
