const LearningTips = () => {
    return (
        <div className="container mx-auto my-16 p-6">
            <h2 className="text-3xl font-bold text-center mb-10">📌 Learning Tips</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-base-200 px-10 py-20 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-3">
                        Study Techniques
                    </h3>

                    <ul className="list-disc pl-5 space-y-2 opacity-80">
                        <li>Use Pomodoro technique (25 min study + 5 min break)</li>
                        <li>Practice active recall instead of passive reading</li>
                        <li>Teach others what you learn</li>
                    </ul>
                </div>

                {/* Time Management */}
                <div className="bg-base-200 px-10 py-20 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-3">
                        Time Management Tips
                    </h3>

                    <ul className="list-disc pl-5 space-y-2 opacity-80">
                        <li>Make a daily study schedule</li>
                        <li>Set small achievable goals</li>
                        <li>Avoid multitasking</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default LearningTips;