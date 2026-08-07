import {useNavigate} from "react-router-dom";
function Navbar() {

    const navigate= useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <nav className="bg-slate-700 shadow-lg px-8 py-4 flex justify-between items-center">

            <h1 className="text-3xl font-bold text-cyan-400">
                📋 TaskTrek
            </h1>

            <div className="flex items-center gap-6">

                <p className="text-white">
                    Welcome, User 👋
                </p>

                <button onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold transition"
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;