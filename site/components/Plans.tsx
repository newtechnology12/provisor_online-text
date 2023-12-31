import React from "react";
import { Check } from "react-feather";
import Button from "./Button";

export default function Plans() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 gap-3">
      {[
        {
          price: 500,
          name: "umunsi",
          duration: "daily",
          features: [
            "umunsi",
            " Ubufasha kuri telefoni",
            "Amasomo n'amasuzumabumenyi yose",
          ],
        },
        {
          price: 3000,
          name: "icyumweru",
          duration: "weekly",
          features: [
            "icyumweru",
            " Ubufasha kuri telefoni",
            "Amasomo n'amasuzumabumenyi yose",
          ],
        },
        {
          name: "ukwezi 1",
          duration: "monthly",
          price: 5000,
          features: [
            "ukweizi",
            " Ubufasha kuri telefoni",
            "Amasomo n'amasuzumabumenyi yose",
          ],
        },
      ].map((e, index) => {
        return (
          <div key={index}>
            <div className=" mx-auto bg-white border border-gray-200 border-t-[3px] rounded border-t-primary  text-center p-4">
              <div className="overflow-hidden">
                <div className="text-base font-bold capitalize mb-8 text-gray-800 ">
                  {e.name}
                </div>
                <div className="leading-loose flex flex-col justify-start items-start text-sm font-light text-gray-700 mb-5">
                  {/* <div className="font-bold">5000 products</div> */}
                  {e.features.map((e, index) => {
                    return (
                      <div
                        key={index}
                        className="font-semibold leading-7 capitalize flex items-center text-left text-gray-500"
                      >
                        <div>
                          <Check size={15} className="text-primary ml-1 mr-3" />
                        </div>
                        <span> {e}.</span>
                      </div>
                    );
                  })}
                </div>
                <div className="font-bold text-lg mb-2 text-gray-500">
                  <span>{e.price.toLocaleString()} FRW</span>
                </div>
                <div className="text-gray-500 font-semibold capitalize text-sm">
                  / {e.name}
                </div>
                <div className="px-4 mt-8">
                  <Button
                    onClick={() => {
                      //   setselectedPlan(e);
                    }}
                  >
                    Gura {e.name}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
