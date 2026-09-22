import AppName from "./AppName";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import TodoInput from "./TodoInput";

let TodoApp = ()=>{
 return <>
    <AppName />
    <div className="container">
       <TodoInput></TodoInput>
       <Task1></Task1>
       <Task2></Task2>
       <Task3></Task3>    
    </div>
 </>
}

export default TodoApp;