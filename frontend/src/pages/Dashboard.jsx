import Navbar from "../components/Navbar";
import WelcomeCard from "../components/WelcomeCard";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../components/StatsCard";
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
    
    const deleteTodo=async(id)=>{
        
        try{
        const token=localStorage.getItem("token");
       const confirmDelete=window.confirm("Are you sure you want to delete?");
    if(!confirmDelete){
        return;
    }
        const response=await axios.delete(`http://localhost:3000/todos/${id}`,
       {
                    headers:{
                        Authorization:`Bearer ${token}`
                }
            }
        );
        alert("Todo deleted successfully");
        fetchTodos();
        }catch(error)
        {
        console.log(error.response?.data||error.message)
        }
    }
   
    return (
        <div className="min-h-screen bg-slate-200">

            <Navbar />

            <div className="max-w-6xl mx-auto p-8">

                <h2 className="text-3xl font-bold text-slate-800">
                    My Tasks
                </h2>               
               
<div className="max-w-5xl mx-auto p-6">

    <WelcomeCard />
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

    <StatsCard
        title="Total Tasks"
        value={todos.length}
        color="text-blue-600"
    />
   <StatsCard title="Todo" value={todos.filter(todo => todo.status === "Todo").length}color="text-yellow-600"/>
   <StatsCard title="Doing" value={todos.filter(todo => todo.status === "Todo").length}color="text-cyan-500"/>
   <StatsCard title="Done"value={todos.filter(todo => todo.status === "Todo").length}color="text-green-600"/>
    </div>
    <TodoForm editingTodo={editingTodo}
    fetchTodos={fetchTodos}
    setEditingTodo={setEditingTodo}/>

    <TodoList todos={todos} onEdit={setEditingTodo} onDelete={deleteTodo}/>

</div>
                
            </div>

        </div>
    );
}

export default Dashboard;