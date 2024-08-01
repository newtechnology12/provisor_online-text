import { NextSeo } from "next-seo";
import React, { useState, Fragment } from "react";
import TestCard from "../../components/TestCard";
import tests from "../../public/tests.json";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function Tests() {
  const [randomTests, setRandomTests] = useState([]);
  const [questions, setQuestions] = useState([]);

  const generateRandomTests = () => {
    const shuffled = tests.sort(() => 0.5 - Math.random());
    const selectedTests = shuffled.slice(0, 2);
    setRandomTests(selectedTests);
  };

  const statisticsData = {
    labels: ['Passed', 'Failed', 'Pending'],
    datasets: [
      {
        label: 'Test Statistics',
        data: [12, 5, 8], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Fragment>
      <NextSeo title="Amasuzuma bumenyi" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-800 capitalize">Amasuzuma Bumenyi</h2>
          <p className="text-lg leading-7 font-medium text-gray-600">
            Gerageza Umenye niba witeguye gukora ikizamini. Burigihe ukukanze hano system iguhitiramwo amasuzuma 2 afite ibibazo bitandukanye. Harinigihe tugaruramwo ibyo twaguhaye haruguru kugirango turebeko ukibyibuka.
          </p>
        </div>
        <button
          onClick={generateRandomTests}
          className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          Generate Random Tests
        </button>
        <div className="mt-8 w-full max-w-4xl">
          <All randomTests={randomTests} questions={questions} />
        </div>
        <div className="mt-12 w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Test Statistics</h3>
          <div className="h-60">
            <Bar data={statisticsData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  callbacks: {
                    label: function(tooltipItem) {
                      return `Count: ${tooltipItem.raw}`;
                    }
                  }
                }
              },
            }} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

function All({ randomTests, questions }) {
  return (
    <div className="mt-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {randomTests.length > 0 ? (
          randomTests.map((test, index) => (
            <div
              key={index}
              className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg max-w-xs mx-auto"
            >
              <TestCard
                item={{
                  id: test.id,
                  free: test.free,
                  name: test.name,
                  lesson: "police",
                  questions: test.questions,
                }}
              />
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-600 bg-gray-50 rounded-lg shadow-sm">
            No tests available. Please generate random tests.
          </div>
        )}
      </div>
    </div>
  );
}




// import { NextSeo } from "next-seo";
// import React, { useState, Fragment } from "react";
// import TestCard from "../../components/TestCard";
// import tests from "../../public/tests.json";

// export default function Tests() {
//   const [selected, setselected] = useState(0);
//   return (
//     <Fragment>
//       <NextSeo title="Amasuzuma bumenyi" />
//       <div className="flex mt-2 items-center justify-between">
//         <div>
//           <h2 className="mb-1 text-[17px] capitalize sm:mb-0">
//             Amasomo yo kwiga
//           </h2>
//           <p className="text-[15px] leading-7 sm:hidden font-medium text-gray-500">
//             Hitamo isuzuma Umenye niba witeguye gukora ikizamini.
//           </p>
//         </div>
//       </div>
//       <All />
//     </Fragment>
//   );
// }

// function All() {
//   return (
//     <div className=" mt-3">
//       <div className="mt-1 grid sm:grid-cols-1 grid-cols-3 gap-3">
//         {tests.map((e: any, index) => {
//           return (
//             <TestCard
//               key={index}
//               item={{
//                 id: e.id,
//                 free: e.free,
//                 name: e.name,
//                 lesson: "police",
//                 questions: e.questions,
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
