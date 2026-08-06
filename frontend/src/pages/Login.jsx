import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {
    const navigate=useNavigate();
    const [formData,setFormData]= useState({
        email:"",
        password:""
    });
    const handleChange=(e)=>{
       setFormData({
        ...formData,
        [e.target.name]:e.target.value
       });
    }
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const response = await axios.post(
            "http://localhost:3000/auth/login",
            formData
        );
         console.log(formData);
        localStorage.setItem("token", response.data.token);

        navigate("/dashboard");

    } catch (error) {
        console.log(error.response?.data);
        alert(error.response?.data?.message || "Login failed");
    }
};
    return (
        <div className="min-h-screen bg-slate-200 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-slate-600 rounded-2xl shadow-2xl p-8">

                <h1 className="text-4xl font-bold text-center text-cyan-400">
                    📋 TaskTrek
                </h1>

                <p className="text-center text-gray-400 mt-2">
                    Organize. Track. Achieve.
                </p>


                <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                    <div>

                        <label className="block text-gray-300 mb-2">
                            Email
                        </label>

                        <input
                            type="email" name="email" value={formData.email} onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-400"
                        />

                    </div>

                    <div>

                        <label className="block text-gray-300 mb-2">
                            Password
                        </label>

                        <input
                            type="password" name="password" value={formData.password} onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-400"
                        />

                    </div>

                    <button type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white py-3 rounded-lg font-semibold"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-cyan-400 hover:underline ml-2"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Login;