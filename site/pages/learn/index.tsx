import Link from "next/link";
import React from "react";
import { ArrowRight } from "react-feather";
import LessonCard from "../../components/LessonCard";
import TestCard from "../../components/TestCard";
import { useAuth } from "../../context/authContext";
import tests from "../../public/tests.json";
import lessons from "../../public/lessons.json";

export default function Index() {
  var hours = new Date().getHours();

  let tStatus = hours < 12 ? "Mwaramutse" : "Mwiriwe";

  const { user }: any = useAuth();

  return (
    <div className="my-2">
      <div className="flex items-center justify-between">
        <div>
          {user && (
            <h2 className="mb-2 text-lg capitalize sm:mb-0">
              {tStatus}, {user.username.split(" ")[0]}
            </h2>
          )}
          <p className="text-[15px] leading-7 sm:hidden font-medium text-gray-500">
            hitamo isomo cyangwa isuzuma utangire kwiga.
          </p>
        </div>
      </div>
      <div className="mt-5">
        {user?.subscription !== "active" && (
          <div className="fixed- bottom-0- inset-x-0 pb-5">
            <div className="mx-auto sm:px-3">
              <div className=" rounded-lg bg-[#0C8C7C] sm:py-5 shadow-lg p-3">
                <div className="flex sm:flex-col items-center justify-between flex-wrap">
                  <div className="w-0- flex-1 flex sm:flex-col p-2 rounded-md items-center">
                    <span className="flex sm:flex-col p-2 rounded-md bg-[#13655b]">
                      {/* Heroicon name: outline/speakerphone */}

                      <svg
                        className="h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M7 4a1 1 0 0 0-.894.553l-4 8a1 1 0 0 0 .118 1.078l13 16a1 1 0 0 0 1.552 0l13-16a1 1 0 0 0 .118-1.078l-4-8A1 1 0 0 0 25 4zm-2.382 8l3-6h4.101l-1.5 6zm.483 2h5.164l3.227 10.328zm7.26 0h7.279L16 25.647zm9.374 0H26.9l-8.391 10.328zm5.647-2h-5.601l-1.5-6h4.101zm-7.663 0h-7.438l1.5-6h4.438z"
                        />
                      </svg>
                    </span>
                    <p className="ml-3 sm:my-3 font-medium sm:text-center sm:px-8 text-white truncate-">
                      <span className="inline- sm:text-center leading-7 text-[15px]">
                        Gura Ifatabuguzi utangire kwiga amasomo yawe igihe
                        cyose.
                      </span>
                    </p>
                  </div>
                  <div className="flex-shrink-0 order-2 mt-0 w-auto">
                    <Link href="/learn/billing">
                      <a className="flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#0C8C7C] bg-white hover:bg-indigo-50">
                        Gura Ifatabuguzi Nonaha.
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-3">
          <div className="my-2">
            {tests.length ? (
              <div className="flex items-center justify-between">
                <h4 className="">Amasuzuma akuzwe</h4>
                <Link href={"/learn/tests"}>
                  <a className="text-sm font-bold text-primary flex items-center">
                    <span> Ayandi</span>
                    <ArrowRight className="ml-2" size={15} />
                  </a>
                </Link>
              </div>
            ) : null}

            <div className="mt-5 sm:grid-cols-1 grid grid-cols-3 gap-3">
              {tests.slice(0, 6).map((e: any, index) => {
                return (
                  <TestCard
                    key={index}
                    item={{
                      id: e.id,
                      name: e.name,
                      questions: e.questions,
                      free: e.free,
                      createdAt: new Date().toLocaleDateString(),
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {lessons.length ? (
          <div className="mt-7">
            <div className="my-2">
              <div className="flex items-center justify-between">
                <h4 className="">Amasomo akuzwe</h4>
                <Link href={`/learn/lessons`}>
                  <a className="text-sm font-bold text-primary flex items-center">
                    <span> Ayandi</span>
                    <ArrowRight className="ml-2" size={15} />
                  </a>
                </Link>
              </div>
              <div className="mt-5 sm:grid-cols-1 grid grid-cols-2 gap-3">
                {lessons.map((e: any, index) => {
                  return (
                    <LessonCard
                      key={index}
                      item={{
                        id: e.id,
                        free: e.free,
                        sections: e.sections,
                        name: e.name,
                        lesson: "police",
                        desc: e.desc,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
