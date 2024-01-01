const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function parseQuestion(questionText) {
  //   const d = `<p>4\. Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda :</p><p>a) Biteganye</p><p>b) Ku murongo umwe</p><p>c) A na B nibyo</p><p>**(d) Nta gisubizo cy’ukuri kirimo**</p>`;
  const paragraphsArray = [];
  let match;
  const paragraphRegex = /<p>(.*?)<\/p>/g;

  while ((match = paragraphRegex.exec(questionText)) !== null) {
    paragraphsArray.push(match[1]);
  }

  if (paragraphsArray.length) {
    const questionContent = paragraphsArray[0];
    const options = paragraphsArray.slice(1);

    const boldItemRegex = /\*\*(.*?)\*\*/;

    const correctAnswer = options
      .find((item) => boldItemRegex.test(item) || item.startsWith("("))
      ?.replaceAll("**", "")
      .replaceAll("(", "")
      .trim();

    const attachment = options.find((e) => e.startsWith("!["));

    return {
      id: uuidv4(),
      photo: attachment,
      question: questionContent.split("\\.")[1]?.trim(),
      originalPosition: parseInt(questionContent.split("\\.")[0]?.trim()),
      options: options
        .map((e) => e.replaceAll("**", "").replaceAll("(", ""))
        .filter((e) => e.trim()[1] === ")" || e.trim()[1] === ".")
        .map((e) => e.trim()),
      answer: correctAnswer,
      //   text: questionText,
    };
  } else {
    return null;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

(async () => {
  const markdownText = await fs.readFileSync("rules.txt", {
    encoding: "utf8",
    flag: "r",
  });

  const questions = markdownText
    .split("| :- |")
    .map((e) =>
      e
        .split("|")
        .filter((e) => e.length > 50)
        .filter((e) => e.startsWith("<p>"))
        .map((e) => e.replaceAll("<p></p>", ""))
        .map((e) => parseQuestion(e))
    )
    .flat();

  const randomQs = shuffleArray(questions);

  const tests = Array(Math.ceil(randomQs.length / 20))
    .fill(null)
    .map((e, i) => {
      return {
        name: `Umwitozo wa ${i + 1}`,
        id: uuidv4(),
        desc: "",
        questions: randomQs
          .slice(i, i + 20)
          .map((e, i) => ({ ...e, position: i + 1 })),
      };
    });

  await fs.writeFileSync("../public/tests.json", JSON.stringify(tests));
})();

// console.log(questions);
//   .filter(Boolean)
//   .map((question) => question.trim())
//   .map((e, i) => parseQuestion(e, i))
//   .filter(Boolean)
//   .map((e, i) => ({ ...e, position: i + 1 }));

// console.log(questions);
