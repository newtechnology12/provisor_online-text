import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { Check } from "react-feather";
import { useQuery } from "react-query";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import NoContent from "../../components/NoContent";
import { firestore } from "../../config/firebase";
import { useAuth } from "../../context/authContext";
import { useToast } from "../../context/toastContext";

export default function Billing() {
  const { user }: any = useAuth();

  const { data, status } = useQuery(
    "subscription",
    () =>
      getDoc(doc(firestore, "subscriptions", user.id)).then((doc) => {
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
      enabled: user !== undefined,
    }
  );

  const subscription: any = data;

  const router = useRouter();

  const billing: any = data;

  var start: any = new Date(billing?.start?.toDate()),
    end: any = new Date(billing?.end?.toDate()),
    today: any = new Date();

  //use Math.abs to avoid sign
  var q = Math.abs(today - start);
  var d = Math.abs(end - start);

  const diffAllTime = Math.abs(start - end);
  const diffCovedTime = Math.abs(start - today);
  const allDays = Math.ceil(diffAllTime / (1000 * 60 * 60 * 24));
  const covedDays = Math.ceil(diffCovedTime / (1000 * 60 * 60 * 24));

  const { reloadAuth } = useAuth();
  const toast: any = useToast();
  const [loadingCancel, setloadingCancel] = useState(false);
  const handleCancel = () => {
    setloadingCancel(true);
    return updateDoc(doc(firestore, "subscriptions", user.id), {
      cancledAt: serverTimestamp(),
      status: "cancled",
    }).then((e) => {
      setTimeout(() => {
        setloadingCancel(false);
        reloadAuth();
        toast.show({ title: "guhagarika ifatabuguzi byagenze neza" });
      }, 4000);
    });
  };

  return (
    <Fragment>
      <NextSeo title="Ifatabuguzi" />

      {status === "success" &&
        subscription &&
        subscription.status === "active" && (
          <div className="max-w-5xl mx-auto my-6">
            <div className="card max-w-4xl">
              <div className="card-head">
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-sm ">Ifatabuguzi ryawe</h4>
                </div>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-4 sm:grid-cols-2 gap-5 mt-2 mb-4">
                  {[
                    {
                      title: "gahunda",
                      subtitle:
                        billing.plan === "weekly"
                          ? "icyumweru"
                          : billing.plan === "monthly"
                          ? "ukwezi"
                          : billing.plan === "-month"
                          ? "amezi 2"
                          : "",
                    },
                    {
                      title: "igiciro",
                      subtitle: billing?.payment?.amount + " Frw",
                    },
                    {
                      title: "itariki yogutangira",
                      subtitle: new Date(
                        billing.start.toDate()
                      ).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }),
                    },
                    {
                      title: "itariki yo kurangira",
                      subtitle: new Date(
                        billing.end.toDate()
                      ).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }),
                    },
                  ].map((e, index) => {
                    return (
                      <div key={index}>
                        <p className="font-semibold text-[13px] text-gray-600 capitalize">
                          {e.title}
                        </p>
                        <h4 className="capitalize sm:text-sm text-[13px] text-gray-700 mt-3">
                          {e.subtitle}
                        </h4>
                      </div>
                    );
                  })}
                </div>

                <div className="border border-gray-200 sm:p-3 p-5 pt-3 rounded-[4px] my-6">
                  <div>
                    <div className="flex justify-between mb-3  items-center">
                      <h3 className="text-[14px] capitalize">
                        Amakuru kwifatabuguzi
                      </h3>
                      <span
                        className={`${
                          billing.status === "active"
                            ? "text-green-500 bg-green-100 "
                            : billing.status === "past-due"
                            ? "text-orange-500 bg-orange-100 "
                            : billing.status === "expired"
                            ? "text-red-500 bg-red-100 "
                            : ""
                        } font-semibold capitalize text-[13px] px-3 py-[4px] rounded-[4px]`}
                      >
                        {billing.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mt-2 mb-3">
                      <h3 className="text-sm  font-medium">Ikoreshwa</h3>
                      <p className="font-medium capitalize text-gray-600 text-sm">
                        iminsi{" "}
                        <b className="text-red-500">
                          {billing.status === "expired" ? "yose" : covedDays}
                        </b>{" "}
                        mu minsi <b className="text-green-500">{allDays}</b>{" "}
                        yakoreshejwe
                      </p>
                    </div>
                    <div className="mt-0 relative">
                      <div className="w-full overflow-hidden bg-gray-200 rounded-full mb-0">
                        <div
                          style={{ width: Math.round((q / d) * 100) + "%" }}
                          className="rounded-full h-2 bg-[#0C8C7C]"
                        />
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>

                <div className="my-5">
                  <div className="my-3">
                    <h4 className="text-[14px] capitalize text-gray-700">
                      Inyungu y&apos; ifatabuguzi.
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-1 grid-cols-2">
                    {[
                      "Inzira yo kwiga yihariye",
                      "Amasomo ateguwe bigezweho",
                      "Tugutegura gukora ibizamini",
                      "Ibiciro biboneye",
                    ].map((i, index) => {
                      return (
                        <div key={index} className="my-2 flex items-center">
                          <span className="mr-3 bg-primary bg-opacity-20 p-1 rounded-full">
                            <Check size={14} className="text-primary" />
                          </span>
                          <p className="font-medium text-[14px] text-gray-700">
                            {i}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {billing.status === "expired" && (
                <div className="card-footer">
                  <Button
                    onClick={() => {
                      router.push("/learn/plans");
                    }}
                  >
                    Gura ifatabuguzi
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

      {status === "loading" && (
        <div className="w-full card h-[50vh] flex items-center justify-center">
          <Loader primary small />
        </div>
      )}
      {((status === "success" && !data) ||
        (status === "success" && subscription.status !== "active")) && (
        <div className="card my-3 py-8">
          <NoContent
            Icon={() => {
              return (
                <img
                  height={70}
                  width={70}
                  className="mb-5"
                  src="/images/receipt.png"
                />
              );
            }}
            action={{
              title: "Gura ifatabuguzi",
              onClick: () => {
                router.push("/learn/plans");
              },
            }}
            title="Nta fatabuguzi ufite"
            subTitle="Nta fatabuguzi ufite, Kanda hasi aho kigurango ubashe kwigurira ifatabuguzi utangire kwiga."
          />
        </div>
      )}
    </Fragment>
  );
}
