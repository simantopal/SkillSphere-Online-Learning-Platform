"use client";
import { motion } from "framer-motion";

import TopCourseCard from '@/components/TopCourseCard';
import React, { useEffect, useState } from 'react';

const AllCoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch("https://skill-sphere-online-learning-platfo-eight.vercel.app/data.json");
            const data = await res.json();
            setCourses(data);
        };
        fetchCourses();
    }, []);

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-10">

                <h2 className="text-2xl font-bold text-orange-500 text-center md:text-left">
                    All Courses
                </h2>

                <input
                    type="text"
                    placeholder="Search courses by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full max-w-xs bg-gray-100"
                />

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <motion.div key={course.id} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <TopCourseCard key={course.id} course={course} />
                        </motion.div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-lg">
                        No courses found 😢
                    </p>
                )}
            </div>

        </div>
    );
};

export default AllCoursePage;