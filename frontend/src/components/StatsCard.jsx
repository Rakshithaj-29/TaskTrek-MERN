function StatsCard({ title, value, color }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center border hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm font-medium">
                {title}
            </h3>

            <p className={`text-3xl font-bold mt-2 ${color}`}>
                {value}
            </p>
        </div>
    );
}

export default StatsCard;