import React, { useState } from 'react'
import Button from './Button'

export default function Form({ taskList, setTaskList }) {


    const [task, setTask] = useState('')

    const _AddTask = (e) => {
        e.preventDefault()


        if (task === '') {
            alert('La tarea no puede ser un campo vacio')
            return
        }

        let auxlist = [...taskList]
        auxlist.push({ task, completed: false })
        setTaskList(auxlist)
        setTask('')
        //console.log('Lista de tareas agregadas', taskList)


    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Tareas a hacer</h1>
            <form onSubmit={_AddTask}>
                <label for="task" style={{ marginRight: '10px' }}>
                    <span style={{ marginRight: '10px' }}>Nueva Tarea: </span>
                    <input value={task} onChange={e => setTask(e.target.value)} type="text" placeholder='Agregue una tarrea' />
                </label>
                <Button action='Agregar' onClick={(e) => { _AddTask(e) }} />
                {/* <input type="submit" value="Agregar" /> */}
            </form>
        </div>
    )
}
