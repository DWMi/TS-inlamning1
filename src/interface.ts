export interface gameInterface {
    id:number,
    question: string,
    choices: {
        leftBtn?: btnData,
        rightBtn?: btnData
    },
    img?:picture,
    classes?:string,
    classesDefault?:string,
    inputName?:boolean,
    displayName?:boolean,
    inputFeedBack?:boolean,
    displayFeedback?:boolean,
    end?:boolean
}

interface btnData {
        btnText:string,
        pathID?:number
}

interface picture{
    image:string,
    description:string
}

