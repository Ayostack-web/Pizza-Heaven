"use client"; // if using Next.js App Router

import { useState } from "react";
import { PlusCircle, Trash2, CheckCircle2 } from "lucide-react";

export default function PizzaTodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Prepare fresh dough", done: false },
    { id: 2, text: "Add extra cheese to special orders", done: false },
    { id: 3, text: "Deliver Margherita to John", done: true },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <section className="py-10 bg-blue-50">
      <div className="max-w-xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          🍕 Pizza Heaven <span className="text-red-600">Tobuy List</span>
        </h2>

        {/* Input Box */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new pizza task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <button
            onClick={addTask}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl flex items-center gap-1 transition"
          >
            <PlusCircle className="w-5 h-5" /> Add
          </button>
        </div>

        {/* Todo Items */}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div
                className={`flex items-center gap-3 cursor-pointer ${
                  task.done ? "line-through text-gray-400" : "text-gray-800"
                }`}
                onClick={() => toggleTask(task.id)}
              >
                <CheckCircle2
                  className={`w-6 h-6 ${
                    task.done ? "text-green-500" : "text-gray-300"
                  }`}
                />
                {task.text}
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
