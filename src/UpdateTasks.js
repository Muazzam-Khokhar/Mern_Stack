import React from "react";
const UpdateTasks = ({values, setValues,allTask, setAllTask ,updateShow, setUpdateShow}) => {
    console.log("I'm Called",values.task);
  
    const updatedTasks = (task, index) => {
        setValues({ task, index })
        console.log(task, "upadte", index)

    }
    
    const handleUpdate = () => {
        const updatedTask = [...allTask];
        updatedTask[values.index] = values.task
        setAllTask(updatedTask)
        setUpdateShow(!updateShow)
    }
  return (
    <>
            {updateShow && (
                <div>
                    <div>Update Task</div>
                    <div>
                        <input type="text" className="border-2 border-black" value={values.task} onChange={(e) => setValues({ ...values, task: e.target.value })}></input>
                        <button type="Submit" className="border-2 border-black" 
                        onClick={handleUpdate}
                        >
                            Update Task
                        </button>
                    </div>
                </div>
            )}
    </>
  )
}

export default UpdateTasks