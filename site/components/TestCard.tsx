import React, { Fragment, useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, X } from "react-feather";
import Radio from "./Radio";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import TestModalInfo from "./TestInfoModal";
import Markdown from "react-markdown";

export default function TestCard({ item }) {
  const [showTestModal, setshowTestModal] = useState(false);

  const { user }: any = useAuth();
  const router = useRouter();

  return (
    <>
      <div>
        <div className="border bg-white shadow-sm- rounded-[3px] py-3 px-4 mb-0">
          <div className="flex flex-col h-full justify-between items-start">
            <div className="w-full">
              <div className="flex items-center mb-2 justify-between">
                <h1 className="text-[13px] uppercase font-semibold text-gray-800">
                  {item.name}
                </h1>
                {!item.free ? (
                  <div>
                    <div className="h-7 w-7 rounded-full flex items-center justify-center border bg-orange-50 border-[#fca120]">
                      <img alt="" className="h-4 w-4" src="/pro.png" />
                    </div>
                  </div>
                ) : (
                  <span className="text-xs font-medium border-green-500 border rounded-sm  bg-green-100 px-3 py-[3px] text-green-500">
                    Free
                  </span>
                )}
              </div>
              <p className="font-medium text-sm text-slate-500 line-clamp-3 leading-8">
                Menya niba witeguye gukora ikizamini cy’amategeko y’umuhanda.
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <a
                aria-current="page"
                onClick={() => {
                  if (user?.subscription === "active" || item.free) {
                    setshowTestModal(true);
                  } else {
                    router.push("/learn/plans");
                  }
                }}
                className="router-link-active cursor-pointer flex items-center gap-2 router-link-exact-active text-[12.5px] mb-1 mt-3 w-fit capitalize px-3 py-1 border border-[#0C8C7C] hover:bg-opacity-30 border-opacity-20 bg-[#0C8C7C] bg-opacity-10 rounded-[2px] text-[#0C8C7C] font-medium"
              >
                <span>Tangira isuzuma</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {showTestModal && (
        <TestModal
          test={item}
          questions={item.questions.sort((a, b) => a.position - b.position)}
          id={item.id}
          onClose={() => {
            setshowTestModal(false);
          }}
        />
      )}
    </>
  );
}

function TestModal({ onClose, questions, test }: any) {
  const [activeQuestion, setactiveQuestion] = useState(1);
  const [loadingNext, setloadingNext] = useState(false);

  const [answers, setanswers] = useState([]);

  useEffect(() => {
    if (questions?.length) {
      setanswers(
        questions.map((e) => {
          return {
            id: e.id,
          };
        })
      );
    }
  }, [questions]);

  const [completed, setcompleted] = useState(false);

  const q = questions.find((e) => parseInt(e.position) === activeQuestion);

  const handleActiveQ = (p) => {
    if (questions.find((e) => parseInt(e.position) === p)) {
      setactiveQuestion(p);
    }
  };

  const handleNext = () => {
    setloadingNext(true);
    setTimeout(() => {
      if (activeQuestion === questions.length) {
        setcompleted(true);
        setloadingNext(false);
      } else {
        setloadingNext(false);
        handleActiveQ(activeQuestion + 1);
      }
    }, 1000);
  };
  const handlePrev = () => {
    handleActiveQ(activeQuestion - 1);
  };

  // console.log(activeQuestion);

  const [timer, setTimer] = React.useState(1200);

  const [guesses, setGuesses] = useState(3);

  const [showAnswerMode, setshowAnswerMode] = useState(false);

  const [showInstructions, setshowInstructions] = useState(true);

  return showInstructions ? (
    <TestModalInfo
      onClose={() => {
        setshowInstructions(false);
        onClose();
      }}
      handleStart={() => setshowInstructions(false)}
      test={{ name: test.name }}
    />
  ) : (
    <Modal
      // hAuto
      noPadding
      onClose={onClose}
      title="Isuzuma bumenyi"
      size={completed && !showAnswerMode ? "md" : "xl"}
      Actions={() => {
        return completed && !showAnswerMode ? (
          <></>
        ) : (
          <Fragment>
            <Fragment>
              <p
                className={`font-medium sm:hidden text-gray-500 text-sm ${
                  (showAnswerMode || completed) && "opacity-0"
                }`}
              >
                <Fragment>
                  Ikibazo cya {q?.position} muri {questions.length}
                </Fragment>
              </p>
              <div className="flex items-center sm:w-full sm:justify-between ">
                {showAnswerMode ? (
                  <>
                    {" "}
                    <Button
                      onClick={() => {
                        setactiveQuestion(1);
                        setcompleted(false);
                        setshowAnswerMode(false);
                        setloadingNext(false);
                        setTimer(1200);
                        setanswers(
                          questions.map((e) => {
                            return {
                              id: e.id,
                            };
                          })
                        );
                      }}
                    >
                      Subiramo umwitozo
                    </Button>
                  </>
                ) : (
                  <>
                    <Fragment>
                      {" "}
                      <Button
                        noRightIcon
                        onClick={handlePrev}
                        className="text-primary mr-3"
                        non
                        noIcon
                        disabled={activeQuestion <= 1}
                      >
                        <ArrowLeft size={16} strokeWidth={3} className="mr-2" />
                        <span>subira inyuma</span>
                      </Button>
                      <Button
                        loading={loadingNext}
                        disabled={!answers.find((e) => e?.id === q?.id)?.answer}
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        {activeQuestion === questions.length
                          ? "Soza Ikizamini"
                          : "Komeza Imbere"}
                      </Button>
                    </Fragment>
                  </>
                )}
              </div>
            </Fragment>
          </Fragment>
        );
      }}
      Content={() => {
        return (
          <div>
            <Quiz
              isPractice={false}
              showAnswerMode={showAnswerMode}
              setshowAnswerMode={setshowAnswerMode}
              setGuesses={setGuesses}
              guesses={guesses}
              setactiveQuestion={setactiveQuestion}
              activeQuestion={activeQuestion}
              quiz={{ questions: questions }}
              answers={answers}
              setcompleted={setcompleted}
              completed={completed}
              setloadingNext={setloadingNext}
              setanswers={setanswers}
              timer={timer}
              setTimer={setTimer}
              q={q}
            />
          </div>
        );
      }}
    />
  );
}

function Quiz({
  quiz,
  isPractice,
  setactiveQuestion,
  activeQuestion,
  answers,
  completed = true,
  setcompleted,
  setloadingNext,
  setanswers,
  timer,
  setTimer,
  q,
  guesses,
  setGuesses,
  showAnswerMode,
  setshowAnswerMode,
}) {
  const loadMarks = () => {
    const total = quiz.questions.length;
    const passed = answers.filter((e) => e.correct).length || 0;
    return {
      total,
      passed,
      percent: (passed * 100) / total,
    };
  };

  return (
    <div>
      <div className="relative">
        {!completed && (
          <Timer
            setTimer={setTimer}
            timer={timer}
            setcompleted={setcompleted}
          />
        )}
        <div className="pt-6-">
          {completed ? (
            <Fragment>
              {showAnswerMode && answers?.length ? (
                <div>
                  {quiz.questions.map((e, index) => {
                    return (
                      <Answer
                        key={index}
                        answer={answers.find((i) => i.id === e.id)}
                        question={e}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="flex py-8 flex-col justify-center items-center">
                  {/* <img
                    width={70}
                    height={70}
                    src={
                      loadMarks().percent < 70
                        ? "/images/close.png"
                        : "/images/success.png"
                    }
                    alt=""
                  /> */}
                  <div className="h-24 w-24">
                    <CircularProgressbar
                      value={loadMarks().percent}
                      text={`${loadMarks().passed}/${loadMarks().total}`}
                      styles={buildStyles({
                        textColor: loadMarks().percent < 65 ? "red" : "#0C8C7C",
                        pathColor: loadMarks().percent < 65 ? "red" : "#0C8C7C",
                      })}
                    />
                  </div>
                  <h4 className="text-base mt-6">
                    {loadMarks().percent < 65
                      ? "Watsizwe subiramo"
                      : "Watsinze umwitozo"}
                  </h4>
                  <p className="max-w-xs my-2 text-center leading-7 text-sm font-medium text-gray-500">
                    Urakoze gukora isuzuma bumenyi. kana hasi aho kurisubiramo.
                  </p>

                  {/* <div className="border-2 my-2 border-gray-200 font-bold text-gray-500 rounded-full p-3">
                    <span>{loadMarks().passed}</span>
                    <span>/</span>
                    <span>{loadMarks().total}</span>
                  </div> */}
                  <div className="flex items-center">
                    <Button
                      onClick={() => {
                        setactiveQuestion(1);
                        setcompleted(false);
                        setloadingNext(false);
                        setTimer(1200);
                        setanswers(
                          quiz.questions.map((e) => {
                            return {
                              id: e.id,
                            };
                          })
                        );
                      }}
                      className="mt-2 !bg-[#0C8C7C]"
                    >
                      Subiramo Umwitozo
                    </Button>
                    <Button
                      onClick={() => {
                        setshowAnswerMode(true);
                      }}
                      className="mt-2  ml-3"
                    >
                      Reba ibisubizo
                    </Button>
                  </div>
                </div>
              )}
            </Fragment>
          ) : (
            <Fragment>
              <div className="overflow-y-auto  w-full relative bg-white sm:h[40vh]">
                {activeQuestion && (
                  <div>
                    <Question
                      guesses={guesses}
                      setGuesses={setGuesses}
                      isPractice={isPractice}
                      q={q}
                      setanswers={setanswers}
                      answers={answers}
                    />
                  </div>
                )}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

function Answer({ question, answer }) {
  return (
    <div className="border-b border-l-2 text-sm leading-8 border-gray-200 last:border-b-0 pt-2 p-4 first:pt-0">
      <div className="flex items-center my-1 justify-between">
        <h4>
          <span>{question.position}) </span>
          {question.question}
        </h4>
      </div>
      {question.photo && <TestImage content={question.photo} />}

      <div className="flex flex-col mt-2  justify-start">
        {question.options.map((i, index) => {
          return (
            <span
              key={index}
              className={`${
                i === question.answer
                  ? "text-green-500 font-bold "
                  : i === answer.answer && answer.answer !== question.answer
                  ? "text-red-500 "
                  : "text-gray-500 font-medium"
              } text-sm flex capitalize first-of-type:rounded-t hover:bg-slate-50 last-of-type:rounded-b border border-b-0 last-of-type:border-b border-slate-200 px-3 items-center  py-3`}
            >
              {i}
              <div className="ml-4">
                {i === answer.answer && answer.answer === question.answer ? (
                  <CheckCircle size={16} className="text-green-500" />
                ) : i === answer.answer && answer.answer !== question.answer ? (
                  <X size={16} className="text-red-500" />
                ) : null}
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Question({ q, setanswers, answers, isPractice, guesses, setGuesses }) {
  const handleAnswer = (e) => {
    const status = isPractice
      ? q.answer === e
        ? "correct"
        : "incorrect"
      : undefined;
    if (isPractice) {
      if (status === "incorrect") {
        setGuesses((prev) => prev - 1);
      }
    }
    setanswers(
      answers.map((i) =>
        i.id === q.id
          ? {
              ...i,
              answer: e,
              correct: q.answer === e,
              status: status,
            }
          : i
      )
    );
  };

  const status = answers.find((e) => e?.id === q?.id)?.status;

  return q ? (
    <div>
      <div className="px-4 mx-auto">
        <div className={` sm:py-4 sm:pt-2 py-4 pb-10`}>
          <div className="py-2">
            {q.photo && q.photo !== "" && <TestImage content={q.photo} />}

            <h3 className="text-[14.5px] leading-8 sm:text-[13.5px] font-bold capitalize text-gray-700">
              <span>{q?.position}.</span> {q.question}
            </h3>
          </div>

          <div
            className={`${
              status === "incorrect"
                ? "border-red-200"
                : status === "correct"
                ? "border-green-200"
                : "border-gray-200"
            }  mt-4 shadow-xm rounded-[4px] border  bg-white `}
          >
            <ul>
              {q.options.map((i, index) => {
                const an = answers.find((e) => e.id === q.id)?.answer;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      handleAnswer(i);
                    }}
                    className={`${
                      status === "correct"
                        ? "bg-green-100 hover:bg-green-100"
                        : status === "incorrect"
                        ? "bg-red-50 hover:bg-red-100"
                        : "hover:bg-gray-50"
                    } cursor-pointer last:border-b-0  px-5 py-3 border-b border-opacity-70  flex items-center justify-between`}
                  >
                    <div className="flex items-start">
                      <Radio
                        danger={status === "incorrect"}
                        defaultChecked={an == i}
                      />
                      <span className="capitalize leading-7 font-medium text-gray-600 text-sm">
                        {i.replace(/^\d+\)/, "")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

function Timer({ setcompleted, timer, setTimer }) {
  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
      setcompleted(true);
    }
  }, [timer]);

  var toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  return (
    <div className="px-3 pb-0 py-2 ">
      <div className="text-orange-500 flex items-center gap-4 rounded-md top-0 font-medium text-left bg-orange-100 px-3 py-2 text-[13.5px]">
        <Clock size={16} />
        <div>Igihe gisigaye: {toHHMMSS(timer)} </div>
      </div>
    </div>
  );
}

function TestImage({ content }) {
  return (
    <Markdown
      components={{
        img: ({ src }) => {
          return (
            <img
              className="w-fit mb-5 border object-cover border-gray-200 rounded-md h-52 bg-gray-100"
              src={"/test_images/" + src}
              alt=""
            />
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
