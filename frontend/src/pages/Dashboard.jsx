import Navbar from "../components/Navbar";
import WelcomeCard from "../components/WelcomeCard";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
    const navigate=useNavigate();
    
    const[todos,setTodos]=useState([]);
    const[editingTodo,setEditingTodo]=useState(null);
    useEffect(()=>{

    },[]);
    const fetchTodos=async()=>{
      try{
        const token=localStorage.getItem("token");
        const response=await axios.get("http://localhost:3000/todos",
            
            {
                    headers:{
                        Authorization:`Bearer ${token}`
                }
            }
        );
        setTodos(response.data);
      }catch(error){
        console.log(error.response?.data||error.message);
      }
    };
    useEffect(()=>{
        fetchTodos();
    },[]);
    useEffect(()=>{
       const token=localStorage.getItem("token");
       if(!token){
        navigate('/login');
       }
    },[navigate]);

   
    return (
        <div className="min-h-screen bg-slate-200">

            <Navbar />

            <div className="max-w-6xl mx-auto p-8">

                <h2 className="text-3xl font-bold text-slate-800">
                    My Tasks
                </h2>               
               
<div className="max-w-5xl mx-auto p-6">

    <WelcomeCard />

    <TodoForm editingTodo={editingTodo}
    fetchTodos={fetchTodos}
    setEditingTodo={setEditingTodo}/>

    <TodoList todos={todos} onEdit={setEditingTodo}/>

</div>
                
            </div>

        </div>
    );
}

export default Dashboard;