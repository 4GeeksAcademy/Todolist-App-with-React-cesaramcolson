import React, {useState} from "react";

const TodoList = () => {
	const [ newTask, setNewTask ] = useState("")
	const [ tasksList, SetTasksList ] = useState([])
	return (
		<div className="container">
			<h1>Morning todos</h1>
			<ul>
				<li><input 
						type="text" 
						onChange={(e) => setNewTask(e.target.value)}
						value={newTask}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
							  SetTasksList([...tasksList, newTask]);
							  setNewTask('');
							}
						  }}
						placeholder="Add a new task">
					</input></li>
					{tasksList.map((item, index) => (
						<li>
							<span>{item}</span>
							<div className="icon">
								<i 
									className="fa-solid fa-x" 
									onClick={() => SetTasksList(
										tasksList.filter(
											(t, currentIndex) => 
												index != currentIndex
										)
									)}>
								</i></div>
						</li>
					))}
			</ul>
			<div><p>
					{tasksList.length === 0
            		? "No pending tasks"
            		: `${tasksList.length} pending 
					${tasksList.length === 1 ? "task" : "tasks"}`}
			</p></div>
		</div>
	);
};

export default TodoList;
