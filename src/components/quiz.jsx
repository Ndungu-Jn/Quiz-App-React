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
      question: "What is the capital city of Kenya?",
      options: ["Kinangop", "Naivasha", "Nairobi", "Nakuru"],
      answer: "Nairobi",
    },
  ];

  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questionBank[0].question}</p>
    </div>
  );
}

export default Quiz;
