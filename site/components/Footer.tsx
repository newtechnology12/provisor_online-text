import { useRouter } from "next/router";
import {
  Instagram,
  Linkedin,
  Twitter
} from "react-feather";

export default function Footer() {
  const router = useRouter();
  return (
    <footer
      className={`${
        router.asPath.split("/").includes("learn") && "hidden"
      } border-t mt-0 bg-gray-100 border-gray-200`}
    >
      <div className={` border-gray-300  border-opacity-60`}>
        <div className="py-4 sm:flex-col mx-auto px-3  max-w-5xl  flex justify-between items-center">
          <p className="text-sm text-gray-700 leading-7 font-semibold sm:text-center">
            Copyright © 2023 Infinity Tech Driver. All Rights Reserved.
            <strong className="ml-2">
              Developed by
              <a
                href="https://github.com/newtechnology12"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Infinity Tech Solution Ltd
              </a>
            </strong>
          </p>
          <div className="flex items-center">
            <div className="flex py-2 sm:py-4 sm:justify-start justify-end">
              <a
                href="https://www.instagram.com/Nockira/"
                target="__blank"
                className="px-4 text-gray-600"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com/Nockira"
                target="__blank"
                className="px-4 text-gray-600"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://facebook.com/Nockira"
                target="__blank"
                className="px-4 text-gray-600"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
