import React, {useRef} from 'react'
import './styles.css'

interface Props{
  todo:string;
  setBug:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo,setBug, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" 
      onSubmit={(e)=>{
          handleAdd(e)
          inputRef.current?.blur()
        }}>
       {/* Add a bug emoji!  */}
      <input 
          ref ={inputRef}
          type='input'
          placeholder="Enter a Bug! 🐛"
          className="inputContainer"
          value={todo}
          onChange={
            (e)=>setBug(e.target.value)
          }
      />
      <button className="inputSubmit" type="submit">GO</button>
        
    </form>
  )
}

export default InputField;