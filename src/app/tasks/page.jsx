'use client'
// import PocketBase from 'pocketbase';
import Link from 'next/link';
import CreateTask from './CreateTask';
import { useState, useEffect } from 'react';

async function getTasks() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('tasks');
  const res = await fetch('http://127.0.0.1:8090/api/collections/tasks/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await fetch(`http://127.0.0.1:8090/api/collections/tasks/records/${taskId}`, {
        method: 'DELETE',
      });

      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {tasks?.map((task) => (
          <Task key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>

      <CreateTask />
    </div>
  );
}

function Task({ task, onDelete }) {
  const { id, title, content, created } = task;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="block bg-white rounded-lg p-4 shadow hover:bg-gray-100">
    <Link href={`/tasks/${id}`} >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <h5 className="text-gray-700 mb-2">{content}</h5>
      <p className="text-gray-500">{created}</p>

    </Link>
    <button className="text-red-500 hover:text-red-700" onClick={handleDelete}>
        Delete
      </button>
    </div>

  );
}
