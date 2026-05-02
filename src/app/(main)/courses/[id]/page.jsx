import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://skill-sphere-online-learning-platfo-eight.vercel.app/data.json");

  const courses = await res.json();
  const course = courses.find(p => p.id == id);


  return (
    <div className='max-w-5xl container mx-auto my-8'>
      <h2 className='font-semibold text-2xl mb-5'>Course Details</h2>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <figure>
            <img
              src={course.image}
              alt={course.title}
              width={100}
              height={100}
              className='w-full mt-5 rounded-2xl' />
          </figure>
          <h2 className="card-title font-bold text-3xl mt-5">Name: {course.title}
            <div className={`badge
                ${course.level === "Beginner" ? "badge-primary" : ""}
                ${course.level === "Intermediate" ? "badge-secondary" : ""}
                ${course.level === "Advanced" ? "badge-success" : ""}
              `}>{course.level}
            </div>
          </h2>

          <div className="font-medium text-xl">
            <p className='mt-2'>description: {course.description}</p>
            <p className='mt-2'>instructor by: {course.instructor}</p>
            <p className='mt-2'>duration: {course.duration}</p>
            <p className='mb-2'>rating: {course.rating}</p>
          </div>

          <div className='flex items-center gap-2 justify-between border-t'>

            <Link href={"/courses"} className="ml-auto">
              <button className='btn mt-5 bg-pink-700 text-white'><FaArrowLeft />All course in this category</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;