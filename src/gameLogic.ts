import { gameInterface } from './interface'
import { gameLevels } from './levels'


export const question = document.querySelector('.question') as HTMLTitleElement
const lBtn = document.querySelector('.lBtn') as HTMLButtonElement
const rBtn = document.querySelector('.rBtn') as HTMLButtonElement
export const btnCon = document.querySelector('.btnCon') as HTMLDivElement
export const start = document.querySelector('.start') as HTMLDivElement
const gametagCon = document.querySelector('.gametagCon') as HTMLDivElement
const gameTag = document.querySelector('.gameTag') as HTMLInputElement
export const submit = document.querySelector('.submit') as HTMLButtonElement
const feedback = document.querySelector('.feedback') as HTMLParagraphElement
const feedbackInput= document.querySelector('.feedbackInput') as HTMLInputElement
export const image = document.querySelector('.image') as HTMLImageElement
const blurryTime = document.querySelector('.blurryTime') as HTMLDivElement

let currentLevel = gameLevels[0]

const nextLevel: (id: number) => void = (id) => {
    
        gameLevels.map((levels)=>{
            if(levels.id == id){
                currentLevel = levels
                renderGameQuestions(levels)
                bildRend(levels)
            }
        })
}


let gamingTag : string;
let feedbackText : string;
export const renderGameQuestions: (GameLevel: gameInterface) => void = (GameLevel) =>{
    
    if(currentLevel.choices.rightBtn) {
        rBtn.textContent = GameLevel.choices.rightBtn!.btnText
    }

    if(currentLevel.choices.leftBtn) {
        lBtn.textContent = GameLevel.choices.leftBtn!.btnText
    }
    
    if(!currentLevel.choices.rightBtn) {
        rBtn.remove()
    } else {
        btnCon.appendChild(rBtn)
    }

    question.textContent = GameLevel.question


    if(GameLevel.inputName){
        lBtn.classList.add(GameLevel.classes!)
        gameTag.classList.remove(GameLevel.classes!)
        gametagCon.className = 'gametagCon flex center'
        gameTag.addEventListener('keyup',()=>{
            if(gameTag.value == ''){
            submit.classList.add(GameLevel.classes!)
            }else{
            submit.classList.remove(GameLevel.classes!)
            }
        })
        submit.addEventListener('click',()=>{
            submit.style.color = 'black'
            submit.style.borderColor='black'
            submit.style.cursor= 'not-allowed'
            lBtn.classList.remove(GameLevel.classes!)
            gamingTag = gameTag!.value
            submit?.setAttribute('disabled', '')
            return gamingTag
        })
    }else if (!GameLevel.inputName){
        gametagCon.className = GameLevel.classesDefault!
    }

        if(GameLevel.displayName){
            question.textContent += gamingTag
        } 


    if(GameLevel.inputFeedBack){ 
        submit.style.cursor= 'pointer'
        lBtn.classList.add(GameLevel.classes!)
        submit.style.color = 'white'
        submit.style.borderColor='white'
        submit.classList.add(GameLevel.classes!)
        submit?.removeAttribute('disabled')
        gametagCon.classList.remove(GameLevel.classes!)
        feedbackInput.classList.remove(GameLevel.classes!)
        gameTag.classList.add(GameLevel.classes!)
        feedbackInput.addEventListener('keyup',()=>{
        if(feedbackInput.value == ''){
            submit.classList.add(GameLevel.classes!)
        }else{
            submit.classList.remove(GameLevel.classes!)
            }  
        })
        submit.addEventListener('click', () => {
            submit.style.color = 'black'
            submit.style.borderColor='black'
            submit.style.cursor= 'not-allowed'
            lBtn.classList.remove(GameLevel.classes!)
            feedbackText = 'Feedback: ' + feedbackInput!.value
            submit?.setAttribute('disabled', '')
        })
    }

    if(GameLevel.displayFeedback){
        gametagCon?.classList.add(GameLevel.classes!)
        feedback?.classList.remove(GameLevel.classes!)
        feedback.textContent = feedbackText 
        lBtn.addEventListener('click', ()=>{  
            feedback.classList.add(GameLevel.classes!)
        })
    }  

    if(GameLevel.end){
        lBtn.addEventListener('click', ()=>{  
            location.reload()
        })
    }
}



export const bildRend:(GameImage: gameInterface) => void = (GameImage) =>{
    if(GameImage.img){
        image.src = currentLevel.img!.image
        image.alt = currentLevel.img!.description
        blurryTime.style.backgroundImage = `url("${currentLevel.img!.image}")`
    }
}




rBtn.addEventListener('click',()=>{
    nextLevel(currentLevel.choices.rightBtn!.pathID!)
})
lBtn.addEventListener('click',()=>{
    nextLevel(currentLevel.choices.leftBtn!.pathID!)
})  

