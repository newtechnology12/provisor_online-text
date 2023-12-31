import React, { Fragment, useEffect, useState } from "react";
import {
  CheckCircle,
  ChevronLeft,
  Clock,
  Edit,
  File,
  Globe,
  HelpCircle,
  Smartphone,
  Trash,
  X,
} from "react-feather";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import posed from "react-pose";
import Radio from "../../../components/Radio";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/authContext";
import { useQuery, useQueryClient } from "react-query";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../../../config/firebase";
import Loader from "../../../components/Loader";
import NoContent from "../../../components/NoContent";
import { useToast } from "../../../context/toastContext";
import NewTestModal from "../../../components/NewTestModal";

export default function Test() {
  const router = useRouter();
  const [showTestModal, setshowTestModal] = useState(false);

  const { user }: any = useAuth();

  const { id }: any = router.query;

  const { data, status } = useQuery(
    ["test", id],
    () =>
      getDoc(doc(firestore, "tests", id)).then((doc) => {
        if (doc.exists()) {
          return {
            id: doc.id,
            ...doc.data(),
          };
        } else {
          return undefined;
        }
      }),
    {
      enabled: user !== undefined && id !== undefined,
    }
  );

  const test: any = data;

  const toast: any = useToast();
  const [starting, setstarting] = useState(false);

  const [showPractiveModal, setshowPractiveModal] = useState(false);
  const handleStart = async ({ mode }: { mode?: string }) => {
    if (user.subscription !== "active" && test.free !== true) {
      router.push(`/learn/plans?redirect_url=${router.asPath}`);
    } else {
      setstarting(true);
      return setDoc(
        doc(firestore, "users", user.id, "tests", test.id),
        {
          test: {
            name: test.name,
            createdAt: test.createdAt,
            desc: test.desc,
            id: test.id,
            counts: {
              questions: test.counts?.questions || 0,
            },
          },
          createdAt: serverTimestamp(),
          progress: 0,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      )
        .then((e) => {
          if (mode === "practice") {
            setshowPractiveModal(true);
          } else {
            setshowTestModal(true);
          }

          setstarting(false);
        })
        .catch((e) => {
          setstarting(false);
          toast.show({ title: e.message, danger: true });
        });
    }
  };
  const client = useQueryClient();

  const [deleting, setdeleting] = useState(false);

  const handleDelete = () => {
    if (confirm("urashaka gusiba isuzuma")) {
      setdeleting(true);
      return deleteDoc(doc(firestore, "tests", id))
        .then((e) => {
          toast.show({ title: "gusiba isomo byagenze neza" });
          router.push(`/learn/tests`);
          setdeleting(false);
          client.invalidateQueries("tests");
        })
        .catch((e) => {
          toast.show({ title: e.message, danger: true });
        });
    }
  };

  const [showUpdateModal, setshowUpdateModal] = useState(false);
  return (
    <div>
      {status === "loading" && (
        <div className="w-full h-[50vh] flex items-center justify-center">
          <Loader primary />
        </div>
      )}
      {status === "success" && !data && (
        <NoContent
          Icon={() => {
            return (
              <img
                height={150}
                width={150}
                className="mb-5"
                src="/images/test.svg"
              />
            );
          }}
          title="Isuzuma ushaka narihari"
          subTitle="Isuzuma ushaka narihari mwongere mugerageze mukanya."
        />
      )}

      {status === "success" && test && (
        <Fragment>
          <div className="max-w-7xl px-3 mx-auto  md:my-5 my-2">
            <div className=" ">
              <div className="col-span-2">
                <div className="mb-6 flex items-center justify-between border-l-2 border-l-primary px-3">
                  <div>
                    <h4 className="text-base md:text-xl sm:text-[18px]">
                      {test.name}
                    </h4>
                    <p className="font-semibold text-sm my-2 max-w-xl leading-7 text-gray-500">
                      {test.desc}
                    </p>
                  </div>
                  {test.free && (
                    <span
                      className={`text-primary bg-green-100 font-semibold capitalize text-sm px-4 py-[6px] rounded-full`}
                    >
                      Ni ubuntu
                    </span>
                  )}
                </div>

                <div>
                  <div className="mt-7">
                    <div className="my-3">
                      <h4 className="text-[14.5px] border-l-2 border-l-primary px-3  capitalize">
                        Amategeko y&apos;iri suzuma
                      </h4>
                    </div>
                    <div className="grid sm:grid-cols-1 grid-cols-2 gap-0">
                      {test.instructions.map((i, index) => {
                        return (
                          <div key={index} className="my-1 flex items-start">
                            <span className="mr-3 mt-3">
                              <CheckCircle size={16} className="text-primary" />
                            </span>
                            <p className="font-semibold leading-8 capitalize text-[14px] text-gray-600">
                              {i}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card mt-7">
                  <div className="px-5">
                    <div>
                      {[
                        {
                          icon: Globe,
                          title: "Ikinyarwanda",
                        },
                        {
                          icon: File,
                          title: "Imyitozo ya buri somo kugirango ubyunve",
                        },

                        {
                          icon: Smartphone,
                          title: "wakorera kuri telephone na mudasobwa",
                        },
                        {
                          icon: Clock,
                          title: "Igihe cyose warikorera",
                        },
                      ].map((i, index) => {
                        return (
                          <div key={index} className="flex my-6 items-center">
                            <i.icon size={18} className="text-primary" />
                            <span className="font-semibold text-sm ml-3 text-gray-600">
                              {i.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-center flex mb-4 flex-row gap-3 items-center">
                      <Button
                        className="w-full"
                        loading={starting}
                        onClick={() => {
                          handleStart({ mode: "test" });
                        }}
                      >
                        Tangira isuzuma
                      </Button>
                      {/* <Button
                        className="!w-full"
                        loading={starting}
                        outlined
                        onClick={() => {
                          handleStart({ mode: "practice" });
                        }}
                      >
                        Itoze isuzuma
                      </Button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {user.role === "admin" && (
            <div className="flex py-3 gap-4 px-3">
              <Button
                onClick={() => {
                  handleDelete();
                }}
                className="flex-1"
                Icon={Trash}
                loading={deleting}
                danger
              >
                Siba isuzuma
              </Button>
              <Button
                onClick={() => {
                  setshowUpdateModal(true);
                }}
                className="flex-1 bg-[#7933ff] "
                Icon={Edit}
              >
                hindura
              </Button>
              <Button
                onClick={() => {
                  router.push(router.asPath + "/questions");
                }}
                className="flex-1 bg-slate-900 "
                Icon={HelpCircle}
              >
                Ibibazo
              </Button>
            </div>
          )}
        </Fragment>
      )}

      {showUpdateModal && data && (
        <NewTestModal
          test={data}
          reFetch={() => {
            client.invalidateQueries(["test", id]);
          }}
          onClose={() => {
            setshowUpdateModal(false);
          }}
        />
      )}

      {showTestModal && data && (
        <TestModal
          id={data.id}
          onClose={() => {
            setshowTestModal(false);
          }}
        />
      )}

      {showPractiveModal && data && (
        <TestModal
          id={data.id}
          isPractice={true}
          onClose={() => {
            setshowPractiveModal(false);
          }}
        />
      )}
    </div>
  );
}
