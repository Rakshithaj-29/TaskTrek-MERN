function TodoList({ todos }) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

            <h2 className="text-2xl font-bold mb-4">
                My Tasks
            </h2>

            {
                todos.length === 0 ? (

                    <p className="text-gray-500">
                        No tasks available.
                    </p>

                ) : (

                    todos.map((todo) => (

                        <div
                            key={todo._id}
                            className="border rounded-lg p-4 mb-3"
                        >

                            <h3 className="font-semibold text-lg">
                                {todo.title}
                            </h3>

                            <p className="text-gray-500">
                                {todo.status}
                            </p>

                        </div>

                    ))

                )
            }

        </div>

    );
}

export default TodoList;