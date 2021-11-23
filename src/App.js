import React, { useState } from 'react'
import FlashCardList from './components/FlashcardList'
import './style.css'


function App() {
  const [flashcards, setFlashcards] = useState(sampleData)

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