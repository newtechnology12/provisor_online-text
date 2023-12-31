import React, { Fragment } from "react";
import LessonCard from "../../components/LessonCard";
import { NextSeo } from "next-seo";
import lessons from "../../public/lessons.json";

export default function Lessons() {
  return (
    <Fragment>
      <NextSeo title="Amasomo" />
      <div className="flex mt-2 items-center justify-between">
        <div>
          <h2 className="mb-1 text-[17px] capitalize sm:mb-0">
            Amasomo yo kwiga
          </h2>
          <p className="text-[15px] leading-7 sm:hidden font-medium text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <All />
    </Fragment>
  );
}

function All({}) {
  return (
    // <div className="bg-white mt-3 border border-slate-200">
    <div className="mt-5 grid sm:grid-cols-1 grid-cols-2 gap-3">
      {lessons.map((e: any, index) => {
        return (
          <LessonCard
            key={index}
            item={{
              id: e.id,
              name: e.name,
              lesson: "police",
              desc: e.desc,
              free: e.free,
            }}
          />
        );
      })}
    </div>
    // </div>
  );
}
