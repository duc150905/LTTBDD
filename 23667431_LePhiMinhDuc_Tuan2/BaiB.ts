//11
// const task1 = (): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello Async");
//       }, 2000);
//     });
//   };
  
//   const runTask11 = async (): Promise<void> => {
//     console.log("[Task 11] Đang chờ 2 giây...");
//     const result: string = await task1();
//     console.log("-> Kết quả Task 11:", result);
//   };
  
// runTask11();

//12
// const simulateTask1 = (time: number): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Task done in ${time}ms`);
//       }, time);
//     });
//   };
  
//   const runTask12 = async (): Promise<void> => {
//     console.log("[Task 12] Gọi simulateTask(2000)...");
//     const message: string = await simulateTask1(2000);
//     console.log("-> Kết quả Task 12:", message);
//   };
  
//   runTask12();

//13
// const fetchErrorTask = (): Promise<never> => {
//     return new Promise((_, reject) => {
//       setTimeout(() => {
//         reject(new Error("Lỗi kết nối Server!"));
//       }, 1000);
//     });
//   };
  
//   const runTask13 = async (): Promise<void> => {
//     console.log("[Task 13] Đang gọi tác vụ có thể gây lỗi...");
//     try {
//       await fetchErrorTask();
//     } catch (error: any) {
//       console.error("-> [Đã bắt lỗi thành công]:", error.message);
//     } finally {
//       console.log("-> Hoàn tất quá trình xử lý (finally)");
//     }
//   };
  
//   runTask13();

//14
// const multiplyByThree = async (num: number): Promise<number> => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return num * 3;
//   };
  
//   const runTask14 = async (): Promise<void> => {
//     console.log("[Task 14] Đang tính toán (chờ 1s)...");
//     const result: number = await multiplyByThree(5);
//     console.log("-> Kết quả (5 * 3):", result);
//   };
  
//   runTask14();

//15
// const stepTask = (stepName: string, delay: number): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(`Hoàn thành ${stepName}`), delay);
//     });
//   };
  
//   const runTask15 = async (): Promise<void> => {
//     console.log("[Task 15] Chạy tuần tự (Sequential)...");
    
//     const step1 = await stepTask("Bước 1", 1000);
//     console.log("->", step1);
  
//     const step2 = await stepTask("Bước 2", 1000);
//     console.log("->", step2);
  
//     const step3 = await stepTask("Bước 3", 1000);
//     console.log("->", step3);
  
//     console.log("-> TẤT CẢ BƯỚC ĐÃ XONG!");
//   };
  
//   runTask15();

//16
// const fetchService = (name: string, delay: number): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(`Data từ ${name}`), delay);
//     });
//   };
  
//   const runTask16 = async (): Promise<void> => {
//     console.log("[Task 16] Chạy song song (Parallel) bằng Promise.all()...");
  
//     const task1 = fetchService("Service A", 1000);
//     const task2 = fetchService("Service B", 2000);
//     const task3 = fetchService("Service C", 1500);
//     const results: string[] = await Promise.all([task1, task2, task3]);
//     console.log("-> Kết quả gom lại:", results);
//   };
  
//   runTask16();

//17
// const createDelayPromise = (id: number, ms: number): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(`Kế thừa dữ liệu Item ${id}`), ms);
//     });
//   };
  
//   const runTask17 = async (): Promise<void> => {
//     const promiseList: Promise<string>[] = [
//       createDelayPromise(1, 1000),
//       createDelayPromise(2, 1500),
//       createDelayPromise(3, 500),
//     ];
  
//     console.log("[Task 17] Duyệt mảng Promises bằng 'for await...of':");
//     for await (const result of promiseList) {
//       console.log("-> Bắt được:", result);
//     }
//   };
  
//   runTask17();

//18
// interface User {
//     id: number;
//     name: string;
//     email: string;
//   }
  
//   const fetchUser = async (id: number): Promise<User> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           id,
//           name: `User_${id}`,
//           email: `user${id}@example.com`,
//         });
//       }, 1000);
//     });
//   };
  
//   const runTask18 = async (): Promise<void> => {
//     console.log("[Task 18] Đang gọi API fetchUser(1)...");
//     const user: User = await fetchUser(1);
//     console.log("-> Dữ liệu User thu được:", user);
//   };
  
//   runTask18();

//19
// interface User {
//     id: number;
//     name: string;
//     email: string;
//   }
  
//   const fetchUser = (id: number): Promise<User> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ id, name: `User_${id}`, email: `user${id}@example.com` });
//       }, 1000);
//     });
//   };
  
//   const fetchUsers = async (ids: number[]): Promise<User[]> => {
//     const userPromises = ids.map((id) => fetchUser(id));
//     return await Promise.all(userPromises);
//   };
  
//   const runTask19 = async (): Promise<void> => {
//     console.log("[Task 19] Lấy danh sách Users theo danh sách IDs [101, 102, 103]...");
//     const users: User[] = await fetchUsers([101, 102, 103]);
//     console.log("-> Danh sách Users thu được:", users);
//   };
  
//   runTask19();

//20
const slowApiCall = (): Promise<string> => {
    return new Promise((resolve) => {
      // API phản hồi mất 3 giây (Lâu hơn timeout 2s)
      setTimeout(() => resolve("Dữ liệu API muộn"), 3000);
    });
  };
  
  const withTimeout = <T>(promise: Promise<T>, timeoutMs: number): Promise<T> => {
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error(`[Timeout Error] API quá thời gian phản hồi (${timeoutMs}ms)!`));
      }, timeoutMs);
    });
  
    return Promise.race([promise, timeoutPromise]);
  };
  
  const runTask20 = async (): Promise<void> => {
    console.log("[Task 20] Đang gọi API với cơ chế Timeout 2000ms...");
    try {
      const data = await withTimeout(slowApiCall(), 2000);
      console.log("-> Kết quả:", data);
    } catch (error: any) {
      console.error("-> Bắt lỗi thành công:", error.message);
    }
  };
  
  runTask20();