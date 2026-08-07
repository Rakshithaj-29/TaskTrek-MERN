import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import axios from "axios";
function TodoForm(){
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
            console.log(token);
            const response=await axios.post(
               "http://localhost:3000/todos",
                formData,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                }
            }
            );
            alert("Todo created successfully");
           console.log(response.data);
           setFormData({
            title:"",
            status:"Todo"
           });
        }catch(error)
        {
            console.log(error.response?.data || error.message);
        }
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter the task title" className="w-full rounded-xl bg-slate-300"/>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3">
                <option value="Todo" >Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>

            </select>
            <button type="submit"className="w-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white py-3 rounded-lg font-semibold">+ Add task</button>
            </form>
        </div>
    )

}
export default TodoForm;