import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

import lessons from "../../../../public/lessons.json";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Lesson({ lesson }) {
  const router = useRouter();

  const data = lesson?.sections;

  const [activeSection, setactiveSection] = useState(0);

  const sec: any = data ? data[activeSection] : undefined;

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setactiveSection(activeSection + 1);
  };
  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setactiveSection(activeSection - 1);
  };

  return (
    <Fragment>
      <div className="border-b gap-3 mb-4 border-slate-300 flex items-center py-4 border-dashed">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {"{"}" "{"}"}
            <path
              d="M21 14L21 2M21 22L21 18"
              stroke="#1C274C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {"{"}" "{"}"}
            <path
              d="M11 5L5.5 5C4.56538 5 4.09808 5 3.75 5.20096C3.52197 5.33261 3.33261 5.52197 3.20096 5.75C3 6.09808 3 6.56538 3 7.5C3 8.43462 3 8.90192 3.20096 9.25C3.33261 9.47803 3.52197 9.66739 3.75 9.79904C4.09808 10 4.56538 10 5.5 10L14.5 10C15.4346 10 15.9019 10 16.25 9.79904C16.478 9.66739 16.6674 9.47803 16.799 9.25C17 8.90192 17 8.43462 17 7.5C17 6.56538 17 6.09808 16.799 5.75C16.6674 5.52197 16.478 5.33261 16.25 5.20096C15.9704 5.03954 15.6139 5.00778 15 5.00153"
              stroke="#1C274C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {"{"}" "{"}"}
            <path
              d="M17 16.5C17 15.5654 17 15.0981 16.799 14.75C16.6674 14.522 16.478 14.3326 16.25 14.201C15.9019 14 15.4346 14 14.5 14H8.5C7.56538 14 7.09808 14 6.75 14.201C6.52197 14.3326 6.33261 14.522 6.20096 14.75C6 15.0981 6 15.5654 6 16.5C6 17.4346 6 17.9019 6.20096 18.25C6.33261 18.478 6.52197 18.6674 6.75 18.799C7.09808 19 7.56538 19 8.5 19H14.5C15.4346 19 15.9019 19 16.25 18.799C16.478 18.6674 16.6674 18.478 16.799 18.25C17 17.9019 17 17.4346 17 16.5Z"
              stroke="#1C274C"
              strokeWidth="2.5"
            />
            {"{"}" "{"}"}
          </g>
        </svg>

        <h4 className="text-base">{lesson.name}</h4>
      </div>
      <div className="bg-white px-4 min-h-56 rounded-[3px] border border-slate-200">
        <div className="prose prose-h2:text-lg prose-img:border prose-headings:leading-10 prose-img:rounded-[4px] prose-img:max-w-[200px] prose-p:text-[15px] prose-base prose-p:text-slate-500 prose-p:!leading-9 prose-h2:mt-3">
          <div dangerouslySetInnerHTML={{ __html: sec?.content || "" }}></div>
        </div>
      </div>
      <div className="flex gap-6 mt-4 items-center mt-0 justify-between">
        {data[activeSection - 1] ? (
          <div
            onClick={() => {
              handlePrev();
            }}
            className="flex items-center border rounded-[4px] bg-white cursor-pointer hover:bg-slate-100 border-gray-200 w-full py-2 px-2"
          >
            <a href="" className="pr-4 pl-2">
              <ChevronLeft size={18} className="text-gray-500" />
            </a>
            <div>
              <h4 className="text-[14px] text-gray-700 mb-2">Subira Inyuma.</h4>
              <p className="font-medium truncate line-clamp-2 text-sm text-gray-500">
                {data[activeSection - 1].position}.{" "}
                {data[activeSection - 1].name}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full"></div>
        )}
        {data[activeSection + 1] ? (
          <div
            onClick={() => {
              handleNext();
            }}
            className="flex items-center justify-end bg-white text-right border rounded-[4px] cursor-pointer hover:bg-slate-100 border-gray-200 w-full py-2 px-2"
          >
            <div>
              <h4 className="text-[14px] mb-2">komeza Imbere.</h4>
              <p className="font-medium line-clamp-1 text-sm text-gray-500">
                {data[activeSection + 1].position}.{" "}
                {data[activeSection + 1].name}
              </p>
            </div>
            <a href="" className="pr-2 pl-4">
              <ChevronRight size={18} className="text-gray-500" />
            </a>
          </div>
        ) : (
          <div className="w-full"></div>
        )}
      </div>
    </Fragment>
  );
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const lesson = lessons.find((e) => params?.id === e.id);

  if (!lesson) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      lesson,
    },
  };
}

export async function getStaticPaths() {
  const paths = lessons.map((lesson) => ({
    params: { id: lesson.id },
  }));
  return { paths, fallback: false };
}
