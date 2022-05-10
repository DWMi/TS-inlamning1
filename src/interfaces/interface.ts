export interface gameLevels {
    id:number,
    question: string,
    choices: {
        leftBtn: btnData|null
        rightBtn: btnData|null
    }
    input:true|false
}

interface btnData {
        btnText:string
        pathID:number
}

export interface picture extends gameLevels{
    image:string
}