import React from "react";
import Hello from "./Hello";
import Home from "./Home";
import { a, b } from "./Home";
import Image from "./Image";
import List from "./List";
import RandomNum from "./RandomNum";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBtn from "./MyBtn";
import FoodList from "./FoodComponent/FoodList";
import TodoApp from "./TodoComponent/TodoApp";
import EmpData from "./EmpData";

function App() {
  
  let handleOnClick = () => {
    alert("Hello here..");
  };
  
  return (
    <>
      {/* <TodoApp></TodoApp>    */}
      <FoodList></FoodList>

      {/* <button onClick={()=>handleOnClick()}>Click Me</button> */}

      {/* <EmpData empName="Vipin" empAge="24" empCity="Delhi"> </EmpData> */}

      {/* <MyBtn></MyBtn> */}

      {/* <RandomNum></RandomNum>
     <RandomNum></RandomNum>
     <RandomNum></RandomNum>
     <RandomNum></RandomNum>
     <RandomNum></RandomNum>
     <RandomNum></RandomNum> */}

      {/* <List></List>
      <List />
      <List></List>
      <h1> Hello World</h1>
      <p> Para Text</p>
      <Hello></Hello>
      <Home></Home>
      <span>a = {a}</span>
      <br />
      <Image></Image> */}
    </>
  );
}
export default App;
