import { useState } from "react";

function App() {
  const [allTask, setAllTask] = useState([]);
  const [addNewTask, setAddNewTask] = useState("");
  const [updateShow, setUpdateShow] = useState(true)
  const [updateValue, setUpdateValue] = useState({task:'',index:''})
  const addTask = () => {
    if (addNewTask.trim() === "") {
      return;
    }
    const updatedTasks = [...allTask, addNewTask];
    setAllTask(updatedTasks);
    // Clear the addNewTask state, not allTask.
    setAddNewTask("");
  };
  const updatedTasks = (task, index) => {
    setUpdateShow(false)
    setUpdateValue({task,index})
    console.log(task, "upadte", index)

  }
  const deleteTasks = (index) => {
    const updatedTask = [...allTask];
    updatedTask.splice(index, 1);
    setAllTask(updatedTask);
  };
  const handleUpdate = () => {
    const updatedTask = [...allTask];
    updatedTask[updateValue.index] = updateValue.task
    setAllTask(updatedTask)
  }


  return (
    <>
      <div>
        <div>All Task</div>
        <div>
          {allTask.map((task, index) => (
            <>
              <li key={index}>
                <div key={index}>
                  {task}{" "}
                  <button className="border-2 text-white bg-red-500" onClick={() => updatedTasks(task,index)}>
                    Update
                  </button>{" "}
                  <button className="border-2 text-white bg-red-500" onClick={() => deleteTasks(index)} >
                    Delete
                  </button>
                </div>
              </li>
            </>
          ))}
        </div>
      </div>
      {updateShow && (

        <div>
          <div>Add New Task</div>
          <div>
            <input
              type="text"
              className="border-2 border-black"
              value={addNewTask}
              onChange={(e) => setAddNewTask(e.target.value)}
            ></input>
            <button
              type="Submit"
              className="border-2 border-black"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
      )}
      {!updateShow&& (
        <div>
          <div>Update Task</div>
          <div>
            <input type="text" className="border-2 border-black" value={updateValue.task}   onChange={(e) => setUpdateValue({ ...updateValue, task: e.target.value })}></input>
            <button type="Submit" className="border-2 border-black" onClick={handleUpdate}>
              Update Task
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
