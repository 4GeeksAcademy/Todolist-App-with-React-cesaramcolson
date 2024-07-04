import React, {useState} from "react";

const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ items, setItems ] = useState([])
	return (
		<div className="container">
			<h1>Morning todos</h1>
			<ul>
				<li><input 
						type="text" 
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
							  setItems([...items, inputValue]);
							  setInputValue('');
							}
						  }}
						placeholder="Add a new task">
					</input></li>
					{items.map((item, index) => (
						<li>
							<span>{item}</span>
							<div className="icon">
								<i 
									className="fa-solid fa-x" 
									onClick={() => setItems(
										items.filter(
											(t, currentIndex) => 
												index != currentIndex
										)
									)}>
								</i></div>
						</li>
					))}
			</ul>
			<div><p>
					{items.length === 0
            		? "No pending tasks"
            		: `${items.length} pending 
					${items.length === 1 ? "task" : "tasks"}`}
				</p></div>
		</div>
	);
};

export default Home;
