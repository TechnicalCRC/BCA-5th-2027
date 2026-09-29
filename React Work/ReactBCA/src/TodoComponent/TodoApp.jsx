import AppName from "./AppName";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

let TodoApp = () => {
  let todoList = [];
   //   let todoList = [
   //    {
   //      todoName: "Complete the Todo App",
   //      todoDate: "29-09-2026",
   //    },
   //    {
   //      todoName: "Buy Samosa",
   //      todoDate: "30-09-2026",
   //    },
   //    {
   //      todoName: "Buy Tea",
   //      todoDate: "30-09-2026",
   //    },
   //  ];

//   if (todoList.length === 0) {
//     return <h1>No Task Peding</h1>;
//   }

  return (
    <>
      <AppName />
      <div className="container">
        <TodoInput></TodoInput>
        
        {todoList.length === 0 && <h1 className="text-center"> No task pending <br /> Enjoy ur day :) </h1>}
        
        {todoList.map((item) => (
          <TodoItem
            todoName={item.todoName}
            todoDate={item.todoDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoApp;
