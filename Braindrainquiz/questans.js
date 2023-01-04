const quizData = [
    {
      question: " What is the correct command to create a new React project?",
      a: "npx create-react-app",
      b: "npm create-react-app myReactApp",
      c: "npx create-react-app myReactApp",
      d: "npm create-react-app",
      correct: "b",
    },
    {
      question:"What command is used to start the React local development server?",
      a: "npm serve",
      b: "npm run dev",
      c: "npm start",
      d: "npm built",
      correct: "c",
    },
    {
      question: "Which keyword creates a constant in JavaScript?",
      a: "let",
      b: "var",
      c: "constant",
      d: "const",
      correct: "d",
    },
  
    {
      question: "What is the correct syntax to import a Component from React?",
      a: "import {Component} from 'react'",
      b: "import [Component] from 'React'",
      c: "import ReactComponent from 'react'",
      d: "import Component from 'react'",
      correct: "a",
    },
    {
      question:"What is the default local host port that a React development server uses?",
      a: "3030",
      b: "8000",
      c: "5500",
      d: "3000",
      correct: "a",
    },
  ]; 
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let totqtn=quizData.length;


let currentqtn = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentqtn]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}


//submitBtn.addEventListener('click', () => {
submitBtn.addEventListener( 'click'  , calcscore(){

  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentqtn].correct) {
         score++
         quiz.innerHTML = `
         <h2>You answered ${score}/${totqtn} questions correctly</h2>

              `
     }

     currentqtn++

     if(currentqtn < totqtn) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${totqtn} questions correctly</h2>

         <button onclick="location.reload()">Reload</button>
         `
     }
  }

})