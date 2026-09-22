const Task1 = () => {
let todoName = "Complete the Todo App";
let todoDate = "22-09-2026"; 

    return (
    <>
      <div className="row mt-2">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger w-100">Delete</button>
        </div>
      </div>
    </>
  );
};

export default Task1;
