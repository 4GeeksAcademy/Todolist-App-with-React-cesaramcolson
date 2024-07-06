// import React, {useState} from "react";

// const TodoList = () => {
// 	const [ newTask, setNewTask ] = useState("")
// 	const [ tasksList, SetTasksList ] = useState([])
// 	return (
// 		<div className="container">
// 			<h1>Morning todos</h1>
// 			<ul>
// 				<li><input 
// 						type="text" 
// 						onChange={(e) => setNewTask(e.target.value)}
// 						value={newTask}
// 						onKeyDown={(e) => {
// 							if (e.key === 'Enter') {
// 							  SetTasksList([...tasksList, newTask]);
// 							  setNewTask('');
// 							}
// 						  }}
// 						placeholder="Add a new task">
// 					</input></li>
// 					{tasksList.map((item, index) => (
// 						<li>
// 							<span>{item}</span>
// 							<div className="icon">
// 								<i 
// 									className="fa-solid fa-x" 
// 									onClick={() => SetTasksList(
// 										tasksList.filter(
// 											(t, currentIndex) => 
// 												index != currentIndex
// 										)
// 									)}>
// 								</i></div>
// 						</li>
// 					))}
// 			</ul>
// 			<div><p>
// 					{tasksList.length === 0
//             		? "No pending tasks"
//             		: `${tasksList.length} pending 
// 					${tasksList.length === 1 ? "task" : "tasks"}`}
// 			</p></div>
// 		</div>
// 	);
// };

// export default TodoList;

import React, { useState } from "react";
import TaskInput from "./AddTask.jsx";
import TaskItem from "./TaskItem.jsx";
import TaskCount from "./TaskCount.jsx";

const TodoList = () => {
    const [ newTask, setNewTask ] = useState("");
    const [ tasksList, setTasksList ] = useState([]);

    const addTask = () => {
        if (newTask.trim()) {
            setTasksList([...tasksList, newTask]);
            setNewTask("");
        }
    };

    const removeTask = (index) => {
        setTasksList(tasksList.filter((t, currentIndex) => index !== currentIndex));
    };

    return (
		<>
        <div className="container stack-top">
            <h1>Morning todos</h1>
            <ul>
                <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
                {tasksList.map((item, index) => (
                    <TaskItem key={index} item={item} index={index} removeTask={removeTask} />
                ))}
            </ul>
            <TaskCount tasksList={tasksList} />
        </div>
		<div className="footer1"></div>
		<div className="footer2"></div>
		</>
    );
};

export default TodoList;