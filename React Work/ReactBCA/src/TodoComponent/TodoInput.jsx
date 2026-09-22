const TodoInput = ()=>{
    return <>
       <div className="row">
          <div className="col-5">
              <input className="w-100" type="text" id="" placeholder="Enter Todo Here.." />
          </div>
          <div className="col-5">
              <input className="w-100" type="date" id="" />
          </div>
          <div className="col-2">
              <button className="btn btn-success w-100">Add</button>
          </div>
        </div>
    </>
}
export default TodoInput;