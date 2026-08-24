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
        localStorage.setItem("username",response.data.user.name);
        navigate("/dashboard");

    } catch (error) {
        console.log(error.response?.data);
        alert(error.response?.data?.message || "Login failed");
    }
};
    return (
        <div className="min-h-screen bg-[#EFEEE2] flex items-center justify-center px-4">

            <div className="w-full max-w-md relative overflow-hidden bg-[#FBFAF3] border border-[#C9C4AC] p-8">

                <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="none">
                    <path d="M-10,230 C60,200 90,250 160,220 C220,195 260,235 410,210" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                    <path d="M-10,260 C70,235 120,270 180,250 C240,230 280,260 410,245" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                    <path d="M-10,40 C50,20 100,55 170,30 C230,10 270,45 410,25" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                </svg>

                <div className="relative">

                    <h1 className="font-trail-display text-4xl font-bold text-center text-[#20301F]">
                        Task<span className="text-[#BE5A2B]">Trek</span>
                    </h1>

                    <p className="text-center text-[#4B5A45] mt-2 text-sm uppercase tracking-widest">
                        Organize. Track. Achieve.
                    </p>


                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                        <div>

                            <label className="block text-[#4B5A45] mb-2 text-sm font-medium">
                                Email
                            </label>

                            <input
                                type="email" name="email" value={formData.email} onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border border-[#C9C4AC] bg-white px-4 py-3 text-[#20301F] outline-none focus:border-[#BE5A2B]"
                            />

                        </div>

                        <div>

                            <label className="block text-[#4B5A45] mb-2 text-sm font-medium">
                                Password
                            </label>

                            <input
                                type="password" name="password" value={formData.password} onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full border border-[#C9C4AC] bg-white px-4 py-3 text-[#20301F] outline-none focus:border-[#BE5A2B]"
                            />

                        </div>

                        <button type="submit"
                            className="w-full bg-[#33502F] hover:bg-[#264124] transition duration-300 text-[#EFF3E9] py-3 font-semibold"
                        >
                            Login
                        </button>

                    </form>

                    <p className="text-center text-[#4B5A45] mt-6">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="text-[#BE5A2B] hover:underline ml-2 font-medium"
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;