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
        title="Infinity Tech Solution | Murakaza neza"
        description="korera perimi na provisoir mugihe gitoya"
        openGraph={{
          url: "https://www.infinitytech.rw/",
          title: "Infinity | Murakaza neza",
          description:
            "Uburyo bwa mbere bworoshye bwo kwigira provisoire mu Rwanda!.",
          images: [
            {
              url: "/images/og.PNG",
              width: 800,
              height: 420,
              alt: "Uburyo bwa mbere bworoshye bwo kwigira provisoire mu Rwanda!.",
            },
          ],
        }}
      />
      <HomeBanner />

      <div className=" my-0 pb-11 md:py-8 max-w-5xl mx-auto px-3">
        <div className="py-0 grid md:grid-cols-1 md:gap-0 grid-cols-3 gap-8 px-0">
          {[
            {
              title: "Amasomo ateguwe bigezweho",
              description: `Tuvunagura mu bice amasomo akomeye tukayagira ayoroshye kandi yigika mu gihe gito..)`,
              image: "images/video-lesson.png",
            },
            {
              title: "Tugutegura gukora ibizamini",
              description: `Uru rubuga rufite imyitozo itandukanye igufasha kwitegura ibizamini bikenerwa nk'uruhushya rw'agateganyo rwo gutwara.`,
              image: "images/test.png",
            },
            {
              title: "Ibiciro biboneye",
              description: `Uhitamo amasomo n'imyitozo ihwanye n'amafaranga wifuza gutanga, kandi ukanyurwa.`,
              image: "/images/price-tag.png",
            },
          ].map((i, index) => {
            return (
              <div
                key={index}
                className="flex text-center gap-4 flex-col sm:my-4- justify-center items-center  sm:px-4 last-of-type:border-b-0- sm:py-3 py-5 border-b- border-gray-100"
              >
                <img alt="" className="h-16" src={i.image} />
                <div className="flex-1 sm:mt-0 mt-2">
                  <h4 className="text-[15px] sm:py-2 sm:text-sm">{i.title}</h4>
                  <p className="text-sm max-w-xl px-4- line-clamp-2 leading-7 font-medium text-gray-500 mt-2">
                    {i.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-extrabold text-gray-900 text-xl">
              Urubuga rwo kwigiraho rwizewe
            </h2>
            <p className="text-base leading-7 text-gray-500 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus <br /> repellat laudantium.
            </p>
          </div>
        </div>
        <div className="mt-10  bg-white sm:pb-10 pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-3">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white border border-slate-200 sm:shadow-sm shadow-lg sm:grid-cols-2 grid grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center border-0 border-r">
                    <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                      Abanyeshuri
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-primary">
                      500+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center border-0 border-l border-r">
                    <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                      Amasaha
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-primary">
                      24/7
                    </dd>
                  </div>
                  <div className="flex sm:col-span-2 flex-col border-t border-gray-100 p-6 text-center border-0 border-l">
                    <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                      Abatsinze
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-primary">
                      400+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* This example requires Tailwind CSS v2.0+ */}
      </div>
      <div className="fixed- bottom-0- inset-x-0 pb-5">
        <div className="max-w-5xl mx-auto px-6 sm:px-3">
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
                    Gura Ifatabuguzi utangire kwiga amasomo yawe igihe cyose.
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

      <div className="max-w-5xl pb-10 mx-auto sm:px-3 px-6">
        <Plans />
      </div>

      <div id="contact" className="bg-gray-50 py-16 sm:py-8 sm:px-3 px-6">
        <div className="max-w-5xl px-5 sm:px-3 mx-auto">
          <div className=" max-w-3xl">
            <h2 className="text-2xl sm:text-xl font-extrabold tracking-tight text-gray-900">
              Ukeneye ubufasha?
            </h2>
            <p className="mt-3 text-base leading-7 max-w-xl text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd className="space-y-3">
                  <p>Gisozi, kigali rwanda</p>
                  <p>KK 258, Kigali</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <Phone
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="+250 785 030 772"
                    className="ml-3 hover:underline text-[15px]"
                  >
                    +250 785 030 772
                  </a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <Mail
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:support@infinitytech.com"
                    className="ml-3 hover:underline text-[15px]"
                  >
                    support@infinitytech.com
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Dusure kurubuga rwa:{" "}
              <a
                target="_blankh"
                href="https://www.infinitytech.rw/"
                className="font-medium text-gray-700 underline"
              >
                infinitytech.rw
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-extrabold text-gray-900 text-xl">
              Amafatabuzi dutanga.
            </h2>
            <p className="text-base leading-8 text-gray-500 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus <br /> repellat laudantium.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="h-screen"></div> */}
    </Fragment>
  );
}
