import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ item, onDelete, query }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [iscompleted, setIscompleted] = useState(item.iscomplete);
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" 
      checked = {iscompleted}
      onChange = {(e)=>{setIscompleted(e.target.checked)}}/>
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick={()=>{onDelete(item.id)}}>del</button>
    </li>
  );
};

export default Task;
