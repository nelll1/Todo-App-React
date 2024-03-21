import React from "react";


function InputArea(props){
    return <div className="form">
    <input type="text" onChange={props.eventChange} value={props.toDoValue}/>
    <button onClick={props.addList}>
      <span>Add</span>
    </button>
    </div>
}

export default InputArea;