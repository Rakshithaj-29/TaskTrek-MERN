function TodoList({ todos, onEdit, onDelete }) {

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

            <h2 className="text-2xl font-bold mb-6">
                Task List
            </h2>

            {todos.length === 0 ? (

                <p className="text-gray-500">
                    No tasks available.
                </p>

            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {todos.map((todo) => (

                        <div
                            key={todo._id}
                            className="bg-white rounded-xl shadow-md p-5 border hover:shadow-xl transition duration-300"
                        >

                            <div className="flex justify-between items-center gap-3">

                                <h3 className="text-xl font-semibold text-gray-800">
                                    📌 {todo.title}
                                </h3>

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                                        todo.status === "Todo"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : todo.status === "Doing"
                                            ? "bg-blue-100 text-blue-700"
                                            : "bg-green-100 text-green-700"
                                    }`}
                                >
                                    {todo.status}
                                </span>

                            </div>

                            <div className="mt-6 flex justify-end gap-3">

                                <button
                                    onClick={() => onEdit(todo)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    ✏ Edit
                                </button>

                                <button
                                    onClick={() => onDelete(todo._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    🗑 Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default TodoList;