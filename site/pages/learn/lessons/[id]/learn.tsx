import React, { Fragment, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  User,
} from "react-feather";
import Button from "../../../../components/Button";
import { useAuth } from "../../../../context/authContext";
import NoContent from "../../../../components/NoContent";
import { useRouter } from "next/router";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useQuery } from "react-query";
import { firestore } from "../../../../config/firebase";
import Loader from "../../../../components/Loader";
import Modal from "../../../../components/Modal";

export default function Learn() {
  const router = useRouter();
  const { user }: any = useAuth();
  const { id }: any = router.query;

  const load = async () => {
    const lessons = [
      {
        id: "I2DvPY8iiWZKTOtRtRiS",
        name: "Umwitozo wa 2",
        desc: "",
        questions: [],
        createdAt: {
          seconds: 1664713632,
          nanoseconds: 439000000,
        },
        instructions: [],
        updatedAt: {
          seconds: 1674164075,
          nanoseconds: 304000000,
        },
        counts: {
          participants: 0,
        },
        free: false,
      },
      {
        id: "bz99HaT2BxfQlHdrTC02",
        updatedAt: {
          seconds: 1666513196,
          nanoseconds: 807000000,
        },
        desc: "",
        counts: {
          participants: 0,
          questions: 0,
        },
        createdAt: {
          seconds: 1664805354,
          nanoseconds: 398000000,
        },
        name: "Umwitozo wa 3",
        instructions: [],
      },
      {
        id: "gSEAFEA6Yb9P6pXuv8Wi",
        instructions: [],
        name: "Umwitozo wa 4",
        counts: {
          participants: 0,
        },
        desc: "Gusobanukirwa amategeko y'umuhanda hagamijwe gutsinda ikizamini",
        questions: [],
        createdAt: {
          seconds: 1664886432,
          nanoseconds: 415000000,
        },
        updatedAt: {
          seconds: 1666480363,
          nanoseconds: 885000000,
        },
      },
      {
        id: "O1FN7fO7WFYL082fP0BN",
        updatedAt: {
          seconds: 1666482529,
          nanoseconds: 677000000,
        },
        name: "Umwitozo wa 5",
        createdAt: {
          seconds: 1664886432,
          nanoseconds: 602000000,
        },
        questions: [],
        instructions: [],
        desc: "Gusobanukirwa amategeko y'umuhanda hagamijwe gutsinda ikizamini",
        counts: {
          participants: 0,
        },
      },
      {
        id: "ql9lqvB7Fc5sR8Causpt",
        createdAt: {
          seconds: 1666513994,
          nanoseconds: 413000000,
        },
        desc: "",
        instructions: [],
        name: "Ikizamini cya 1",
        counts: {
          questions: 0,
          participants: 0,
        },
        updatedAt: {
          seconds: 1666513994,
          nanoseconds: 413000000,
        },
      },
      {
        id: "NnhlW46IoIYYrW0KZIWu",
        createdAt: {
          seconds: 1666517829,
          nanoseconds: 851000000,
        },
        counts: {
          participants: 0,
          questions: 0,
        },
        name: "Ikizamini Cya 2",
        free: false,
        updatedAt: {
          seconds: 1671011084,
          nanoseconds: 507000000,
        },
        instructions: [],
        desc: "",
      },
      {
        id: "LpUjz2t6cf5lqEh1DGNf",
        createdAt: {
          seconds: 1666522084,
          nanoseconds: 827000000,
        },
        name: "Ikizamini Cya 3",
        counts: {
          participants: 0,
          questions: 0,
        },
        instructions: [],
        updatedAt: {
          seconds: 1666522084,
          nanoseconds: 827000000,
        },
        desc: "",
      },
      {
        id: "ZUSPUSfxpTa2xzzlaYqn",
        desc: "",
        name: "Ikizamini Cya 4",
        instructions: [],
        counts: {
          questions: 0,
          participants: 0,
        },
        createdAt: {
          seconds: 1666525000,
          nanoseconds: 422000000,
        },
        updatedAt: {
          seconds: 1666525000,
          nanoseconds: 422000000,
        },
      },
      {
        id: "aokVeURMbxhk0SaV48LD",
        name: "Ikizamini Cya 5",
        counts: {
          questions: 0,
          participants: 0,
        },
        updatedAt: {
          seconds: 1666603063,
          nanoseconds: 233000000,
        },
        createdAt: {
          seconds: 1666603063,
          nanoseconds: 233000000,
        },
        desc: "",
        instructions: [],
      },
      {
        id: "uwJRcGz8yBE91H4XlWjb",
        desc: "",
        instructions: [],
        name: "Ikizamini Cya 6",
        createdAt: {
          seconds: 1666613875,
          nanoseconds: 674000000,
        },
        updatedAt: {
          seconds: 1666613875,
          nanoseconds: 674000000,
        },
        counts: {
          participants: 0,
          questions: 0,
        },
      },
      {
        id: "Adl9iXvcaMXt0hgtFiRz",
        name: "Ikizamini cya 7",
        desc: "",
        free: false,
        instructions: [],
        updatedAt: {
          seconds: 1667641154,
          nanoseconds: 847000000,
        },
        counts: {
          participants: 0,
          questions: 0,
        },
        createdAt: {
          seconds: 1666725329,
          nanoseconds: 413000000,
        },
      },
      {
        id: "XdF8ZTq0reiq1Ld2MVKe",
        desc: "",
        counts: {
          participants: 0,
          questions: 0,
        },
        instructions: [],
        name: "Ikizamini Cya 8",
        updatedAt: {
          seconds: 1666731143,
          nanoseconds: 534000000,
        },
        createdAt: {
          seconds: 1666731143,
          nanoseconds: 534000000,
        },
      },
      {
        id: "bllDopAOFURCTzSoWniE",
        instructions: [],
        desc: "",
        createdAt: {
          seconds: 1666732611,
          nanoseconds: 307000000,
        },
        name: "Ikizamini Cya 9",
        updatedAt: {
          seconds: 1666732611,
          nanoseconds: 307000000,
        },
        counts: {
          participants: 0,
          questions: 0,
        },
      },
      {
        id: "jNdJGeLVsF3gpRd7dzg7",
        updatedAt: {
          seconds: 1666734499,
          nanoseconds: 136000000,
        },
        name: "Ikizamini Cya 10",
        createdAt: {
          seconds: 1666734499,
          nanoseconds: 136000000,
        },
        desc: "",
        counts: {
          participants: 0,
          questions: 0,
        },
        instructions: [],
      },
      {
        id: "n3x7i4dTZxINvoW0aU6G",
        desc: "",
        createdAt: {
          seconds: 1666736176,
          nanoseconds: 471000000,
        },
        updatedAt: {
          seconds: 1666736176,
          nanoseconds: 471000000,
        },
        instructions: [],
        counts: {
          participants: 0,
          questions: 0,
        },
        name: "Ikizamini Cya 11",
      },
      {
        id: "d84Xjn9RTsQ8HVbhz9si",
        counts: {
          participants: 0,
          questions: 0,
        },
        instructions: [],
        createdAt: {
          seconds: 1666740845,
          nanoseconds: 452000000,
        },
        updatedAt: {
          seconds: 1675791726,
          nanoseconds: 991000000,
        },
        free: false,
        desc: "",
        name: "Ikizamini cya 12",
      },
      {
        id: "zcJQ6Mh1Q3MA4QiZprud",
        createdAt: {
          seconds: 1666742797,
          nanoseconds: 343000000,
        },
        desc: "",
        name: "Ikizamini Cya 13",
        free: false,
        updatedAt: {
          seconds: 1675792663,
          nanoseconds: 994000000,
        },
        counts: {
          questions: 0,
          participants: 0,
        },
        instructions: [],
      },
      {
        id: "iMyALwGPn8NAFO5r2wf9",
        updatedAt: {
          seconds: 1666822350,
          nanoseconds: 432000000,
        },
        counts: {
          participants: 0,
          questions: 0,
        },
        desc: "Ikizamini watsinda kikaguha ikizere cyo kuzatsinda icya provisoire ",
        instructions: ["Kora neza ibi bibazo wisuzume aho ugeze "],
        name: "Ikizamini cya 14",
        createdAt: {
          seconds: 1666822350,
          nanoseconds: 432000000,
        },
      },
      {
        id: "hlY2gIgG6gcjWrW9wX7s",
        updatedAt: {
          seconds: 1666824193,
          nanoseconds: 612000000,
        },
        createdAt: {
          seconds: 1666824177,
          nanoseconds: 796000000,
        },
        desc: "Amanota wabona muri iki kizamini ari ubwa mbere ugikoze yangana cyangwa akaba make ugereranyije n'ayo wabona mu cya Police ",
        name: "Ikizamini cya 15",
        counts: {
          questions: 0,
          participants: 0,
        },
        instructions: ["Kora neza ibibazo bikurikira"],
      },
      {
        id: "itWle8KJAwH0PSQh9dtE",
        name: "Ikizamini cya 16",
        desc: "Gutsinda iki kizamini buguha ikizere cyo kuzanatsinda ikizamini cya Police\n",
        updatedAt: {
          seconds: 1677441819,
          nanoseconds: 313000000,
        },
        instructions: ["Kora neza ibi bibazo utange ikizere cyo kuzatsinda"],
        counts: {
          participants: 0,
          questions: 0,
        },
        free: false,
        createdAt: {
          seconds: 1666864332,
          nanoseconds: 612000000,
        },
      },
      {
        id: "olAO4bkCKB6rXDaaUZs8",
        free: false,
        name: "Ikizamini cya 17",
        instructions: [],
        counts: {
          participants: 0,
          questions: 0,
        },
        desc: "",
        updatedAt: {
          seconds: 1669243560,
          nanoseconds: 176000000,
        },
        createdAt: {
          seconds: 1669238401,
          nanoseconds: 156000000,
        },
      },
      {
        id: "jVlGontKskTrBywj74Tu",
        updatedAt: {
          seconds: 1669240187,
          nanoseconds: 879000000,
        },
        desc: "",
        instructions: [],
        free: false,
        counts: {
          participants: 0,
          questions: 0,
        },
        name: "Ikizamini cya 18",
        createdAt: {
          seconds: 1669240187,
          nanoseconds: 879000000,
        },
      },
      {
        id: "Z1VLpI3vqGZkJWO1ZCCE",
        name: "Ikizamini cya 19",
        free: false,
        createdAt: {
          seconds: 1672269270,
          nanoseconds: 379000000,
        },
        instructions: ["Kora iki kizamini mu gihe cyangennwe"],
        desc: "Iki kizamini cyagufasha kwisuzuma niba uzatsinda icya Polisi\n",
        updatedAt: {
          seconds: 1672271778,
          nanoseconds: 979000000,
        },
        counts: {
          questions: 0,
          participants: 0,
        },
      },
      {
        id: "PHYxabfhXnvIuiACEaAO",
        free: false,
        desc: "Gutsinda iki kizamini biraguha ikizere cyo kuzatsinda icya Polisi",
        updatedAt: {
          seconds: 1672449435,
          nanoseconds: 118000000,
        },
        createdAt: {
          seconds: 1672449385,
          nanoseconds: 294000000,
        },
        name: "Ikizamini cya 20",
        instructions: ["Urasabwa gukoresha igihe neza"],
        counts: {
          questions: 0,
          participants: 0,
        },
      },
    ];

    const newd = await Promise.all(
      lessons.map((e) =>
        getDocs(collection(firestore, "tests", e.id, "questions"))
      )
    );

    console.log(
      lessons.map((e, i) => ({
        ...e,
        questions: newd[i].docs.map((e) => ({ id: e.id, ...e.data() })),
      }))
    );
  };

  const { data, status }: any = useQuery(
    ["lessons", id, "sections"],
    () =>
      getDocs(
        query(
          collection(firestore, "lessons", "XGaWzQahj6sLhLLAoJ18", "sections"),
          orderBy("position", "asc")
        )
      ).then(({ docs }) =>
        docs.map((e) => {
          return {
            id: e.id,
            ...e.data(),
          };
        })
      ),
    {
      enabled: user !== undefined && id !== undefined,
    }
  );

  console.log(data);

  const [activeSection, setactiveSection] = useState(0);

  const sec: any = data ? data[activeSection] : undefined;

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setactiveSection(activeSection + 1);
  };
  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setactiveSection(activeSection - 1);
  };

  const [showCourseContentModal, setshowCourseContentModal] = useState(false);

  const isFree = router?.query?.fs;

  return (
    <Fragment>
      {" "}
      <a onClick={load}>ddd</a>
      <div>
        {(user.subscription === "active" || isFree === "v") && (
          <Fragment>
            {" "}
            {status === "success" && data.length && (
              <div className="flex items-center mt-2 justify-center">
                <a
                  onClick={() => {
                    if (data[activeSection - 1]) {
                      handlePrev();
                    }
                  }}
                  className="p-[7px] hover:bg-gray-100 cursor-pointer rounded-l-[4px] border-2 border-r-0 border-gray-500 "
                >
                  <ArrowLeft
                    strokeWidth={2}
                    size={18}
                    className="text-gray-500"
                  />
                </a>
                <div
                  onClick={() => {
                    setshowCourseContentModal(true);
                  }}
                  className="flex px-3 hover:bg-gray-100 cursor-pointer py-[6px] items-center border-2 border-gray-500 "
                >
                  <Menu size={18} className="text-gray-500 mr-3" />
                  <span className="font-bold capitalize text-[13.5px] text-gray-600">
                    Ibigize isomo
                  </span>
                </div>
                <a
                  onClick={() => {
                    if (data[activeSection + 1]) {
                      handleNext();
                    }
                  }}
                  className=" border-2 cursor-pointer hover:bg-gray-100  rounded-r-[4px] p-[7px] border-l-0 h-full border-gray-500 "
                >
                  <ArrowRight size={18} className="text-gray-500" />
                </a>
              </div>
            )}
          </Fragment>
        )}
        {status === "loading" && (
          <div className="w-full h-[50vh] flex items-center justify-center">
            <Loader primary />
          </div>
        )}
        {status === "success" && !data.length && (
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
            title="Nta bice biri muri iri somo"
            subTitle="Iri somo nta bice rifite. fungura ayandi masomo."
          />
        )}

        {user.subscription === "active" || isFree === "v" ? (
          <Fragment>
            {sec && (
              <Fragment>
                <div className="flex justify-between border-b pb-5 border-gray-200 items-center my-7">
                  <h4 className="capitalize line-clamp-2 leading-7">
                    {sec.name}
                  </h4>
                  {data[activeSection + 1] && (
                    <Button
                      className="ml-5"
                      onClick={() => {
                        handleNext();
                      }}
                    >
                      Komeza
                    </Button>
                  )}
                </div>

                <div>
                  <div className="markdown">
                    <div
                      dangerouslySetInnerHTML={{ __html: sec.content }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-6 items-center mt-4 justify-between">
                  {data[activeSection - 1] ? (
                    <div
                      onClick={() => {
                        handlePrev();
                      }}
                      className="flex items-center border rounded-[4px] cursor-pointer hover:bg-slate-100 border-gray-200 w-full py-2 px-2"
                    >
                      <a href="" className="pr-4 pl-2">
                        <ChevronLeft size={18} className="text-gray-500" />
                      </a>
                      <div>
                        <h4 className="text-[14px] text-gray-700 mb-2">
                          Subira Inyuma.
                        </h4>
                        <p className="font-semibold truncate line-clamp-2 text-sm text-gray-500">
                          {data[activeSection - 1].position}.{" "}
                          {data[activeSection - 1].name}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full"></div>
                  )}
                  {data[activeSection + 1] ? (
                    <div
                      onClick={() => {
                        handleNext();
                      }}
                      className="flex items-center justify-end text-right border rounded-[4px] cursor-pointer hover:bg-slate-100 border-gray-200 w-full py-2 px-2"
                    >
                      <div>
                        <h4 className="text-[14px] mb-2">komeza Imbere.</h4>
                        <p className="font-semibold line-clamp-1 text-sm text-gray-500">
                          {data[activeSection + 1].position}.{" "}
                          {data[activeSection + 1].name}
                        </p>
                      </div>
                      <a href="" className="pr-2 pl-4">
                        <ChevronRight size={18} className="text-gray-500" />
                      </a>
                    </div>
                  ) : (
                    <div className="w-full"></div>
                  )}
                </div>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <div>
            <NoContent
              Icon={() => {
                return (
                  <img
                    height={150}
                    width={150}
                    className="mb-5"
                    src="/images/sub.svg"
                  />
                );
              }}
              action={{
                title: "Gura ifatabuguzi",
                onClick: () => {
                  router.push(`/learn/plans?redirect_url=${router.asPath}`);
                },
              }}
              title="Nta fatabuguzi ufite"
              subTitle="Kanda hasi aho kigurango ubashe kwigurira ifatabuguzi utangire kwiga."
            />
          </div>
        )}
      </div>
      {showCourseContentModal && data && (
        <CourseContentModal
          onClose={() => {
            setshowCourseContentModal(false);
          }}
          setactiveQuestion={setactiveSection}
          sections={data}
        />
      )}
    </Fragment>
  );
}

function CourseContentModal({ sections, setactiveQuestion, onClose }) {
  return (
    <Modal
      onClose={onClose}
      title="ibigize isomo"
      noPadding
      size="md"
      Content={() => {
        return (
          <div>
            {!sections.length && (
              <div className="w-full h-[300px] flex justify-center items-center">
                <p className="text-sm font-semibold text-gray-500">
                  Nta bice birimo
                </p>
              </div>
            )}
            {sections.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setactiveQuestion(index);
                    onClose();
                  }}
                  className="text-sm leading-8 hover:bg-slate-100 cursor-pointer flex items-center justify-between border-t font-semibold text-gray-600 capitalize py-3 px-4"
                >
                  <span> {e.name}.</span>
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
}
