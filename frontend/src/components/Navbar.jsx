import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    const username=localStorage.getItem("username");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    };
    const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "🌅 Good Morning";
    if (hour < 17) return "☀️ Good Afternoon";
    return "🌙 Good Evening";
};


    return (
        <nav className="bg-[#20301F] border-b-[3px] border-double border-[#BE5A2B] sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* Logo */}

                <div>

                    <h1 className="font-trail-display text-3xl font-bold text-[#EFEEE2] tracking-wide">
                        Task<span className="text-[#BE5A2B]">Trek</span>
                    </h1>

                    <p className="text-xs text-[#A9B39F] uppercase tracking-widest mt-1">
                        Trail log · task tracker
                    </p>

                </div>

                {/* Right Section */}

                <div className="flex items-center gap-6">

                    <p className="text-[#D8DDCB] font-medium">
                        {getGreeting()}, {username}
                    </p>

                    <button
                        onClick={handleLogout}
                        className="border border-[#55624F] text-[#D8DDCB] px-5 py-2 rounded-sm hover:border-[#BE5A2B] hover:text-[#EFEEE2] transition duration-300"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;
