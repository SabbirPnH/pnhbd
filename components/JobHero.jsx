import { MdOutlineWork } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
export default function JobHero() {
    return (
      <div
        className="relative w-full bg-cover bg-center mt-[70px]"
        style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/group-multinational-business-people-digital-600nw-2430266899.jpg')" }}
      >
        <div className="bg-black/50 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left py-16 px-5 container mx-auto">
            {/* Left Section - Logo & Info */}
            <div className="flex flex-col items-center md:flex-row md:items-center space-x-0 md:space-x-4">  
            </div>

            {/* Right Section - Button (Mobile-Friendly) */}
            <div className="w-full md:w-auto mt-6 md:mt-0 md:ml-auto ">
             <Link href="/job">
             <button className="bg-[#32a6e0] mt-0 sm:mt-10 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-darken transition">
                Apply For Jobs →
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  