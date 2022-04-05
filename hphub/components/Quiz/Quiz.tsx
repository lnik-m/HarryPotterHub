import { useState } from "react";
import styles from "./Quiz.module.scss";
import { data } from "./data";
import { Button } from "../Button/Button";
import {
  TextGryffindor,
  TextHufflepuff,
  TextRavenclaw,
  TextSlytherin,
} from "./texts";
import cn from "classnames";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const currentQA = data[currentQuestionIndex];

  // eslint-disable-next-line prefer-const
  let [currentAnswer, setCurrentAnswer] = useState<number>(-1);
  // eslint-disable-next-line prefer-const
  let [answers, setAnswers] = useState<number[]>([]);

  const getHouse = (answers: number[]): string => {
    const house: number[] = [0, 0, 0, 0];
    const houses: string[] = [
      "Gryffindor",
      "Slytherin",
      "Hufflepuff",
      "Ravenclaw",
    ];

    for (const answer of answers) {
      house[answer] += 1;
    }
    return houses[house.indexOf(Math.max(...house))];
  };

  return (
    <div className={styles.quiz}>
      {currentQuestionIndex < data.length && (
        <>
          <div className={styles.score}>
            Question {currentQuestionIndex + 1}/{data.length}
          </div>

          <div className={styles.question}>{currentQA["question"]}</div>
          <div className={styles.answers}>
            {currentQA["answers"].map((ans, index) => (
              <div
                className={cn(styles.answer, {
                  [styles.currentAnswer]: currentAnswer == index,
                })}
                key={index}
                onClick={() => {
                  setCurrentAnswer((currentAnswer = index));
                }}
              >
                <div className={styles.answer}>{ans}</div>
              </div>
            ))}
          </div>

          <button
            disabled={currentAnswer == -1}
            className={styles.nextButton}
            onClick={() => {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setAnswers([...answers, currentAnswer]);
              setCurrentAnswer((currentAnswer = -1));
            }}
          >
            Next question
          </button>
        </>
      )}

      {currentQuestionIndex >= data.length && (
        <div className={styles.results}>
          <div className={styles.resultsTitle}>
            Welcome to {getHouse(answers)}!
          </div>
          <div>
            {getHouse(answers) == "Gryffindor" && <TextGryffindor />}
            {getHouse(answers) == "Slytherin" && <TextSlytherin />}
            {getHouse(answers) == "Hufflepuff" && <TextHufflepuff />}
            {getHouse(answers) == "Ravenclaw" && <TextRavenclaw />}
          </div>
          <Button link="/">Go home</Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
