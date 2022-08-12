import React from 'react'
import {Bug} from "../model"
import SingleBug from './SingleBug';
import "./styles.css"

interface Props{
    bugs: Bug[];
    setBugs: React.Dispatch<React.SetStateAction<Bug[]>>;
}

const BugList: React.FC<Props> = ({bugs, setBugs}) => {
  return (
    <div className='bugs'>
        {bugs.map(todo=>(
            <SingleBug todo={todo} key={todo.id}
            bugs={bugs}
            setBugs={setBugs}
            />
        ))}
    </div>
  )
}

export default BugList