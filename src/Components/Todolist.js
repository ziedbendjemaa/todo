import React from 'react'
import Task from './Task'

const Todolist = ({list,del,comp}) => {
    
    return (
        <div>
            {
                list.map(
                    (el,i)=><Task tache={el} del={del} complete={comp} key={i} />
                )

            }
        </div>
    )
}

export default Todolist
