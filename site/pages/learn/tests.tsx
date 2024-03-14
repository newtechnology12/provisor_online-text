import { NextSeo } from "next-seo";
import React, { useState, Fragment } from "react";
import TestCard from "../../components/TestCard";
import tests from "../../public/tests2.json";

export default function Tests() {
  const [selected, setselected] = useState(0);
  return (
    <Fragment>
      <NextSeo title="Amasuzuma bumenyi" />
      <div className="flex mt-2 items-center justify-between">
        <div>
          <h2 className="mb-1 text-[17px] capitalize sm:mb-0">
            Amasomo yo kwiga
          </h2>
          <p className="text-[15px] leading-7 sm:hidden font-medium text-gray-500">
            Hitamo isuzuma Umenye niba witeguye gukora ikizamini.
          </p>
        </div>
      </div>
      <All />
    </Fragment>
  );
}

function All() {
  return (
    <div className=" mt-3">
      <div className="mt-1 grid sm:grid-cols-1 grid-cols-3 gap-3">
        {tests.map((e: any, index) => {
          return (
            <TestCard
              key={index}
              item={{
                id: e.id,
                free: e.free,
                name: e.name,
                lesson: "police",
                questions: e.questions,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
