import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import Banner from "@/components/shared/Banner";
import TopInstructors from "@/components/TopInstructor";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
    </div>
  );
}
