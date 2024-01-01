import Link from "next/link";
import React from "react";
import { useAuth } from "../context/authContext";

export default function LessonCard({ item }) {
  const { user }: any = useAuth();

  return (
    <div>
      <Link
        href={
          item.free || user?.subscription === "active"
            ? `/learn/lessons/${item?.id}`
            : `/learn/plans`
        }
      >
        <div className="border bg-white shadow-sm- rounded-[3px] py-3 px-4 ">
          <div>
            <div className="flex items-center mb-2 justify-between">
              <h1 className="text-[15px] font-semibold flex items-center gap-3 text-gray-800">
                <Link
                  href={
                    item.free || user?.subscription === "active"
                      ? `/learn/lessons/${item?.id}`
                      : `/learn/plans`
                  }
                >
                  <a>{item.name}</a>
                </Link>
              </h1>
              <div>
                {!item.free && (
                  <div>
                    <div className="h-7 w-7 cursor-pointer rounded-full flex items-center justify-center border bg-orange-50 border-[#fca120]">
                      <img alt="" className="h-4 w-4" src="/pro.png" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="font-medium text-sm max-w-xl text-slate-500 line-clamp-3 leading-8">
              <Link
                href={
                  item.free || user?.subscription === "active"
                    ? `/learn/lessons/${item?.id}`
                    : `/learn/plans`
                }
              >
                {item.desc ||
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eius placeat quibusdam, nostrum dolores saepe ducimus.`}
              </Link>
            </p>
            <div className="flex items-end mt-3 justify-between">
              <div className="router-link-active router-link-exact-active text-[12.5px] flex w-fit capitalize px-3 py-1 bg-primary bg-opacity-20 rounded-[2px] text-primary font-medium">
                Ibice birigize: {item.sections?.length}
              </div>
              <div className="flex md:flex-col md:items-start items-center justify-between">
                <div className="flex md:mt-3 flex-col justify-end text-right gap-2">
                  <span className="uppercase text-[11px] text-slate-400 font-semibold">
                    Published
                  </span>
                  <span className="font-medium text-sm text-primary capitalize">
                    Nov 30, 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
