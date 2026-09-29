import FoodItem from "./FoodItem";

const FoodList = () => {
  let foodList = [
    "Pani Puri",
    "Momos",
    "Pizza",
    "Loki Sabji",
    "Chole Bhature",
    "Dal Makhni - Naan",
    "Pav Bhaji",
    "Dhokla",
    "Pepsi",
  ];
  let handleOnChange = ()=>{
   console.log(event);
  }

  return (
    <div>
      <h1 className="bg-info text-center text-danger">Food List</h1>
      
      <input type="text" onChange={handleOnChange} />
      
      <ul className="list-group w-50 mx-5">
        {foodList.map((item) => 
          <FoodItem item={item}></FoodItem>
        )}
      </ul>
    </div>
  );
};
export default FoodList;
