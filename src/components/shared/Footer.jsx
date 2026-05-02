import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-10">
      <div className="container mx-auto px-5 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500">SkillSphere</h2>
          <p className="mt-2 text-sm">
            Learn new skills from industry experts. Build your career with
            modern online courses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-purple-500">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/my-profile">My Profile</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-3 text-purple-500">
            Contact
          </h3>

          <p className="text-sm">Email: support@skillsphere.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>

          <div className="flex gap-4 mt-4 text-xl justify-center md:justify-start">
            <FaFacebook />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <div className="text-center py-4 border-t text-sm">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;