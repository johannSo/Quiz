import { useState } from 'react'
import './App.css'
import { questions } from './questions'

interface WrongAnswer {
  questionNumber: number;
  question: string;
  userAnswers: string[];
  correctAnswers: string[];
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([])
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])

  const handleAnswerClick = (answerIndex: number) => {
    // Toggle Antwort-Auswahl
    const newSelectedAnswers = selectedAnswers.includes(answerIndex)
      ? selectedAnswers.filter(index => index !== answerIndex)
      : [...selectedAnswers, answerIndex];
    
    setSelectedAnswers(newSelectedAnswers);
  }

  const handleNextQuestion = () => {
    // Überprüfe Antworten
    const currentQuestionData = questions[currentQuestion];
    const isCorrect = selectedAnswers.length === currentQuestionData.correctAnswers.length &&
      selectedAnswers.every(answer => currentQuestionData.correctAnswers.includes(answer));

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, {
        questionNumber: currentQuestion + 1,
        question: currentQuestionData.question,
        userAnswers: selectedAnswers.map(index => currentQuestionData.options[index]),
        correctAnswers: currentQuestionData.correctAnswers.map(index => currentQuestionData.options[index])
      }]);
    }

    // Nächste Frage oder Quiz beenden
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswers([]); // Reset selected answers
    } else {
      setShowScore(true);
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswers([]);
      
      // Entferne die letzte falsche Antwort, falls vorhanden
      if (wrongAnswers.length > 0 && !showScore) {
        setWrongAnswers(wrongAnswers.slice(0, -1));
        // Wenn die vorherige Frage richtig war, reduziere den Score
        if (!wrongAnswers.some(w => w.question === questions[currentQuestion - 1].question)) {
          setScore(score - 1);
        }
      }
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setWrongAnswers([])
    setSelectedAnswers([])
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz beendet!</h2>
          <p>Du hast {score} von {questions.length} Fragen richtig beantwortet!</p>
          
          {wrongAnswers.length > 0 && (
            <div className="wrong-answers">
              <h3>Deine falschen Antworten:</h3>
              {wrongAnswers
                .sort((a, b) => a.questionNumber - b.questionNumber)
                .map((wrong, index) => (
                <div key={index} className="wrong-answer-item">
                  <p><strong>Frage {wrong.questionNumber}:</strong> {wrong.question}</p>
                  <p><span className="wrong">Deine Antwort(en): {wrong.userAnswers.join(", ")}</span></p>
                  <p><span className="correct">Richtige Antwort(en): {wrong.correctAnswers.join(", ")}</span></p>
                </div>
              ))}
            </div>
          )}
          
          <button onClick={handleRestart}>Quiz neu starten</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <h2>Frage {currentQuestion + 1} von {questions.length}</h2>
            <p>{questions[currentQuestion].question}</p>
            <p className="hint">Wähle alle zutreffenden Antworten aus</p>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={`answer-button ${selectedAnswers.includes(index) ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-buttons">
            <button 
              className="prev-button"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Zurück
            </button>
            <button 
              className="next-button"
              onClick={handleNextQuestion}
              disabled={selectedAnswers.length === 0}
            >
              {currentQuestion === questions.length - 1 ? 'Quiz beenden' : 'Nächste Frage'}
            </button>
          </div>
        </>
      )}
      <div style={{
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        fontSize: '12px',
        color: 'var(--text)',
        opacity: '0.7'
      }}>
        By Jonathan Soppa
      </div>
    </div>
  )
}

export default App
