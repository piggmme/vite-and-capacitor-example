import { useState } from "react";
import { Link } from "react-router-dom";

// 간단한 투두 앱
export default function Todo () {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <Link to="/">홈으로 가기</Link>
    </div>
  );
}