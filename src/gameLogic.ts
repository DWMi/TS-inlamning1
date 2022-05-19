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

export let currentLevel = gameLevels[0]

// const nextLevel: (id: number) => void = (id) => {

//     for (let i = 0; i < gameLevels.length; i++) { 

//         let levels = gameLevels[i]

//         if(levels.id == id) {
//             currentLevel = levels
//             renderGameQuestions(levels)
//             bildRend(levels)
            
//         }
//     }
// }

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
        gameTag.classList.remove(GameLevel.classes!)
        submit?.removeAttribute('disabled')
        gametagCon.className = 'gametagCon flex center'
        submit.addEventListener('click',()=>{
            submit.style.color = 'black'
            submit.style.borderColor='black'
            gamingTag = gameTag!.value
            submit?.setAttribute('disabled', '')
            return gamingTag
        })
    }else if (!GameLevel.inputName){
        gametagCon.className = GameLevel.classesDefault!
    }

        if(GameLevel.displayName){
            if(gamingTag.length>0){
                question.textContent = GameLevel.question + gamingTag
            }else {
            question.textContent = GameLevel.question
            }
        }    


    if(GameLevel.inputFeedBack){
        submit.style.color = 'white'
        submit.style.borderColor='white'
        submit?.removeAttribute('disabled')
        gametagCon.classList.remove(GameLevel.classes!)
        feedbackInput.classList.remove(GameLevel.classes!)
        gameTag.classList.add(GameLevel.classes!)
        submit.addEventListener('click', () => {
            submit.style.color = 'black'
            submit.style.borderColor='black'
            feedbackText = feedbackInput!.value
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
        image.classList.remove('none')
        image.src = currentLevel.img!.image
        image.alt = currentLevel.img!.description
    }
}




rBtn.addEventListener('click',()=>{
    nextLevel(currentLevel.choices.rightBtn!.pathID!)
})
lBtn.addEventListener('click',()=>{
    nextLevel(currentLevel.choices.leftBtn!.pathID!)
})  

