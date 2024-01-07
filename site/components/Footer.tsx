import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer
      className={`${
        router.pathname.split("/").includes("learn") && "hidden"
      } py-4 mt-0 lg:px-3 bg-gray-100- border-gray-200-`}
    >
      <div className="flex max-w-5xl md:flex-col md:gap-4 mx-auto items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Infinity tech drive, Inc. All rights
            reserved.
          </p>
        </div>
        <ul className="flex items-center">
          {[
            { title: "ahabanza", link: "/" },
            { title: "Abo turibo", link: "/about" },
            { title: "Twandikire", link: "/about" },
          ].map((e, index) => {
            return (
              <li key={index}>
                <Link href={e.link}>
                  <a
                    className={` text-slate-500 hover:underline flex items-center gap-2 mx-1 font-medium- capitalize rounded-[4px] px-2 py-2 truncate text-[14px]`}
                    href=""
                  >
                    <span>{e.title}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
