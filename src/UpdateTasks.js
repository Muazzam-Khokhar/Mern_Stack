import { useState } from "react"

const UpdateTasks = (values, setValues,allTask, setAllTask ,isShow, setIsShow) => {
    const [updateValue, setUpdateValue] = useState({ task: '', index: '' })
  
    const updatedTasks = (task, index) => {
        setIsShow(false)
        setUpdateValue({ task, index })
        console.log(task, "upadte", index)

    }
    const handleUpdate = () => {
        const updatedTask = [...allTask];
        updatedTask[updateValue.index] = updateValue.task
        setAllTask(updatedTask)
        setIsShow(!isShow)
    }
  return (
    <>
            {!setIsShow && (
                <div>
                    <div>Update Task</div>
                    <div>
                        <input type="text" className="border-2 border-black" value={updateValue.task} onChange={(e) => setUpdateValue({ ...updateValue, task: e.target.value })}></input>
                        <button type="Submit" className="border-2 border-black" onClick={handleUpdate}>
                            Update Task
                        </button>
                    </div>
                </div>
            )}
    </>
  )
}

export default UpdateTasks