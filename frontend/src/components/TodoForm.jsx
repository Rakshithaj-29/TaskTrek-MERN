import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
function TodoForm({editingTodo,fetchTodos,setEditingTodo}){
    const [formData,setFormData]=useState({
        title:"",
        status:"Todo"
    });
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const token=localStorage.getItem("token");
            if(editingTodo){
           const response=await axios.put(
            `http://localhost:3000/todos/${editingTodo._id}`,

            formData,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
           ) ;
           toast.success("Todo updated successfully");
            }else{
            const response=await axios.post(
               "http://localhost:3000/todos",
                formData,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                }
            });
            toast.success("Todo created successfully");
        }
           fetchTodos();
           setEditingTodo(null);
           setFormData({
            title:"",
            status:"Todo"
           });
        }catch(error)
        {
            toast.error(error.response?.data || error.message);
        }
        
    };
    useEffect(()=>{
        if(editingTodo){
        setFormData({
          title:editingTodo.title,
          status:editingTodo.status
        });
    }
    },[editingTodo]);
    return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

        <h3 className="text-2xl font-bold text-blue-500 mb-5">
            {editingTodo ? "✏ Update Task" : "➕ Add New Task"}
        </h3>

        <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-4"
        >

            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the task title"
                className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="flex-1 w-full lg:w-44 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            >
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>

            <button
                type="submit"
                className="w-full lg:w-auto bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
                {editingTodo ? "Update Task" : "+ Add Task"}
            </button>

        </form>

    </div>
);

}
export default TodoForm;