import Image from "next/image";
import React from "react";

const TopCourseCard = ({ course }) => {
  return (
    <div className="grid grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
      <figure>
        
      </figure>

      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>

        <p className="text-sm text-gray-500">
          {course.description.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-primary">
            {course.instructor}
          </span>

          <span className="text-sm font-semibold">
            ⭐ {course.rating}
          </span>
        </div>

        <div className="card-actions justify-end mt-3">
          <button className="btn btn-primary btn-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopCourseCard;