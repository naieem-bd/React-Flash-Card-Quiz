import React, { useState, useEffect } from 'react'
import FlashCardList from './components/FlashcardList'
import './style.css'
import axios from 'axios'


function App() {
  const [flashcards, setFlashcards] = useState(sampleData)

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        res.data.results.map((questionItem, index) => {
          return {
            id: `${index}-${Date.now()}`,
            questions: questionItem.question,
            
          }
        })
      })
  })

  return (
    <FlashCardList flashcards={flashcards} />
  );
}

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