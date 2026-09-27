//21
// interface Todo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
//   }
  
//   const fetchTodo = async (): Promise<void> => {
//     console.log("[Task 21] Đang gọi API lấy Todo #1...");
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data: Todo = await response.json();
//       console.log("-> Kết quả dữ liệu nhận được:", data);
//     } catch (error: any) {
//       console.error("-> Lỗi gọi API:", error.message);
//     }
//   };
  
//   fetchTodo();

//22
// interface Todo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
//   }
  
//   const fetchMultipleTodos = async (ids: number[]): Promise<void> => {
//     console.log(`[Task 22] Đang gọi API lấy danh sách Todo IDs: [${ids.join(", ")}]...`);
    
//     const promises = ids.map(async (id) => {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//       return (await response.json()) as Todo;
//     });
  
//     const results = await Promise.all(promises);
//     console.log("-> Kết quả thu được từ nhiều API:");
//     results.forEach((todo) => console.log(`   ID ${todo.id}: ${todo.title}`));
//   };
  
//   fetchMultipleTodos([1, 2, 3]);

//23
// interface Todo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
//   }
  
//   const getCompletedTodos = async (): Promise<Todo[]> => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const todos: Todo[] = await response.json();
    
//     return todos.filter((todo) => todo.completed);
//   };
  
//   const runTask23 = async (): Promise<void> => {
//     console.log("[Task 23] Lấy danh sách Todos và lọc các công việc ĐÃ HOÀN THÀNH...");
//     const completedList = await getCompletedTodos();
//     console.log(`-> Tổng số công việc đã hoàn thành: ${completedList.length}`);
//     console.log("-> Top 3 công việc mẫu:", completedList.slice(0, 3));
//   };
//   runTask23();

//24
// interface NewPost {
//     title: string;
//     body: string;
//     userId: number;
//   }
  
//   const postData = async (): Promise<void> => {
//     console.log("[Task 24] Đang gửi POST request tạo bài viết mới...");
    
//     const payload: NewPost = {
//       title: "Học React Native",
//       body: "Thành thạo Async/Await và Fetch API trong TypeScript",
//       userId: 1,
//     };
  
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//         body: JSON.stringify(payload),
//       });
  
//       const data = await response.json();
//       console.log("-> Phản hồi từ Server (Thành công):", data);
//     } catch (error: any) {
//       console.error("-> Lỗi POST data:", error.message);
//     }
//   };
  
//   postData();

//25
const downloadFile = (fileName: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Tải thành công file: ${fileName}`);
      }, 3000);
    });
  };
  
  const runTask25 = async (): Promise<void> => {
    console.log("[Task 25] Bắt đầu tải file 'document.pdf' (chờ 3 giây)...");
    const message = await downloadFile("document.pdf");
    console.log("-> Thông báo:", message);
  };
  
  runTask25();
