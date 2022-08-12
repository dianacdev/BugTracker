import React from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./styles.css"
import {Bug} from "../model";

type Props ={
todo:Bug;
bugs:Bug[];
setBugs:React.Dispatch<React.SetStateAction<Bug[]>>;
};

const SingleBug = ({todo, bugs, setBugs}:Props) => {
  return (
    <form className="BugsSingle">
        <span className="BugsSingleText">
            {todo.todo}
        </span>
        <div>
            <span className='icon'><EditTwoToneIcon/></span>
            <span className='icon'><DeleteSweepIcon/></span>
            <span className='icon'><CheckCircleIcon/></span>
        </div>
    </form>
  )
}

export default SingleBug