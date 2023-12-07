import React, { useState } from "react";

const AddTasks = ({ allTask, setAllTask, isShow, setIsShow }) => {
  const [addNewTask, setAddNewTask] = useState("");
  const addTask = () => {
    if (addNewTask.trim() === "") {
      return;
    }
    const updatedTasks = [...allTask, addNewTask];
    setAllTask(updatedTasks);
    // Clear the addNewTask state, not allTask.
    setAddNewTask("");
    setIsShow(!isShow)
  };
  return (
    <div>
      {isShow && (
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
    </div>
  );
};

export default AddTasks;
