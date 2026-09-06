//1
// const task1 = (): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello Async");
//       }, 2000);
//     });
//   };
  
//   console.log("[Task 1] Đang chờ 2 giây...");
//   task1().then((result: string) => {
//     console.log("-> Kết quả:", result);
//   });


//2
// const task2 = (): Promise<number> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(10);
//       }, 1000);
//     });
//   };
  
//   console.log("[Task 2] Đang chờ 1 giây...");
//   task2().then((result: number) => {
//     console.log("-> Kết quả:", result);
//   });

//3
// const task3 = (): Promise<never> => {
//     return new Promise((_, reject) => {
//       setTimeout(() => {
//         reject(new Error("Something went wrong"));
//       }, 1000);
//     });
//   };
  
//   // Chạy và in kết quả ra terminal
//   console.log("[Task 3] Đang chờ 1 giây...");
//   task3()
//     .then((result) => console.log("-> Kết quả:", result))
//     .catch((error: Error) => {
//       console.error("-> Lỗi bắt được:", error.message);
//     });

//4
// const getRandomNumber: Promise<number> = new Promise((resolve, reject) => {
//     const num = Math.random();
//     if (num > 0.3) {
//       resolve(num);
//     } else {
//       reject(new Error("Số ngẫu nhiên quá nhỏ (<= 0.3)"));
//     }
//   });
  
//   console.log("[Task 4] Xử lý số ngẫu nhiên:");
//   getRandomNumber
//     .then((num: number) => {
//       console.log("-> Thành công! Số nhận được:", num);
//     })
//     .catch((err: Error) => {
//       console.error("-> Thất bại! Lỗi:", err.message);
//     });

//5

// const simulateTask = (time: number): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Task done");
//       }, time);
//     });
//   };
  
//   console.log("[Task 5] Đang chạy simulateTask(1500ms)...");
//   simulateTask(1500).then((result: string) => {
//     console.log("-> Kết quả Task 5:", result);
//   });

//6
// const simulateTask = (time: number): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Task hoàn thành trong ${time}ms`);
//       }, time);
//     });
//   };
  
//   const runTask6 = async (): Promise<void> => {
//     console.log("[Task 6] Đang chạy song song 3 task bằng Promise.all()...");
  
//     const p1 = simulateTask(1000);
//     const p2 = simulateTask(1500);
//     const p3 = simulateTask(2000);
  
//     const results: string[] = await Promise.all([p1, p2, p3]);
//     console.log("-> Kết quả mảng trả về:", results);
//   };
  
//   runTask6();

//7
// const pFast = new Promise<string>((resolve) =>
//   setTimeout(() => resolve("Fast Task thắng (500ms)"), 500)
// );

// const pSlow = new Promise<string>((resolve) =>
//   setTimeout(() => resolve("Slow Task thắng (2000ms)"), 2000)
// );

// console.log("[Task 7] Đang đua giữa Fast Task và Slow Task...");
// Promise.race([pFast, pSlow]).then((winner: string) => {
//   console.log("-> Task về đích đầu tiên:", winner);
// });

//8
// console.log("[Task 8] Đang thực thi chuỗi Promise chain...");

// Promise.resolve(2)
//   .then((val: number) => {
//     console.log("   Bước 1 (Bình phương 2):", val * val);
//     return val * val;
//   })
//   .then((val: number) => {
//     console.log("   Bước 2 (Nhân đôi 4):", val * 2);
//     return val * 2;
//   })
//   .then((val: number) => {
//     console.log("   Bước 3 (Cộng thêm 5):", val + 5);
//     return val + 5;
//   })
//   .then((finalResult: number) => {
//     console.log("-> Kết quả cuối cùng:", finalResult);
//   });

//9
// const filterEvenNumbers = (numbers: number[]): Promise<number[]> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const evens = numbers.filter((n) => n % 2 === 0);
//         resolve(evens);
//       }, 1000);
//     });
//   };
  
//   const inputData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
//   console.log("[Task 9] Mảng ban đầu:", inputData);
//   filterEvenNumbers(inputData).then((evenNumbers: number[]) => {
//     console.log("-> Mảng các số chẵn sau khi lọc (sau 1s):", evenNumbers);
//   });

//10
const simulateTask = (time: number): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task thành công!");
      }, time);
    });
  };
  
  console.log("[Task 10] Bắt đầu chạy Promise...");
  
  simulateTask(1000)
    .then((res: string) => {
      console.log("-> Vào block .then():", res);
    })
    .catch((err: Error) => {
      console.error("-> Vào block .catch():", err.message);
    })
    .finally(() => {
      console.log("-> Vào block .finally(): Done");
    });
