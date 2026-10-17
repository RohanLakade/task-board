import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  function addTask(e) {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), title: trimmed }])
    setTitle('')
  }

  return (
    <main>
      <h1>Team Task Board</h1>
      <form onSubmit={addTask}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </main>
  )
}