import Link from 'next/link';
import {FiArrowLeft} from 'react-icons/fi'

async function getTask(taskId) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/tasks/records/${taskId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function TaskPage({ params }) {
  const task = await getTask(params.id);

  return (
    <div>
      <Link className="flex items-center text-blue-500 mb-4" href="/tasks">
        <FiArrowLeft className="mr-1" />
        Back
      </Link>
      <h1 className="text-3xl font-bold mb-4">ID: {task.id}</h1>
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
        <h5 className="text-gray-700 mb-2">{task.content}</h5>
        <p className="text-gray-500">{task.created}</p>
      </div>
    </div>
  );
}
