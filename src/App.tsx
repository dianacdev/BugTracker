import React, {useState} from 'react';
import InputField from './components/InputField';
import BugList from './components/BugList';
import {Bug} from "./model"
import './App.css';

const App: React.FC = () => {

  const [todo, setBug] = useState<string>(""); 
  const [bugs, setBugs] = useState<Bug[]>([]); 

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setBugs([...bugs, {id:Date.now(), todo, isDone:false}]);
      setBug("");
    }
  };

  console.log(bugs);

  return (
    <div className="App">
      <span className="heading">
          BUG TRAKR
      </span>
      <InputField todo={todo} setBug={setBug} handleAdd={handleAdd}/>
      <BugList bugs={bugs} setBugs={setBugs}/>
    </div>
  );
}

export default App;
