import Task from "./Task"

export default function Tasks({tasks, onDelete, onToggle}) {
  return (
    <>
        <div className="myTaskDiv">
        {tasks.map((task) => (
        <Task 
        key={task.id} 
        task={task} 
        onDelete={onDelete} 
        onToggle={onToggle}/>
        ))}
        </div>
    </>
    
  )
}
