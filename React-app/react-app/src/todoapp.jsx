import React, { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const saveTask = () => {
        if (input.trim() === "") return;
        if(tasks.includes(input)){
            setInput("")
            return
        }

        if (editIndex !== null) {

            const updated = [...tasks];
            updated[editIndex] = input;
            setTasks(updated);
            setEditIndex(null);
        } else {

            setTasks([...tasks, input]);
        }

        setInput("");
    };

    const editTask = (index) => {
        setInput(tasks[index]);
        setEditIndex(index);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            <h2> To-Do</h2>


            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task"
                style={{ padding: "8px", width: "70%" }}
            />
            <button onClick={saveTask} style={{ marginLeft: "8px" }}>
                Save
            </button>


            <ul style={{ marginTop: "20px", padding: 0, listStyle: "none" }}>
                {tasks.map((task, i) => (
                    <li
                        key={i}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "6px",
                            background: "#f2f2f2",
                            marginBottom: "6px",
                            borderRadius: "4px",
                        }}
                    >
                        {task}
                        <span>
                            <button onClick={() => editTask(i)} style={{ marginRight: "6px" }}>
                                Edit
                            </button>
                            <button onClick={() => deleteTask(i)}>Delete</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
