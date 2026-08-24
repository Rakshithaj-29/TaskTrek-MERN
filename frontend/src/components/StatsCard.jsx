function StatsCard({ title, value, markerColor = "#8A8C79" }) {
    return (
        <div className="bg-[#FBFAF3] border border-[#C9C4AC] p-6 text-center hover:shadow-[3px_3px_0_#C9C4AC] transition-shadow">

            <div
                className="w-3.5 h-3.5 rounded-full mx-auto mb-3 bg-[#FBFAF3]"
                style={{ border: `2px solid ${markerColor}` }}
            />

            <h3 className="text-[#4B5A45] text-xs font-medium uppercase tracking-widest">
                {title}
            </h3>

            <p className="font-trail-mono text-3xl font-semibold mt-2 text-[#20301F]">
                {value}
            </p>
        </div>
    );
}

export default StatsCard;
