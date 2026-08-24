import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="min-h-screen bg-[#EFEEE2]">

            {/* nav */}
            <nav className="bg-[#20301F] border-b-[3px] border-double border-[#BE5A2B]">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <h1 className="font-trail-display text-2xl font-bold text-[#EFEEE2]">
                        Task<span className="text-[#BE5A2B]">Trek</span>
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-[#D8DDCB] hover:text-white transition">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="border border-[#55624F] text-[#D8DDCB] px-4 py-2 rounded-sm hover:border-[#BE5A2B] hover:text-white transition"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </nav>

            {/* hero */}
            <div className="relative overflow-hidden max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">

                <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
                    <path d="M-20,300 C120,260 180,340 320,290 C440,250 520,320 820,270" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                    <path d="M-20,340 C140,310 240,360 360,330 C480,300 560,350 820,320" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                    <path d="M-20,80 C100,40 200,110 340,60 C460,20 540,90 820,50" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                </svg>

                <div className="relative">
                    <p className="text-xs uppercase tracking-[3px] text-[#4B5A45] mb-4">
                        Your tasks, mapped like a trail
                    </p>

                    <h2 className="font-trail-display text-5xl md:text-6xl font-semibold text-[#20301F] leading-tight">
                        Every task is a<br/>waypoint on your trail
                    </h2>

                    <p className="text-[#4B5A45] mt-6 max-w-xl mx-auto text-lg">
                        TaskTrek turns your to-do list into a journey. Mark what's ahead,
                        track what's in progress, and celebrate every summit you reach.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-4">
                        <Link
                            to="/register"
                            className="bg-[#33502F] hover:bg-[#264124] transition text-[#EFF3E9] px-8 py-3 font-semibold"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/login"
                            className="border border-[#C9C4AC] hover:border-[#20301F] transition text-[#20301F] px-8 py-3 font-medium"
                        >
                            I have an account
                        </Link>
                    </div>
                </div>
            </div>

            {/* features */}
            <div className="max-w-5xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-[#FBFAF3] border border-[#C9C4AC] border-t-4 p-6" style={{ borderTopColor: "#8A8C79" }}>
                        <div className="w-4 h-4 rounded-full border-2 mb-4" style={{ borderColor: "#8A8C79" }} />
                        <h3 className="font-trail-display text-lg font-semibold text-[#20301F] mb-2">Todo</h3>
                        <p className="text-[#4B5A45] text-sm">
                            Set out your tasks the moment they come to mind, before the trail gets long.
                        </p>
                    </div>

                    <div className="bg-[#FBFAF3] border border-[#C9C4AC] border-t-4 p-6" style={{ borderTopColor: "#BE5A2B" }}>
                        <div className="w-4 h-4 rounded-full border-2 mb-4" style={{ borderColor: "#BE5A2B" }} />
                        <h3 className="font-trail-display text-lg font-semibold text-[#20301F] mb-2">Doing</h3>
                        <p className="text-[#4B5A45] text-sm">
                            Keep the ones you're actively working on in clear view, blazed and easy to find.
                        </p>
                    </div>

                    <div className="bg-[#FBFAF3] border border-[#C9C4AC] border-t-4 p-6" style={{ borderTopColor: "#33502F" }}>
                        <div className="w-4 h-4 rounded-full mb-4" style={{ background: "#33502F" }} />
                        <h3 className="font-trail-display text-lg font-semibold text-[#20301F] mb-2">Done</h3>
                        <p className="text-[#4B5A45] text-sm">
                            Reach the summit on each task and watch your progress add up over time.
                        </p>
                    </div>

                </div>
            </div>

            {/* footer */}
            <footer className="border-t border-[#C9C4AC] py-6 text-center text-[#4B5A45] text-sm">
                TaskTrek · Organize. Track. Achieve.
            </footer>

        </div>
    );
}

export default Landing;