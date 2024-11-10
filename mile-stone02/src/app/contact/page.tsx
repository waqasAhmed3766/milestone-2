import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center ">
      <div className="mt-[20px]">
        <h1 className="text-4xl text-blue-500 font-bold">Let's Get In Touch</h1>
      </div>

      <div className="flex justify-center items-center mt-[20px]">
        {/* Left side text */}
        <div className="bg-blue-950 md:p-7 p-5 flex justify-center items-center text-yellow-50 md:gap-x-24 gap-y-10 text-2xl flex-col lg:h-[400px] lg:w-[400px] md:h-[400px] md:w-[400px] h-[300px] w-[300px]">
          <Link href="mailto:waqasahmed3766@gmail.com"><SiGmail /> Gmail</Link>
          <Link href="https://www.linkedin.com/in/waqas-ahmed-7977aa280"><FaLinkedin /> LinkedIn</Link>
          <Link href="https://github.com/waqasAhmed3766"><FaGithub /> GitHub</Link>
        </div>
      </div>
    </div>
  );
}