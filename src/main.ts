import './style/style.css'
import {start,question,btnCon, renderGameQuestions, bildRend} from './gameLogic'
import { gameLevels} from './levels'



start.addEventListener('click', () => {
    renderGameQuestions(gameLevels[0])
    bildRend(gameLevels[0])
    start.style.display = 'none'
    question.style.display = 'flex'
    btnCon.classList.remove('none')
})



