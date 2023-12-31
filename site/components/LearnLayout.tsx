import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Avatar } from "./Avatar";
import Logo from "./Logo";

export default function LearnLayout({ children }) {
  const router = useRouter();

  const { user, loading }: any = useAuth();

  useEffect(() => {
    if (!user && !loading && router.asPath.split("/").includes("learn")) {
      router.push(`/auth/login?redirect_url=${router.asPath}`);
    }
  }, [user, loading, router.asPath]);

  return (
    <div className="my-0 px-3- max-w-5xl- mx-auto">
      <div className=" flex">
        <div className="w-[270px] h-[100vh] top-0 bg-white fixed  bg-blak md:hidden">
          <div className="border-l h-full flex flex-col justify-between border-r border-gray-200">
            <div>
              <div className="px-4 border-b py-4">
                <Link href="/learn">
                  <a>
                    <Logo />
                  </a>
                </Link>
              </div>
              <ul className="px-2 pt-3">
                {[
                  {
                    title: "Ahabanza",
                    link: "/",
                    icon: () => {
                      return (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-4 stroke-current text-white-"
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
                              d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                          </g>
                        </svg>
                      );
                    },
                  },
                  {
                    title: "Amasomo",
                    link: "/lessons",
                    icon: () => {
                      return (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 stroke-current text-white-"
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
                              d="M18 6V10.8528C18 11.1429 18 11.2879 17.9051 11.3465C17.8103 11.4051 17.6806 11.3403 17.4211 11.2106L16.1789 10.5894C16.0911 10.5456 16.0472 10.5236 16 10.5236C15.9528 10.5236 15.9089 10.5456 15.8211 10.5894L14.5789 11.2106C14.3194 11.3403 14.1897 11.4051 14.0949 11.3465C14 11.2879 14 11.1429 14 10.8528V6"
                              strokeWidth={2}
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M22 11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975M21.9913 16C21.9554 18.4796 21.7715 19.8853 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V11"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                          </g>
                        </svg>
                      );
                    },
                  },
                  {
                    title: "amasuzuma bumenyi",
                    link: "/tests",
                    icon: () => {
                      return (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 stroke-current text-white-"
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
                              d="M3 11.0975V16.0909C3 19.1875 3 20.7358 3.73411 21.4123C4.08422 21.735 4.52615 21.9377 4.99692 21.9915C5.98402 22.1045 7.13675 21.0849 9.44216 19.0458C10.4612 18.1445 10.9708 17.6938 11.5603 17.5751C11.8506 17.5166 12.1494 17.5166 12.4397 17.5751C13.0292 17.6938 13.5388 18.1445 14.5578 19.0458C16.8633 21.0849 18.016 22.1045 19.0031 21.9915C19.4739 21.9377 19.9158 21.735 20.2659 21.4123C21 20.7358 21 19.1875 21 16.0909V11.0975C21 6.80891 21 4.6646 19.682 3.3323C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.3323C3.5108 4.14827 3.19796 5.26881 3.07672 7"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M15 6H9"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                          </g>
                        </svg>
                      );
                    },
                  },
                  {
                    title: "ifata buguzi",
                    link: "/billing",
                    icon: () => {
                      return (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 stroke-current text-white-"
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
                              d="M6 10H10"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M21.9977 12.5C21.9977 12.4226 22 11.9673 21.9977 11.9346C21.9623 11.4338 21.5328 11.035 20.9935 11.0021C20.9583 11 20.9167 11 20.8333 11H18.2308C16.4465 11 15 12.3431 15 14C15 15.6569 16.4465 17 18.2308 17H20.8333C20.9167 17 20.9583 17 20.9935 16.9979C21.5328 16.965 21.9623 16.5662 21.9977 16.0654C22 16.0327 22 15.5774 22 15.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                            <circle cx={18} cy={14} r={1} fill="#1C274C" />
                            {"{"}" "{"}"}
                            <path
                              d="M10 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.6366 20.0203 20.8873 18.8723 20.965 17M20.965 11C20.8873 9.1277 20.6366 7.97975 19.8284 7.17157C18.6569 6 16.7712 6 13 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C3.82475 21.4816 4.69989 21.7706 6 21.8985"
                              strokeWidth={2}
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M6 6L9.73549 3.52313C10.7874 2.82562 12.2126 2.82562 13.2645 3.52313L17 6"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                          </g>
                        </svg>
                      );
                    },
                  },
                  {
                    title: "Konte Yange",
                    link: "/account",
                    icon: () => {
                      return (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 stroke-current text-white-"
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
                            <circle cx={12} cy={9} r={2} strokeWidth={2} />
                            {"{"}" "{"}"}
                            <path
                              d="M16 15C16 16.1046 16 17 12 17C8 17 8 16.1046 8 15C8 13.8954 9.79086 13 12 13C14.2091 13 16 13.8954 16 15Z"
                              strokeWidth={2}
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 14.4963 20.1632 16.4284 19 17.9041M3.19284 14C4.05026 18.2984 7.57641 20.5129 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C14.6796 21.2747 15.3324 20.9478 16 20.5328"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                          </g>
                        </svg>
                      );
                    },
                  },
                  {
                    title: "abafatabuguzi",
                    link: "/subscribers",
                    strict: true,
                    icon: () => {
                      return (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 stroke-current text-white-"
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
                              d="M10 14.3C10.5207 14.7686 10.8126 15.0314 11.3333 15.5L14 12.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196C4.65416 7.84393 4.36155 9.40452 3.77633 12.5257C2.9534 16.9146 2.54194 19.1091 3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545C20.9542 19.7159 21.1079 18.6252 20.9536 17"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                          </g>
                        </svg>
                      );
                    },
                  },
                  {
                    title: "abantu",
                    link: "/users",
                    strict: true,
                    icon: () => {
                      return (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 stroke-current text-white-"
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
                            <circle cx={9} cy={6} r={4} strokeWidth={2} />
                            {"{"}" "{"}"}
                            <path
                              d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M5.88915 20.5843C6.82627 20.8504 7.88256 21 9 21C12.866 21 16 19.2091 16 17C16 14.7909 12.866 13 9 13C5.13401 13 2 14.7909 2 17C2 17.3453 2.07657 17.6804 2.22053 18"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                            <path
                              d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            {"{"}" "{"}"}
                          </g>
                        </svg>
                      );
                    },
                  },
                  {
                    title: "gusohoka",
                    link: "/logout",
                    icon: () => {
                      return (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 stroke-current text-white-"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M10 12H20M20 12L17 9M20 12L17 15"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                            <path
                              d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17"
                              strokeWidth="2"
                              strokeLinecap="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      );
                    },
                  },
                ].map((e: any, index) => {
                  return (
                    <li
                      className={`${
                        e?.strict && user?.role !== "admin" && "hidden"
                      }`}
                      key={index}
                    >
                      <Link href={`/learn${e.link}`}>
                        <a
                          className={`${
                            router.asPath ===
                            "/learn" + (e.link === "/" ? "" : e.link)
                              ? "=border-l-[3px] text-white rounded-[4px] bg-primary border-primary-"
                              : "text-gray-600 hover:bg-primary hover:border-primary hover:border-opacity-35 hover:border border border-transparent rounded-[4px] hover:bg-opacity-10 hover:text-primary "
                          } py-[10px] ${
                            index !== 0 && "my-2"
                          } px-4 flex gap-5  items-center capitalize text-[14.5px] font-medium `}
                        >
                          {e.icon && <e.icon size={16} />}
                          {e.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {user && (
              <div className="flex px-[6px] py-[6px] gap-2">
                <div className="bg-slate-100 border px-[6px] bg-opacity-60 cursor-pointer border-slate-200 rounded-[4px] py-[6px] items-center justify-between w-full flex ">
                  <div className="flex items-center gap-2">
                    <Avatar rounded src={user?.photo} name={user?.username} />

                    <div className="space-y-[2px]">
                      <h4 className="text-[12.5px] font-semibold capitalize text-slate-700">
                        {user.username}
                      </h4>
                      <p className="text-[12px]  text-slate-500 capitalize font-medium">
                        Student
                      </p>
                    </div>
                  </div>
                  <Link href="/learn/logout">
                    <a className="h-8 w-8 border border-slate-200 cursor-pointer bg-white rounded-md flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 stroke-current text-white-"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M10 12H20M20 12L17 9M20 12L17 15"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border-r sm:border-r-0 md:pl-0 md:pr-0 bg-slate-50 min-h-screen border-gray-200 pl-[265px] pb-8 pt-3 w-full ">
          <div className="max-w-4xl sm:px-3 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
