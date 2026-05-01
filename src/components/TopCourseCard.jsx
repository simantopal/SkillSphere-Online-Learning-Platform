import Image from "next/image";
import React from "react";

const TopCourseCard = ({ course }) => {
    return (
        <div className="card bg-base-300 shadow-sm w-full mx-auto">
            <figure className="px-4 pt-4">
                <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-xl w-full object-cover"
                />
            </figure>

            <div className="card-body p-4 sm:p-5">
                <h2 className="card-title justify-center text-center text-base sm:text-lg">{course.title}</h2>

                <p className="text-center text-sm sm:text-base text-gray-500">Instructor: {course.instructor}</p>

                <div className="w-full flex justify-between items-center mt-4">
                    <p className="font-bold text-sm sm:text-lg">
                        ⭐ {course.rating}
                    </p>

                    <button className="btn btn-primary btn-xs sm:btn-sm">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopCourseCard;