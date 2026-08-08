import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "🌅 Good Morning";
    if (hour < 17) return "☀️ Good Afternoon";
    return "🌙 Good Evening";
};
    return (
        <nav className="bg-slate-800 shadow-lg sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}

                <div>

                    <h1 className="text-3xl font-bold text-cyan-400">
                        📋 TaskTrek
                    </h1>

                    <p className="text-sm text-slate-300">
                        Task Management System
                    </p>

                </div>

                {/* Right Section */}

                <div className="flex items-center gap-6">

                    <p className="text-white font-medium">
                        {getGreeting()},user
                    </p>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;