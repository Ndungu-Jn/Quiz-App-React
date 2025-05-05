import { useState } from "react";

function Quiz() {
  const questionBank = [
    {
      question: "What is the capital city of Kenya?",
      options: ["Kinangop", "Naivasha", "Nairobi", "Nakuru"],
      answer: "Nairobi",
    },
    {
      question: "Whic language is used for web apps?",
      options: ["PHP", "Python", "Javascript", "All"],
      answer: "All",
    },
    {
      question: "Which of these is a famous wildlife reserve in Kenya?",
      options: [
        "Serengeti", // (Note: Serengeti is actually in Tanzania)
        "Maasai Mara",
        "Kruger", // (Kruger is in South Africa)
        "Okavango", // (Okavango is in Botswana)
      ],
      answer: "Maasai Mara",
    },
  ];

  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          className={"option " + (selectedAnswer === option ? "selected" : "")}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
