const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfReadBooks = numberOfBooksRead(library);
console.log("Number of read books:", numberOfReadBooks);

const numberOfBooksRead = (library) => {
  // write your code here
	library.reduce((count, book) => (book.readingStatus ? count + 1 : count), 0);
};

// Do not change the code below

alert(numberOfBooksRead());
