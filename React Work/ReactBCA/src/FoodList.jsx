const FoodList = () => {
let foodList = ['Pani Puri', 'Momos', 'Pizza', 'Loki Sabji', 'Chole Bhature', 'Dal Makhni - Naan', 'Pav Bhaji', 'Dhokla', 'Pepsi'];
    return (
    <div>
        <ul>
            {foodList.map(item=> <li>{item}</li> )}
       </ul>
    </div>
  )
}
export default FoodList
