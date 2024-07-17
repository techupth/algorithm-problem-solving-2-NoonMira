function findBookIndex(books, searchTitle) {
  for(let i = 1; i < books.length; i++){
    if(books[i].title == searchTitle){
      return i
    }
  }
  return -1
}
books=[
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" }
];
searchTitle="Gone with the Wind"
console.log(findBookIndex(books, searchTitle))