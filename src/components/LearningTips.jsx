"use client";

import { motion } from "framer-motion";

const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const LearningTips = () => {
    return (
        <motion.div
            className="container mx-auto my-16 p-6"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                className="text-3xl font-bold text-center mb-10"
                variants={titleVariant}
            >
                📌 Learning Tips
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Study Techniques */}
                <motion.div
                    className="bg-base-200 px-10 py-20 rounded-xl shadow hover:shadow-xl transition"
                    variants={cardVariant}
                    whileHover={{ scale: 1.03, rotate: 0.3 }}
                >
                    <h3 className="text-xl font-semibold mb-3">
                        Study Techniques
                    </h3>

                    <ul className="list-disc pl-5 space-y-2 opacity-80">
                        <li>Use Pomodoro technique (25 min study + 5 min break)</li>
                        <li>Practice active recall instead of passive reading</li>
                        <li>Teach others what you learn</li>
                    </ul>
                </motion.div>

                {/* Time Management */}
                <motion.div
                    className="bg-base-200 px-10 py-20 rounded-xl shadow hover:shadow-xl transition"
                    variants={cardVariant}
                    whileHover={{ scale: 1.03, rotate: -0.3 }}
                >
                    <h3 className="text-xl font-semibold mb-3">
                        Time Management Tips
                    </h3>

                    <ul className="list-disc pl-5 space-y-2 opacity-80">
                        <li>Make a daily study schedule</li>
                        <li>Set small achievable goals</li>
                        <li>Avoid multitasking</li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LearningTips;