function WelcomeCard() {
    return (
        <div className="relative overflow-hidden bg-[#FBFAF3] border border-[#C9C4AC] rounded-none p-6 mt-8">

            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 120" preserveAspectRatio="none">
                <path d="M-10,90 C60,60 90,110 160,80 C220,55 260,95 410,70" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                <path d="M-10,105 C70,80 120,120 180,95 C240,72 280,105 410,88" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
                <path d="M-10,40 C50,20 100,55 170,30 C230,10 270,45 410,25" fill="none" stroke="#C9C4AC" strokeWidth="1.5"/>
            </svg>

            <div className="relative">
                <h2 className="font-trail-display text-3xl font-semibold text-[#20301F]">
                    Welcome Back!
                </h2>

                <p className="text-[#4B5A45] mt-2">
                    Manage your daily tasks efficiently with TaskTrek.
                </p>
            </div>

        </div>
    );
}

export default WelcomeCard;
