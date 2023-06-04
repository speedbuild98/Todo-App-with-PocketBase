export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        ToDoList (Next.js 13 | PocketBase)
      </h1>
      <p className="text-center max-w-[600px]">
        The application is a todo list that utilizes the following technologies:
        <br />
        <br />
        <strong className="text-red-600">Tailwind CSS:</strong> It is a CSS
        framework that provides predefined styles and design utilities to create
        a visually appealing interface. It is used to style and format the
        elements of the application, such as buttons, forms, and containers.
        <br />
        <br />
        <strong className="text-red-600">Next.js 13:</strong> It is a React
        framework for building server-side (SSR) and client-side (CSR) web
        applications. Next.js provides features such as routing, server-side
        rendering, static page generation, and performance optimization. In
        version 13, Next.js has introduced new improvements and features.
        <br />
        <br />
        <strong className="text-red-600">PocketBase:</strong> It is a cloud
        database platform that allows storing and managing data in a real-time
        database. It is used in this application to perform create, read,
        update, and delete (CRUD) operations on tasks in the database.
        <br />
        <br />
        The todo list application allows users to create new tasks, view a list
        of existing tasks, and delete tasks. It utilizes Tailwind CSS to style
        the user interface elements, Next.js for the application structure and
        routing, and PocketBase for storing and managing task data.
        <br />
        <br />
        With this combination of technologies, a smooth and efficient user
        experience is achieved, with an attractive interface and optimized
        performance.
      </p>
    </main>
  );
}
