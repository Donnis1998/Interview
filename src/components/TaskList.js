import React, { useState } from 'react'
import Button from './Button'

export default function TaskList({ task, completed, index, taskList, setTaskList }) {


    const [statusTask, setStatusTask] = useState(completed)


    const _handleCompelteTask = () => {

        setStatusTask(!statusTask)

        let auxlist = [...taskList]
        auxlist[index].completed = !statusTask
        setTaskList(auxlist)

        //alert('estado de la tarea' + (!statusTask))
    }

    const _deleteTask = () => {

        let result = window.confirm('Estas seguro de que deseas eliminar la tarea?');

        if (result) {
            let auxlist = [...taskList]
            auxlist.splice(index, 1)
            setTaskList(auxlist)
        }

        //alert('se elimina la tarea: ' + index)
    }


    return (
        <div className="task-item" >
            <input type="checkbox" checked={statusTask} id={index} onChange={_handleCompelteTask} />
            <span style={{ color: completed ? 'green' : 'black' }}>{task} {completed ? ' - Completada' : null}</span>
            <Button action='Eliminar' onClick={() => { _deleteTask() }} />
        </div>
    )
}
