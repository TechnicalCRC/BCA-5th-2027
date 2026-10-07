import { useState } from "react";
import FoodItem from "./FoodItem";

const FoodList = () => {
//  let foodList = ["Pani Puri", "Momos", "Pizza", "Loki Sabji"];
  let foodList = ['Pepsi'];

let [list, setList] = useState([]);

  let handleOnChange = () => {
    if (event.key === "Enter") 
      {
        let newFood = event.target.value;
      console.log(newFood);
      let newList = [...list, newFood];
      setList(newList)
    }
  };

  return (
    <div className="w-50">
      <h1 className="bg-info text-center text-danger">Food List</h1>

      <input type="text" onKeyDown={handleOnChange} className="mx-5 w-75" />
       
      {list.length === 0 && <h2 className="text-center">I am hungry .... <br/> Give Me food...</h2>}
       
      <ul className="list-group w-75 mx-5">
        {list.map((item) => (
          <FoodItem key={item} item={item}></FoodItem>
        ))}
      </ul>
    </div>
  );
};
export default FoodList;
