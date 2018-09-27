class Adapter {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path) {
    return fetch(path).then(res => res.json());
  }

  getBooks() {
    return this.get(this.baseURL);
  }

  getOneBook(id) {
    return this.get(`${this.baseURL}/${id}`);
  }

  patchUser(id, user) {
    return fetch(`${this.baseURL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json',
        Accept: "application/json"
      }
    }).then(res => res.json())
  }

}
