const startButton = document.getElementById('start-btn')
const endButton = document.getElementById('end-btn')
const nextButton = document.getElementById('next-btn')
const statistics =document.getElementById('statistics')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')




let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startSurvey)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startSurvey() {
    console.log('Survey started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort()
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('survey-btn')
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton= e.target
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        endButton.classList.remove('hide')
    }
    
}

function selectCompare(e) {
    const selectedButton= e.target
    nextButton.classList.remove('hide')
}

const questions = [
    {
        question: 'Was machst du beruflich?',
        answers: [
            {text: 'Branche 1', question1Id: 1},
            {text: 'Branche 2', question1Id: 2},
            {text: 'Branche 3', question1Id: 3},
            {text: 'Branche 4', question1Id: 4}
    ]
    },
    {
        question: 'Was machst du in deiner Freizeit?',
        answers: [
            {text: 'Sport', question1Id: 1},
            {text: 'Musik', question1Id: 2}
    ]
    },
    {
        question: 'Wie lange schlafst du?',
        answers: [
            {text: '0-2 Studnen', question1Id: 1},
            {text: '3-5 Studnen', question1Id: 2},
            {text: '5-7 Studnen', question1Id: 3},
            {text: '8-9 Stunden', question1Id: 4}
    ]
    }

]