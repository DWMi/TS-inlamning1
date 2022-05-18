import './style/style.css'
import {start,question,btnCon, submit, renderGameQuestions, bildRend} from './gameLogic'
import { gameLevels} from './levels'



start.addEventListener('click', () => {
    renderGameQuestions(gameLevels[0])
    bildRend(gameLevels[0])
    start.style.display = 'none'
    submit.classList.remove('none')
    question.style.display = 'flex'
    btnCon.classList.remove('none')
})



