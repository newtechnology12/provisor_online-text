import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import { Check, Clock, File, Globe, Smartphone } from "react-feather";

export default function TestModalInfo({ onClose, test, handleStart }: any) {
  return (
    <Modal
      size="lg"
      noPadding
      onClose={() => {
        onClose();
      }}
      noBorder={true}
      title={test.name}
      Content={() => {
        return (
          <div className="px-4 pb-3 pt-1">
            <div>
              <div>
                <h4>Amategeko n' amabwiriza</h4>
                <p className="font-medium text-sm leading-7 text-slate-500 mt-1">
                  Gusobanukirwa amategeko y'umuhanda hagamijwe gutsinda
                  ikizamini
                </p>
                <div className="w-[100px] mt-2 mb-4 flex gap-1 h-[3px]">
                  <div className="w-[70%] rounded-md bg-primary" />
                  <div className="w-[30%] rounded-md bg-primary" />
                </div>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Kumenya Neza Igisobanuro Cya Buri Kimenyetso Kimurika",
                "Ikizamini gifite iminota makumyabiri(20)",
                "Amanota yose hamwe ni 20.",
              ].map((e) => {
                return (
                  <li className="flex sm:items-start items-center gap-3">
                    <div>
                      <div className="bg-primary flex text-primary items-center justify-center bg-opacity-15 h-6 w-6 rounded-full">
                        <Check size={16} />
                      </div>
                    </div>
                    <span className="text-sm leading-7 text-slate-500 font-medium">
                      {e}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="card mt-7">
              <div className="px-3">
                <div>
                  <div className="flex my-4 items-center">
                    <div className="bg-primary bg-opacity-15 rounded-full h-7 w-7 flex items-center justify-center border border-primary border-opacity-30">
                      <Globe size={15} className="text-primary" />
                    </div>
                    <span className="font-medium text-sm ml-3 text-gray-600">
                      Ikinyarwanda
                    </span>
                  </div>
                  <div className="flex my-4 items-center">
                    <div className="bg-primary bg-opacity-15 rounded-full h-7 w-7 flex items-center justify-center border border-primary border-opacity-30">
                      <File size={15} className="text-primary" />
                    </div>

                    <span className="font-medium text-sm ml-3 text-gray-600">
                      Imyitozo ya buri somo kugirango ubyunve
                    </span>
                  </div>
                  <div className="flex my-4 items-center">
                    <div className="bg-primary bg-opacity-15 rounded-full h-7 w-7 flex items-center justify-center border border-primary border-opacity-30">
                      <Smartphone size={15} className="text-primary" />
                    </div>

                    <span className="font-medium text-sm ml-3 text-gray-600">
                      Wakorera kuri telephone na mudasobwa
                    </span>
                  </div>
                  <div className="flex my-4 items-center">
                    <div className="bg-primary bg-opacity-15 rounded-full h-7 w-7 flex items-center justify-center border border-primary border-opacity-30">
                      <Clock size={15} className="text-primary" />
                    </div>

                    <span className="font-medium text-sm ml-3 text-gray-600">
                      Igihe cyose warikorera
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
      Actions={() => {
        return (
          <div className="flex items-center justify-end w-full">
            <Button onClick={handleStart} className="mr-0">
              Tangira isuzuma
            </Button>
          </div>
        );
      }}
    />
  );
}
