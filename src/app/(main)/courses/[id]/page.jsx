import { redirect } from "next/navigation";

const CourseDetails = ({ params }) => {
  const user = null; // auth later

  if (!user) {
    redirect("/login");
  }

  return <div>Course Details Page</div>;
};

export default CourseDetails;