class Product {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  
  const products: Product[] = [
    new Product("Chuột", 50),
    new Product("Bàn phím", 150),
    new Product("Màn hình", 300),
  ];
  
  const expensiveProducts = products.filter(p => p.price > 100);
  console.log("Các sản phẩm giá > 100:", expensiveProducts);