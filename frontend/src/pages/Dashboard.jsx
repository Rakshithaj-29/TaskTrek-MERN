import Navbar from "../components/Navbar";
import WelcomeCard from "../components/WelcomeCard";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../components/StatsCard";
import axios from "axios";
import toast from 'react-hot-toast';
function Dashboard() {
    const navigate=useNavigate();
    
    const[todos,setTodos]=useState([]);
    const[editingTodo,setEditingTodo]=useState(null);
    const[search,setSearch]=useState("");
    const[statusFilter,setStatusFilter]=useState("All");
    const filteredTodos = todos.filter(todo => {

    const matchedSearch =
        todo.title.toLowerCase().includes(search.toLowerCase());

    const matchedStatus =
        statusFilter === "All" ||
        todo.status === statusFilter;

    return matchedSearch && matchedStatus;

});
    useEffect(()=>{

    },[]);
    const fetchTodos=async(searchValue="",statusValue="All")=>{
      try{
        const token=localStorage.getItem("token");
        const params=new URLSearchParams;
        if(searchValue.trim()){
            params.append("search",searchValue.trim());

        }
        if(statusValue!="All"){
            params.append("status",statusValue);

        }
        const response=await axios.get(
            
            `http://localhost:3000/todos?${params.toString()}`,
            
            {
                    headers:{
                        Authorization:`Bearer ${token}`
                }
            }
        );
        setTodos(response.data);
      }catch(error){
        toast.error(error.response?.data||error.message);
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
    useEffect(() => {

    const timer = setTimeout(() => {
        fetchTodos(search, statusFilter);
    }, 500);

    return () => {
        clearTimeout(timer);
    };

}, [search, statusFilter]);
    
    const deleteTodo=async(id)=>{
        
        try{
        const token=localStorage.getItem("token");
       const confirmDelete=window.confirm("Are you sure you want to delete?");
    if(!confirmDelete){
        return;
    }
        const response=await axios.delete(`http://localhost:3000/todos${id}`,
       {
                    headers:{
                        Authorization:`Bearer ${token}`
                }
            }
        );
        toast.success("Todo deleted successfully");
        fetchTodos();
        }catch(error)
        {
        toast.error(error.response?.data||error.message)
        }
    }
   
    return (
        <div className="min-h-screen bg-slate-100">

            <Navbar />

             {/* <div className="max-w-6xl mx-auto p-8">  */}

                
               
<div className="max-w-7xl mx-auto p-6">

    <WelcomeCard />
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

    <StatsCard title="Total Tasks"value={todos.length}color="text-blue-600"/>
   <StatsCard title="Todo" value={todos.filter(todo => todo.status === "Todo").length}color="text-yellow-600"/>
   <StatsCard title="Doing" value={todos.filter(todo => todo.status === "Doing").length}color="text-cyan-500"/>
   <StatsCard title="Done"value={todos.filter(todo => todo.status === "Done").length}color="text-green-600"/>
    </div>
   
        
    <TodoForm editingTodo={editingTodo}
    fetchTodos={fetchTodos}
    setEditingTodo={setEditingTodo}/>
    
    <div className="flex flex-col md:flex-row gap-4 mb-6">

    <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
    />

    <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="w-full md:w-48 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
    >
        <option value="All">All</option>
        <option value="Todo">Todo</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
    </select>

</div>
    

    
    <TodoList 
    todos={filteredTodos} 
    onEdit={setEditingTodo} 
    onDelete={deleteTodo}/>
   </div> 
   </div>

            
    );
}

export default Dashboard;