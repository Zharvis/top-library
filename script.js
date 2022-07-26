function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    let readInfo = this.isRead ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readInfo}.`;
  };
}
