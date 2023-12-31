import React, { Fragment, useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { ArrowLeft, CheckCircle, ChevronLeft, Clock, X } from "react-feather";
import Radio from "./Radio";

export default function TestCard({ item }) {
  const [showTestModal, setshowTestModal] = useState(false);
  return (
    <>
      <div>
        <div
          onClick={() => setshowTestModal(true)}
          className="border cursor-pointer bg-white shadow-sm- rounded-[3px] py-3 px-4 mb-0"
        >
          <div className="flex flex-col h-full justify-between items-start">
            <div className="w-full">
              <div className="flex items-center mb-2 justify-between">
                <h1 className="text-[13px] uppercase font-semibold text-gray-800">
                  <a onClick={() => setshowTestModal(true)}>{item.name}</a>
                </h1>
                {!item.free && (
                  <div>
                    <div className="h-7 w-7 cursor-pointer rounded-full flex items-center justify-center border bg-orange-50 border-[#fca120]">
                      <img className="h-4 w-4" src="/pro.png" />
                    </div>
                  </div>
                )}
              </div>
              <p className="font-medium text-sm text-slate-500 line-clamp-3 leading-8">
                <a href="/tests/7">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus.
                </a>
              </p>
            </div>
            <div className="w-full">
              <a
                aria-current="page"
                href="/browse?subject=undefined"
                className="router-link-active router-link-exact-active text-[12.5px] flex mb-1 mt-3 w-fit capitalize px-3 py-1 border border-primary border-opacity-20 bg-primary bg-opacity-10 rounded-[2px] text-primary font-medium"
              >
                Ibibazo: {item?.questions?.length}
              </a>
            </div>
          </div>
        </div>
      </div>
      {showTestModal && (
        <TestModal
          questions={item.questions
            .sort((a, b) => a.position - b.position)
            .slice(0, 3)}
          id={item.id}
          onClose={() => {
            setshowTestModal(false);
          }}
        />
      )}
    </>
  );
}

function TestModal({ onClose, questions }: any) {
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

  return (
    <Modal
      hAuto
      noPadding
      onClose={onClose}
      title="Isuzuma bumenyi"
      size="xl"
      Actions={() => {
        return (
          <Fragment>
            <Fragment>
              <p className="font-semibold sm:hidden text-gray-500 text-sm">
                <Fragment>
                  Question {q?.position} of {questions.length}
                </Fragment>
              </p>
              <div className="flex items-center sm:w-full sm:justify-between ">
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
                    {activeQuestion === questions.length ? "Soza" : "Komeza"}
                  </Button>
                </Fragment>
              </div>
            </Fragment>
          </Fragment>
        );
      }}
      Content={() => {
        return (
          <div>
            <Quiz
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

  const [showAnswerMode, setshowAnswerMode] = useState(false);

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
                  <img
                    width={150}
                    height={150}
                    src={
                      loadMarks().percent < 70
                        ? "/images/failed.svg"
                        : "/images/test.svg"
                    }
                    alt=""
                  />
                  <h4 className="text-base mt-6">
                    {loadMarks().percent < 65
                      ? "watsizwe subiramo"
                      : "watsinze umwitozo"}
                  </h4>
                  <p className="max-w-xs my-2 text-center leading-7 text-sm font-semibold text-gray-500">
                    Urakoze gukora isuzuma bumenyi. kana hasi aho kurisubiramo.
                  </p>

                  <div className="border-2 my-2 border-gray-200 font-bold text-gray-500 rounded-full p-3">
                    <span>{loadMarks().passed}</span>
                    <span>/</span>
                    <span>{loadMarks().total}</span>
                  </div>
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
                      className="mt-2"
                    >
                      Subiramo
                    </Button>
                    <Button
                      onClick={() => {
                        setshowAnswerMode(true);
                      }}
                      className="mt-2 bg-orange-500 ml-3"
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
    <div className="border-b border-l-2 text-sm leading-8 border-gray-200 last:border-b-0 p-4 first:pt-0">
      <div className="flex items-center my-1 justify-between">
        <h4>
          <span>{question.position}) </span>
          {question.question}
        </h4>
      </div>
      {question.photo && (
        <img
          src={question.photo}
          className="max-w-xs my-5 border border-gray-200 rounded-md h-52 bg-gray-100"
          alt=""
        />
      )}

      <div className="flex flex-col justify-start">
        {question.options.map((i, index) => {
          return (
            <span
              key={index}
              className={`${
                i === question.answer
                  ? "text-green-500 font-bold "
                  : i === answer.answer && answer.answer !== question.answer
                  ? "text-red-500 "
                  : "text-gray-500 font-semibold"
              } text-sm flex items-center  py-3`}
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
        <div className={` sm:py-4 py-4 pb-10`}>
          <div className="py-2">
            {q.photo && q.photo !== "" && (
              <img
                src={q.photo}
                className="max-w-xs mb-5 border border-gray-200 rounded-md h-52 bg-gray-100"
              />
            )}
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
