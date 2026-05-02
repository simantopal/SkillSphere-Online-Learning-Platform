import Link from "next/link";
import web from "@/assets/Web.jpeg"
import uiux from "@/assets/uiux.jpeg"
import marketing from "@/assets/marketing.jpeg"
import graphics from "@/assets/graphics.jpeg"
import Image from "next/image";

const TrendingCourses = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        🔥 Trending Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-base-200 rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <Image
            src={web}
            alt="course"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              Web Development Bootcamp
            </h3>
            <p className="text-sm text-gray-500">
              Instructor: John Doe
            </p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-medium">
                ⭐ 4.9
              </span>
              <Link href="/courses/1">
                <button className="btn btn-sm btn-primary">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-base-200 rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <Image
            src={uiux}
            alt="course"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              UI/UX Design Mastery
            </h3>
            <p className="text-sm text-gray-500">
              Instructor: Sarah Lee
            </p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-medium">
                ⭐ 4.8
              </span>
              <Link href="/courses/2">
                <button className="btn btn-sm btn-primary">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-base-200 rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <Image
            src={marketing}
            alt="course"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              Digital Marketing Pro
            </h3>
            <p className="text-sm text-gray-500">
              Instructor: Mike Ross
            </p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-medium">
                ⭐ 4.7
              </span>
              <Link href="/courses/3">
                <button className="btn btn-sm btn-primary">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-base-200 rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
          <Image
            src={graphics}
            alt="course"
            className="h-40 w-full object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">
              Graphic Design Essentials
            </h3>
            <p className="text-sm text-gray-500">
              Instructor: Emma Watson
            </p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-medium">
                ⭐ 4.6
              </span>
              <Link href="/courses/4">
                <button className="btn btn-sm btn-primary">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrendingCourses;