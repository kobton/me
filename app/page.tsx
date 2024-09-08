import { Link } from "@nextui-org/link";
import { BookIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="grid justify-items-center gap-3">
        <img
          alt=""
          className="w-32 h-32 rounded-full object-cover"
          src="/jakob.jpg"
        />
        <div className="text-m font-semibold	 text-slate-800">
          Jakob Hamilton
        </div>

        <div className="text-sm text-slate-800 pb-2">Software Engineer</div>
        <Link
          isExternal
          className="flex items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600"
          href={"https://work.jakobhamilton.info/resume/v1"}
        >
          <BookIcon className="mr-1" size={20} />
          CV/Resume
        </Link>
        <Link
          isExternal
          className="flex items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600"
          href={"https://github.com/kobton"}
        >
          <GithubIcon className="mr-1" size={20} />
          GitHub
        </Link>
        <Link
          isExternal
          className={
            "flex items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600"
          }
          href={"https://www.linkedin.com/in/jakobhamilton/"}
        >
          <LinkedinIcon className="mr-1" size={20} />
          LinkedIn
        </Link>
      </div>
    </>
  );
}
