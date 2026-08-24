import  {Link,useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
function Register(){
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange=(e)=>{
         setFormData({
            ...formData,
            [e.target.name]:e.target.value

        });
    };
    const handleSubmit=async(e)=>{
            e.preventDefault();
            
            try{
             const response =  await axios.post("http://localhost:3000/auth/register",
              formData
             );
              alert(response.data.message);
            navigate("/Login");
            }catch(error){
                console.log(error.response.message);
            }
    };
    return(
        
        <div className="min-h-screen bg-[#EFEEE2] flex items-center justify-center px-2">

            <div className="w-full max-w-md relative overflow-hidden bg-[#FBFAF3] border border-[#C9C4AC] p-8">

                <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 340" preserveAspectRatio="none">
                    <path d="M-10,270 C60,240 90,290 160,260 C220,235 260,275 410,250" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                    <path d="M-10,300 C70,275 120,310 180,290 C240,270 280,300 410,285" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                    <path d="M-10,40 C50,20 100,55 170,30 C230,10 270,45 410,25" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                </svg>

                <div className="relative">

                    <h1 className="font-trail-display text-4xl font-bold text-center text-[#20301F]">
                        Task<span className="text-[#BE5A2B]">Trek</span>
                    </h1>

                    <p className="text-center text-[#4B5A45] mt-2 text-sm uppercase tracking-widest">
                        Organize. Track. Achieve.
                    </p>

                    <h3 className="font-trail-display text-2xl font-semibold text-[#20301F] text-center mt-8">
                        Create Account
                    </h3>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                        <div>

                            <label className="block text-[#4B5A45] mb-2 text-sm font-medium">
                                Name
                            </label>

                            <input type="text" placeholder="Enter your fullname"name="name" value={formData.name} onChange={handleChange}
                                className="w-full border border-[#C9C4AC] bg-white px-4 py-3 text-[#20301F] outline-none focus:border-[#BE5A2B]"/>

                        </div>

                        <div>
                            <label className="block text-[#4B5A45] mb-2 text-sm font-medium">
                                Email
                            </label>

                            <input
                                type="email" placeholder="Enter your email" name="email"value={formData.email}onChange={handleChange}
                                className="w-full border border-[#C9C4AC] bg-white px-4 py-3 text-[#20301F] outline-none focus:border-[#BE5A2B]"/>

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

                        <button type="submit" className="w-full bg-[#33502F] hover:bg-[#264124] transition duration-300 text-[#EFF3E9] py-3 font-semibold"
                        >
                            Register
                        </button>

                    </form>

                    <p className="text-center text-[#4B5A45] mt-6">

                        Don't have an account?

                        <Link
                            to="/login"
                            className="text-[#BE5A2B] hover:underline ml-2 font-medium"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}
export default Register;