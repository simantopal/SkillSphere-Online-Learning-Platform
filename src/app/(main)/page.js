import PopularCourses from "@/components/PopularCourses";
import Banner from "@/components/shared/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses />
    </div>
  );
}
