import { IoThumbsUp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-4 py-8 dark:bg-[#112240]">
      <div className="mx-auto flex max-w-4xl justify-center">
        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <span>
            © {new Date().getFullYear()} James Waniwan. All rights reserved.
          </span>
          <IoThumbsUp className="inline h-4 w-4" />
        </div>
      </div>
    </footer>
  );
}
