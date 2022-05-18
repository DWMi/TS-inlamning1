export interface gameInterface {
    id:number,
    question: string,
    choices: {
        leftBtn?: btnData,
        rightBtn?: btnData
    },
    input:true|false,
    img?:picture,
    classes?:string,
    classesDefault?:string,
    submit?:boolean,
    inputName?:boolean,
    displayName?:boolean,
    inputFeedBack?:boolean,
    displayFeedback?:boolean,
    end?:boolean
}

interface btnData {
        btnText:string,
        pathID?:number,
}

interface picture{
    image:string,
    description:string
}

