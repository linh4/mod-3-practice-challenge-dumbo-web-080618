class Book {
  constructor(book, adapter) {
    this.id = book.id;
    this.title = book.title;
    this.description = book.description;
    this.image = book.img_url;
    this.users = book.users;
    this.adapter = adapter;
  }

  container() {
    const li = document.createElement('li');
    li.innerText = this.title;
    li.addEventListener('click', () => this.getOneBook());
    return li;
  }

  renderContainer() {
    const list = document.querySelector('#list');
    list.append(this.container())
  }

  getOneBook() {
    let showBook = document.querySelector('#show-panel');
    showBook.innerHTML = `
      <h1>${this.title}</h1>
      <img src=${this.image}>
      <p>${this.description}</p>
    `
    showBook.append(this.ulList(), this.createBtn())
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
      this.readBook();
      let ul = showBook.querySelector('ul');
      let li = document.createElement('li');
      let me = {id:1, username:"pouros"};
      li.innerText = me.username;
      ul.append(li);
      return ul
    })
    return showBook;
  }

  liList(user){
    let li = document.createElement('li');
    li.innerText = user.username;
    return li;
  }

  ulList() {
    let ul = document.createElement('ul');
    this.users.forEach(user => {
      ul.append(this.liList(user))
    });
    return ul;
  }

  createBtn() {
    const button = document.createElement('button');
    button.innerText = 'Read Book';
    return button;
  }

  readBook() {
    let arr = {users: []};
    this.users.forEach(user => {
      arr["users"].push(user);
    })
    let userMe = {id:1, username:"pouros"}
    arr["users"].push(userMe);
    this.adapter.patchUser(this.id, arr)
  }


}
