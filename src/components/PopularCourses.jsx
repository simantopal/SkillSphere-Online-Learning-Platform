import React from 'react';
import TopCourseCard from './TopCourseCard';

const PopularCourses = async() => {
    const res = await fetch("https://skill-sphere-online-learning-platfo-beta.vercel.app/data.json")
    const courses = await res.json();
    const topRatedCourse = [...courses].sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

    console.log(topRatedCourse);

    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl font-bold'>Top Rated Courses</h1>
            <div className='grid grid-cols-3 gap-4'>
                {topRatedCourse.map(course => (
                    <TopCourseCard key={course.id} course={course} />
                    ))}
            </div>
        </div>
    );
};

export default PopularCourses;