function chatbot(questionsAnswers, userInput) {
    let normalizedInput = userInput.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    let inputWords = normalizedInput.split(" ");
    function getMatchScore(question, inputWords) {
     
      let normalizedQuestion = question.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
      let questionWords = normalizedQuestion.split(" ");
      let matchCount = 0;
      inputWords.forEach(word => {
        if (questionWords.includes(word)) {
          matchCount++;
        }
      });
      return matchCount;
    }
    let bestMatch = "";
    let bestAnswer = "";
    let maxScore = 0;
  
    questionsAnswers.forEach(pair => {
      let score = getMatchScore(pair.question, inputWords);
      if (score > maxScore) {
        maxScore = score;
        bestMatch = pair.question;
        bestAnswer = pair.answer;
      }
    });
    return bestAnswer || "Sorry, I don't have an answer for that.";
  }
  
  
  let qaPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
  ];
  
  let userInput = "What's the weather like today?";
  let result = chatbot(qaPairs, userInput);
  console.log(result); 
  