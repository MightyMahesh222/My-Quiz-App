import {useState} from 'react'
import MainPage from './components/MainPage'
import './App.css'

const quizQuestions = [
  {
    id: 1,
    question: 'What is the chemical symbol of gold?',
    options: ['Au', 'Ag', 'Fe', 'Pb'],
    answer: 'Au',
  },
  {
    id: 2,
    question: 'Which of the following is a type of fruit?',
    options: ['Potato', 'Carrot', 'Tomato', 'Onion'],
    answer: 'Tomato',
  },
  {
    id: 3,
    question: 'What is the primary function of a microscope?',
    options: [
      'Measure weight',
      'Magnify small objects',
      'Record sound',
      'Cook food',
    ],
    answer: 'Magnify small objects',
  },
  {
    id: 4,
    question: "Which planet is known as the 'Red Planet'?",
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    id: 5,
    question: 'Current Prime Minister of INDIA',
    options: ['Narendra Modi', 'Rahul Gandhi', 'Jagan 😂', 'Prathibha Patil'],
    answer: 'Narendra Modi',
  },
]

const App = () => {
  const [qIndex, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const changeIndex = () => {
    if (qIndex < quizQuestions.length) {
      setIndex(prev => prev + 1)
    }
  }

  const getMyApp = () => {
    if (score < 5) {
      return 'Not Bad'
    }
    else if (score < 10) {
      return 'Good Job'
    }
   else if (score < 15) {
      return 'Well Done'
    }
    return 'Excellent'
  }

  const justRetry = () => {
    setIndex(0)
    setScore(0)
  }

  const settingScore = val => {
    setScore(prev => prev + val)
  }

  const appreciate = getMyApp()

  return (
    <div className="mainDiv">
      {qIndex < quizQuestions.length ? (
        <MainPage
          oneBit={quizQuestions[qIndex]}
          key={quizQuestions[qIndex].id}
          settingIndex={changeIndex}
          score={score}
          settingScore={settingScore}
        />
      ) : (
        <div className="completedDiv">
          <h1>Quiz Completed</h1>
          <p className="scored">
            You Scored {score}/{quizQuestions.length * 5}
          </p>
          <img
            alt="oogy"
            className="oogyPic"
            src="https://ik.imagekit.io/sdce03tuc/Screenshot%202024-04-06%20065314.png?updatedAt=1712366660760"
          />
          <p className="appreciate">{appreciate}</p>
          <div>
            <button className="retry" onClick={justRetry} type="button">
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App