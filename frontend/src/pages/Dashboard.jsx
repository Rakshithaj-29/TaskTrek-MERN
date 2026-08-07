import Navbar from "../components/Navbar";
import WelcomeCard from "../components/WelcomeCard";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate=useNavigate();
    useEffect(()=>{
       const token=localStorage.getItem("token");
       if(!token){
        navigate('/login');
       }
    },[navigate]);

    const todos = [
    {
        title: "Learn React",
        status: "Todo"
    },
    {
        title: "Build TaskTrek",
        status: "Doing"
    }
];
    return (
        <div className="min-h-screen bg-slate-200">

            <Navbar />

            <div className="max-w-6xl mx-auto p-8">

                <h2 className="text-3xl font-bold text-slate-800">
                    My Tasks
                </h2>               
               
<div className="max-w-5xl mx-auto p-6">

    <WelcomeCard />

    <TodoForm />

    <TodoList todos={todos} />

</div>
                
            </div>

        </div>
    );
}

export default Dashboard;