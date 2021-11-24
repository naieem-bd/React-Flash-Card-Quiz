import React, { useState, useEffect } from 'react'
import FlashCardList from './components/FlashcardList'
import './style.css'
import axios from 'axios'

const App = () => {
  const [flashcards, setFlashcards] = useState(sampleData)
  
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setFlashcards (
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map(a => decodeString(a)), 
              answer
            ]
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - .5)
            }
          })
        )
      })
  }, [])

  const decodeString = str => {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }
  
  return (
    <div className="container">
      <FlashCardList flashcards={flashcards} />
    </div>
  );
}

// sample data
const sampleData = [
  {
    id: 1,
    question: 'dummy question 1',
    answer: 'ans 1',
    options: ['one', 'two', 'three', 'four']
  },
  {
    id: 2,
    question: 'question number two',
    answer: 'second ans',
    options: ['one', 'two', 'three', 'four']
  },
  {
    id: 3,
    question: 'i am question 3',
    answer: '3 ans',
    options: ['sunlight', 'moonlight', 'light', 'four']
  }
]

export default App;