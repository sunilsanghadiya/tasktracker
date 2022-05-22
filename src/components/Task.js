import { FaTimes } from 'react-icons/fa'

export default function Task ({task, onDelete, onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={() => onToggle(task.id)}>
        <h3 className='taskLists'>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
         <p>{task.day}</p>

    </div>
  )
}


