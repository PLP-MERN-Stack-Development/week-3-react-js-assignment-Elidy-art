import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

const FILTERS = {
  all: task => true,
  active: task => !task.completed,
  completed: task => task.completed,
};

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = e => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const toggleTask = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(FILTERS[filter]);

  return (
    <Card className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          className="flex-1 px-3 py-2 rounded border border-gray-300 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button type="submit">Add</Button>
      </form>
      <div className="flex gap-2 mb-4">
        {Object.keys(FILTERS).map(f => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>
      <ul className="space-y-2">
        {filteredTasks.length === 0 && (
          <li className="text-gray-400 text-center">No tasks</li>
        )}
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded px-3 py-2"
          >
            <div
              className={`flex-1 cursor-pointer select-none ${task.completed ? "line-through text-gray-400" : ""}`}
              onClick={() => toggleTask(task.id)}
              title="Toggle complete"
            >
              {task.text}
            </div>
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => deleteTask(task.id)}
              aria-label="Delete task"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
} 