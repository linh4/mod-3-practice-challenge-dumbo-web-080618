const URL = 'http://localhost:3000/books';

document.addEventListener("DOMContentLoaded", function() {

  const adapter = new Adapter(URL);

  adapter.getBooks().then(data => {
    data.forEach(book => {
      const bookList = new Book(book, adapter);
      bookList.renderContainer();
    })
  })

});
