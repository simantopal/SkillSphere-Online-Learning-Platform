import React from 'react';
import TopCourseCard from './TopCourseCard';

const PopularCourses = async() => {
    const res = await fetch("https://skill-sphere-online-learning-platfo-eight.vercel.app/data.json")
    const courses = await res.json();
    const topRatedCourse = [...courses].sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

    console.log(topRatedCourse);

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold flex justify-center items-center'>Top Rated Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-5'>
                {topRatedCourse.map(course => (
                    <TopCourseCard key={course.id} course={course} />
                    ))}
            </div>
        </div>
    );
};

export default PopularCourses;