const Task3 = ({todoName, todoDate}) => {
  
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

export default Task3;
