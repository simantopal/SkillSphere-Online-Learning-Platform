import TopCourseCard from '@/components/TopCourseCard';
import React from 'react';

const AllCoursePage = async () => {
    const res = await fetch("https://skill-sphere-online-learning-platfo-eight.vercel.app/data.json")
    const courses = await res.json();
    console.log(courses)
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
                {courses.map(course => (
                    <TopCourseCard key={courses.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default AllCoursePage;