import React, { useState } from 'react';

import Button from './Button';

import "./AddTask.css";


const AddTask = ({handleTaskAddition}) => {
  const [inputData, setImputData] = useState("")

  const handleInputChange = (e) => {
      setImputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setImputData("");
  };

    return( 
    <div className="add-task-container">
      <input 
        onChange={handleInputChange}
        value={inputData}
        className='add-task-input' 
        type="text" />;
      <div className="add-task-button-container">
      <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
     </div>
    );
};
 
export default AddTask;