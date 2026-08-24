function TodoList({ todos, onEdit, onDelete }) {

    const statusStyles = {
        Todo:  { border: "#8A8C79", tagBg: "#E4E3D6", tagText: "#565A47" },
        Doing: { border: "#BE5A2B", tagBg: "#F3DFCE", tagText: "#BE5A2B" },
        Done:  { border: "#33502F", tagBg: "#DEE8D3", tagText: "#33502F" },
    };

    return (
        <div className="bg-[#FBFAF3] border border-[#C9C4AC] p-6 mt-6">

            <h2 className="font-trail-display text-xl font-semibold mb-6 text-[#20301F]">
                The Trail
            </h2>

            {todos.length === 0 ? (

                <p className="text-[#4B5A45]">
                    No tasks on the trail yet.
                </p>

            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {todos.map((todo) => {
                        const style = statusStyles[todo.status] || statusStyles.Todo;
                        return (

                        <div
                            key={todo._id}
                            style={{ borderTopColor: style.border }}
                            className="bg-[#FBFAF3] border border-[#C9C4AC] border-t-4
           hover:-translate-y-1 hover:shadow-[3px_3px_0_#C9C4AC]
           transition-all duration-300
           flex flex-col justify-between min-h-[180px] p-5"
                        >

                            <div className="flex justify-between items-start gap-3">

                                <h3 className="font-trail-display text-lg font-semibold text-[#20301F]">
                                    {todo.title}
                                </h3>

                                <span
                                    style={{ backgroundColor: style.tagBg, color: style.tagText }}
                                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wide whitespace-nowrap font-trail-mono"
                                >
                                    {todo.status}
                                </span>

                            </div>

                            <div className="mt-6 flex justify-end gap-3">

                                <button
                                    onClick={() => onEdit(todo)}
                                    className="border border-[#C9C4AC] text-[#4B5A45] px-4 py-2 hover:border-[#20301F] hover:text-[#20301F] transition"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => onDelete(todo._id)}
                                    className="border border-[#C9C4AC] text-[#4B5A45] px-4 py-2 hover:border-[#BE5A2B] hover:text-[#BE5A2B] transition"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>
                        );
                    })}

                </div>

            )}

        </div>
    );
}

export default TodoList;
