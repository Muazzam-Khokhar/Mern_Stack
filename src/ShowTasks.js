import UpdateTasks from './UpdateTasks';
import AddTasks from './AddTasks';
import { useState } from 'react';

const ShowTasks = () => {
    const [allTask, setAllTask] = useState([])
    const [isShow, setIsShow] = useState(true)  
    const [values, setValues] = useState({ task: '', index: '' })

    const deleteTasks = (index) => {
        const updatedTask = [...allTask];
        updatedTask.splice(index, 1);
        setAllTask(updatedTask);
    };
    const updateProp = ()=>{
        return<UpdateTasks allTask={allTask} setAllTask={setAllTask} values={values} setValues={setValues} isShow={isShow} setIsShow={setIsShow}/>
    }
    return (
        <>
            <div>
                <div>All Task</div>
                <div>
                    {allTask.length===0 && ( <div>
                    Task list empty
                    </div>)}
                    
                    {allTask.map((task, index) => (
                        <>
                            <li key={index}>
                                <div key={index}>
                                    {task}{" "}
                                    <button className="border-2 text-white bg-red-500" onClick={() => updateProp(task, index)}>
                                       Update
                                    </button>{" "}
                                    <button className="border-2 text-white bg-red-500" onClick={() => deleteTasks(index)} >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        </>
                    ))}
                    {!isShow ? (
                        <button className=' border-2 bg-red-400 text-white' onClick={()=>setIsShow(!isShow)}>Add New Task</button>
                    ): (
                        <>
                        <AddTasks allTask={allTask} setAllTask={setAllTask} isShow={isShow} setIsShow={setIsShow} />
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default ShowTasks