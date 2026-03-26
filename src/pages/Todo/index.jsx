import { useState } from "react";
import styles from "./Todo.module.scss";

let uniqId = 0;

function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setTodos([
            { id: ++uniqId, text: inputValue, completed: false },
            ...todos,
        ]);
        setInputValue("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const completed = todos.filter((t) => t.completed).length;
    const remaining = todos.length - completed;

    return (
        <div className={styles.todo}>
            <h2>Todo List</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nhập task mới..."
                />
                <button type="submit">Thêm</button>
            </form>

            {todos.length === 0 && (
                <p className={styles.empty}>
                    Chưa có task nào. Hãy thêm task đầu tiên!
                </p>
            )}

            <ul className={styles.list}>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.item}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span
                            className={todo.completed ? styles.completed : ""}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
                    </li>
                ))}
            </ul>

            {todos.length > 0 && (
                <p className={styles.summary}>
                    Tổng: {todos.length} task(s) &nbsp;·&nbsp; Hoàn thành:{" "}
                    {completed} &nbsp;·&nbsp; Còn lại: {remaining}
                </p>
            )}
        </div>
    );
}

export default Todo;
