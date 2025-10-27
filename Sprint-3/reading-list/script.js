// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function renderReadingList() {
  let readingList = document.getElementById("reading-list");

  books.forEach((book) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");

    img.src = book.bookCoverImage;

    p.textContent = `${book.title} by ${book.author}`;

    const backgroundColor = book.alreadyRead
      ? "rgb(0, 128, 0)"
      : "rgb(255, 0, 0)";
    li.style.backgroundColor = backgroundColor;
    li.setAttribute("style", `background-color: ${backgroundColor};`);

    li.appendChild(p);
    li.appendChild(img);
    readingList.appendChild(li);
    console.log(li);
  });
}

renderReadingList();
