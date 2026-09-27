class Book1 {
    constructor(public title: string) {}
  }
  
  class User {
    constructor(public name: string) {}
  }
  
  class Library {
    private books: Book[] = [];
    private users: User[] = [];
  
    addBook(book: Book): void {
      this.books.push(book);
      console.log(`Đã thêm sách: ${book.title}`);
    }
  
    addUser(user: User): void {
      this.users.push(user);
      console.log(`Đã thêm người dùng: ${user.name}`);
    }
  }
  
  const lib = new Library();
  lib.addBook(new Book1("Lập trình TypeScript"));
  lib.addUser(new User("Nguyễn Văn A"));