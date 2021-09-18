import React from 'react'

const Task = ({tache,del,complete}) => {
    return (
        <div >
            <h1 id={tache.isDone?"comp":null}>{tache.action}</h1>
            <button className="boton1" onClick={()=>del(tache.id)}>Delete</button>
            <button className="boton2" onClick={()=>complete(tache.id)}>{tache.isDone?"Undo":"Complete"}</button>
        </div>
    )
}

export default Task
