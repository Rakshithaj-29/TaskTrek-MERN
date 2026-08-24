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
            toast.error(error.response?.data?.message || error.message);
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
    <div className="bg-[#FBFAF3] border border-[#C9C4AC] p-6 mb-6">

        <h3 className="font-trail-display text-xl font-semibold text-[#20301F] mb-5">
            {editingTodo ? "Update Task" : "Mark a new task"}
        </h3>

        <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-3"
        >

            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the task title"
                className="flex-1 border border-[#C9C4AC] bg-white px-4 py-3 outline-none focus:border-[#BE5A2B] text-[#20301F]"
            />

            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="flex-1 w-full lg:w-44 border border-[#C9C4AC] bg-white px-4 py-3 outline-none focus:border-[#BE5A2B] text-[#20301F]"
            >
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>

            <button
                type="submit"
                className="w-full lg:w-auto bg-[#33502F] hover:bg-[#264124] text-[#EFF3E9] px-6 py-3 font-medium transition"
            >
                {editingTodo ? "Update Task" : "+ Add Task"}
            </button>

        </form>

    </div>
);

}
export default TodoForm;