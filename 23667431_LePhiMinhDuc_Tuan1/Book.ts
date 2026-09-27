class Book {
    title: string;
    author: string;
    year: number;
  
    constructor(title: string, author: string, year: number) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getDetails(): void {
      console.log(`Sách: ${this.title} - Tác giả: ${this.author} (${this.year})`);
    }
  }
  
  const book = new Book("Lập trình TypeScript", "Nguyễn Văn A", 2024);
  book.getDetails();