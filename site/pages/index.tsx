import { NextSeo } from "next-seo";
import { Fragment } from "react";
import HomeBanner from "../components/HomeBanner";
import Plans from "./learn/plans";
import { Mail, Phone } from "react-feather";
import Link from "next/link";

export default function Home() {
  return (
    <Fragment>
      <NextSeo
        title="Infinity Tech Driving | Murakaza neza"
        description="Ku Isonga mu mategeko y'umuhanda no gutegura Ikizami cya Provisoir."
        openGraph={{
          url: "https://www.infinitytech.rw/",
          title: "Infinity | Murakaza neza",
          description:
            "Uburyo bwa mbere bworoshye bwo kwigira provisoire mu Rwanda!.",
          images: [
            {
              url: "",
              width: 800,
              height: 420,
              alt: "Uburyo bwa mbere bworoshye bwo kwigira provisoire mu Rwanda!.",
            },
          ],
        }}
      />
      <HomeBanner />

      <div className="relative lg:px-3- h-fit">
        <img
          src="images/stats_bg.png"
          className="absolute object-cover object-left h-full w-full"
          alt=""
        />
        <div className="max-w-5xl py-6 relative mx-auto">
          <div className="sm:grid-cols-2 grid grid-cols-3">
            <div className="flex items-center gap-4 p-6 border-0">
              <svg
                width={48}
                height={49}
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width={48} height={48} rx={8} fill="#1F9788" />
                <rect
                  x="0.5"
                  y={1}
                  width={47}
                  height={47}
                  rx="7.5"
                  stroke="#1AA795"
                  strokeOpacity="0.4"
                />
                <path
                  d="M18.6666 28.5C15.7211 28.5 13.3333 30.8879 13.3333 33.8333V36.5H34.6666V33.8333C34.6666 30.8879 32.2787 28.5 29.3333 28.5H23.9999M23.9999 12.5C21.0544 12.5 18.6666 14.8878 18.6666 17.8333C18.6666 20.7789 21.0544 23.1667 23.9999 23.1667C26.9454 23.1667 29.3333 20.7789 29.3333 17.8333C29.3333 16.8619 29.0735 15.9511 28.6198 15.1667"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="">
                <div className="text-2xl md:text-xl font-extrabold text-white">
                  500+
                </div>
                <div className="mt-1 text-base leading-6 font-medium text-white">
                  Abanyeshuri
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 border-0">
              <svg
                width={48}
                height={49}
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width={48} height={48} rx={8} fill="#1F9788" />
                <rect
                  x="0.5"
                  y={1}
                  width={47}
                  height={47}
                  rx="7.5"
                  stroke="#1AA795"
                  strokeOpacity="0.4"
                />
                <path
                  d="M24 19.6667V25L26.6667 27.6667M24 13C17.3726 13 12 18.3726 12 25C12 31.6275 17.3726 37 24 37C30.6275 37 36 31.6275 36 25C36 22.5465 35.2637 20.265 34 18.3644"
                  stroke="#7EE8DB"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="">
                <div className="text-2xl md:text-xl font-extrabold text-white">
                  24/7
                </div>
                <div className="mt-1 text-base leading-6 font-medium text-white">
                  Amasaha
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 border-0">
              <svg
                width={48}
                height={49}
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width={48} height={48} rx={8} fill="#1F9788" />
                <rect
                  x="0.5"
                  y={1}
                  width={47}
                  height={47}
                  rx="7.5"
                  stroke="#1AA795"
                  strokeOpacity="0.4"
                />
                <path
                  d="M18.6667 36.5H29.3333M24 36.5V31.1667C20.3181 31.1667 17.3333 28.1819 17.3333 24.5V13.8333H30.6667V24.5C30.6667 26.0008 30.1708 27.3857 29.3339 28.5M30.6667 16.5H32.6667C34.5076 16.5 36 17.9924 36 19.8333C36 21.6743 34.5076 23.1667 32.6667 23.1667H30.6667M17.3333 23.1667H15.3333C13.4924 23.1667 12 21.6743 12 19.8333C12 17.9924 13.4924 16.5 15.3333 16.5H17.3333"
                  stroke="#7EE8DB"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="">
                <div className="text-2xl md:text-xl font-extrabold text-white">
                  400+
                </div>
                <div className="mt-1 text-base leading-6 font-medium text-white">
                  Abatsinze
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-1 md:px-4 lg:px-3 gap-8 py-12 max-w-5xl mx-auto grid-cols-2">
        <div className="space-y-4 md:mb-5">
          <h4 className="text-primary md:text-xl leading-8 text-2xl">
            Uburyo dutangamo <br className="sm:hidden" />
            services zacu
          </h4>
          <p className="leading-8 text-slate-500">
            Infinity tech solutions nurubuga ratanga services zarwo muburyo
            bwihariye.
          </p>
        </div>
        <div className="flex md:flex-col md:items-center md:text-center items-center gap-4">
          <img
            className="object-contain h-36 w-[500px] overflow-hidden rounded-md"
            src="images/boards.png"
            alt=""
          />
          <div>
            <h1 className="text-primary mb-2 font-semibold">
              Amasomo ateguwe bigezweho
            </h1>
            <p className="leading-7 text-slate-500">
              Tuvunagura mu bice amasomo akomeye tukayagira ayoroshye kandi
              yigika mu gihe
            </p>
          </div>
        </div>
        <div className="flex  md:flex-col md:items-center md:text-center items-center gap-4">
          <img
            className="object-contain h-36 rounded-md"
            src="images/exam.png"
            alt=""
          />
          <div>
            <p className="text-primary mb-2 font-semibold">
              Amasomo ateguwe bigezweho
            </p>
            <p className="leading-7 text-slate-500">
              Tuvunagura mu bice amasomo akomeye tukayagira ayoroshye kandi
              yigika mu gihe
            </p>
          </div>
        </div>
        <div className="flex  md:flex-col md:items-center md:text-center items-center gap-4">
          <img
            className="object-contain h-36 w-[500px] overflow-hidden rounded-md"
            src="images/pricing.png"
            alt=""
          />
          <div>
            <p className="text-primary mb-2 font-semibold">Ibiciro biboneye</p>
            <p className="leading-7 text-slate-500">
              Uhitamo amasomo n'imyitozo ihwanye n'amafaranga wifuza gutanga,
              kandi ukanyurwa.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className=" lg:!px-3">
        <div className="relative max-w-5xl mx-auto rounded-md overflow-hidden">
          <img
            src="images/bg_contact.png"
            className="absolute object-cover object-right left-0 top-0 w-full h-full"
            alt=""
          />
          <div className="relative md:grid-cols-2 z-30 md:px-6 px-10 py-8 grid grid-cols-7 items-center gap-3">
            <div className="col-span-3">
              <h4 className="text-primary mb-3 md:text-xl text-2xl">
                Ukeneye ubufasha?
              </h4>
              <p className="text-white text-base leading-8">
                Niba ufite icyibazo cyangwa ukeneye ubufasha turahari igihe
                cyose. twandikire cg uduhamare tugufashe nonaho.
              </p>
            </div>
            <div className="grid md:grid-cols-1 md:gap-6 grid-cols-2 col-span-4">
              <div className="flex items-center gap-3">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={48} height={48} rx={8} fill="#1F9788" />
                  <rect
                    x="0.5"
                    y="0.5"
                    width={47}
                    height={47}
                    rx="7.5"
                    stroke="#1AA795"
                    strokeOpacity="0.4"
                  />
                  <g clipPath="url(#clip0_588_374)">
                    <path
                      d="M23.5 25.5C25.7091 25.5 27.5 23.7091 27.5 21.5C27.5 19.2909 25.7091 17.5 23.5 17.5C21.2909 17.5 19.5 19.2909 19.5 21.5C19.5 23.7091 21.2909 25.5 23.5 25.5Z"
                      stroke="#7EE8DB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33.5 21.5C33.5 30.5 23.5 37.5 23.5 37.5C23.5 37.5 13.5 30.5 13.5 21.5C13.5 18.8478 14.5536 16.3043 16.4289 14.4289C18.3043 12.5536 20.8478 11.5 23.5 11.5C26.1522 11.5 28.6957 12.5536 30.5711 14.4289C32.4464 16.3043 33.5 18.8478 33.5 21.5Z"
                      stroke="#7EE8DB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_588_374">
                      <rect
                        width={32}
                        height={32}
                        fill="white"
                        transform="translate(7.5 8.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <h4 className="text-white mb-2 text-sm  font-medium">
                    Gisozi, kigali rwanda
                  </h4>
                  <p className="text-white text-sm font-medium">
                    KK 258, Kigali
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  width={48}
                  height={49}
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width={48} height={48} rx={8} fill="#1F9788" />
                  <rect
                    x="0.5"
                    y={1}
                    width={47}
                    height={47}
                    rx="7.5"
                    stroke="#1AA795"
                    strokeOpacity="0.4"
                  />
                  <g clipPath="url(#clip0_588_380)">
                    <path
                      d="M34.5 14.5H12.5C11.9477 14.5 11.5 14.9477 11.5 15.5V33.5C11.5 34.0523 11.9477 34.5 12.5 34.5H34.5C35.0523 34.5 35.5 34.0523 35.5 33.5V15.5C35.5 14.9477 35.0523 14.5 34.5 14.5Z"
                      stroke="#7EE8DB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 20.5C16.8284 20.5 17.5 19.8284 17.5 19C17.5 18.1716 16.8284 17.5 16 17.5C15.1716 17.5 14.5 18.1716 14.5 19C14.5 19.8284 15.1716 20.5 16 20.5Z"
                      fill="#7EE8DB"
                    />
                    <path
                      d="M21 20.5C21.8284 20.5 22.5 19.8284 22.5 19C22.5 18.1716 21.8284 17.5 21 17.5C20.1716 17.5 19.5 18.1716 19.5 19C19.5 19.8284 20.1716 20.5 21 20.5Z"
                      fill="#7EE8DB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_588_380">
                      <rect
                        width={32}
                        height={32}
                        fill="white"
                        transform="translate(7.5 8.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <h4 className="text-white mb-2 text-sm  font-medium">
                    +250 798 735 385
                  </h4>
                  <p className="text-white text-sm font-medium">
                    Support@infinitytech.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
