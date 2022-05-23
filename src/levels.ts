import { gameInterface} from "./interface";


export let gameLevels: gameInterface[] = [
    {
        id:1,
        question:'Det är väldigt sent ute och du är packad som bara den, du är påväg hem från en AW med kollegorna. Hur tar du dig hem?',
        choices:{
            leftBtn: {btnText:'Gå hem',pathID:2},
            rightBtn:{btnText:'Taxi',pathID:3}
        },
        img:{image: './src/assets/drunkwalk.jpg', description:'drunk man walking'
        },
        classesDefault:'none'

    },
    {
        id:2,
        question:'Du blev rånad på vägen hem 🥲',
        choices:{
            leftBtn:{btnText:'Börja om',pathID: 1}
        },
        img:{image: './src/assets/robbery.png', description:'man getting robbed'
        },
        classesDefault:'none'
    },
    {
        id:3,
        question:'Det kommer en Taxi men den verkar skum.',
        choices:{
            leftBtn:{btnText:'Ta en annan', pathID:5},
            rightBtn:{btnText:'Ta en svarttaxi istället', pathID:4}
        },
        img:{image: './src/assets/taxi.png', description:'weird taxi'
        },
        classesDefault:'none'
    },
    {
        id:4,
        question:'Du blev rånad av svarttaxi chauffören 🥲',
        choices:{
            leftBtn:{btnText:'Börja om från sist', pathID:3},
            rightBtn:{btnText:'Börja om från början', pathID:1}
        },
        img:{image: './src/assets/robbery.png', description:'man getting robbed'
        },
        classesDefault:'none'
    },
    {
        id:5,
        question:'Efter några minuter så kommer samma Taxi med samma förare.',
        choices: {
            leftBtn:{btnText:'Du tar den ändå trots stelheten',pathID:7},
            rightBtn:{btnText:'Du går hem', pathID:6}
        },
        img:{image: './src/assets/taxi.png', description:'weird taxi'
        },
        classesDefault:'none'
        
    },
    {
        id:6,
        question:'Men.. vafan jag trodde att du redan hade lärt dig en läxa🤦‍♂️??',
        choices:{
            leftBtn:{btnText:'En chans till', pathID:5}
        },
        img:{image: './src/assets/robbery.png', description:'man getting robbed'
        },
        classesDefault:'none'
    },
    {
        id:7,
        question:'Chaufför frågar vart du ska.',
        choices:{
            leftBtn:{btnText:'Ge grannens address.',pathID:9},
            rightBtn:{btnText:'Ge ditt address',pathID:8}
        },
        img:{image: './src/assets/taxi.png', description:'weird taxi'
        },
        classesDefault:'none'
    },
    {
        id:8,
        question:'Du kommer hem men får hela hemmet tömd av taxi chauffören.',
        choices:{
            leftBtn:{btnText:'börja om från sist',pathID:7}
        },
        img:{image: './src/assets/robbery.png', description:'man getting robbed'
        },
        classesDefault:'none'
    },
    {
        id:9,
        question:'Du har anlänt och inser att det kostar mer än du hade trott.',
        choices:{
            leftBtn:{btnText:'Du tar en springnota', pathID: 10},
            rightBtn:{btnText:'Du betalar honom',pathID: 11}
        },
        img:{image: './src/assets/dollars.jpg', description:'tons of cash'
        },
        classesDefault:'none'
    },
    {
        id:10,
        question:'Taxi chauffören fångar dig och tömmer din plånbok.',
        choices:{
            leftBtn:{btnText:'Börja om från början', pathID:1},

        },
        img:{image: './src/assets/broke.jpg', description:'an empty wallet'
        },
        classesDefault:'none'
    },
    {
        id:11,
        question:'Du är utanför grannen och du har 1km att promenera hem. Du ser någon komma mot dig som ser ändå ganska skeptisk ut.',
        choices:{
            leftBtn:{btnText:'Du börjar springa ifrån honom',pathID:13},
            rightBtn:{btnText:'Du struntar i honom och börjar promenera',pathID:12}
        },
        img:{image: './src/assets/susman.jpg', description:'a suspicious man'
        },
        classesDefault:'none'
    },
    {
        id:12,
        question:'Du blir rånad och huggen R.I.P🪦',
        choices:{
            leftBtn:{btnText:'Gå vidare',pathID:17},
        },
        img:{image: './src/assets/rip.jpg', description:'a gravestone'
        },
        classesDefault:'none'
    },
    {
        id:13,
        question:'Du lyckades springa ifrån honom men nu då ?',
        choices:{
            leftBtn:{btnText:'Gå tillbaka?',pathID:14},
            rightBtn:{btnText:'Fortsätt frammåt',pathID:15}
        },
        img:{image: './src/assets/run.gif', description:'forrest gump'
        },
        classesDefault:'none'
    },
    {
        id:14,
        question:'Du bestämmer att vända tillbaka och träffar på honom du sprang iväg från.. du blir huggen och rånad. R.I.P 🪦',
        choices:{
            leftBtn:{btnText:'Gå vidare', pathID:17},
        },
        img:{image: './src/assets/rip.jpg', description:'a gravestone'
        },
        classesDefault:'none'
    },
    {
        id:15,
        question:'Du bestämmer att fortsätta frammåt, men du är nu vilsen.', 
        choices:{
            leftBtn:{btnText:'Du ger upp och sover i en buske',pathID: 16},
            rightBtn:{btnText:'Du ringer taxi',pathID:3}
        },
        img:{image: './src/assets/lost.gif', description:'lost man'
        },
        classesDefault:'none'
    },
    {
        id:16,
        question:'Du vaknar upp och det är morgon och du inser att du somna i en buske utanför ditt hem. GRATTIS du klarade dig hem utan att bli rånad 🥳',
        choices:{
            leftBtn:{btnText: 'Gå vidare',pathID:17},
        },
        img:{image: './src/assets/home.gif', description:'jim carrey'
        },
        classesDefault:'none'
    },
    {
        id:17,
        question:'Vad heter du?',
        choices:{
            leftBtn:{btnText:'Gå vidare', pathID:18},
        },      
        inputName:true,
        classes: 'none',
        classesDefault: 'gametagCon none flex center'
    },
    {
        id:18,
        question:'Har du varit med i liknade situation ?',
        choices:{
            leftBtn:{btnText:'Ja',pathID:19},
            rightBtn:{btnText:'Nej',pathID:20}
        },
        classes:'none',
        classesDefault: 'gametagCon none flex center'

    },
    {
        id:19,
        question:'Beklagar så hemskt mycket att detta har hänt dig ',
        choices:{
            leftBtn:{btnText:'Gå vidare', pathID:21},
        }, 
        classes:'none',
        displayName:true,
        classesDefault: 'gametagCon none flex center'   
    },
    {
        id:20,
        question:'Gött fortsätt så ',
        choices:{
            leftBtn:{btnText:'Gå vidare', pathID:21},
        },
        displayName:true,
        classes:'none',
        classesDefault: 'gametagCon none flex center'   
    },
    {
        id:21,
        question:'Vad tyckte du om spelet?',
        choices:{
            leftBtn:{btnText:'Gå vidare', pathID:22},
        },       
        inputFeedBack:true,
        classes: 'none',
        classesDefault: 'gametagCon none flex center'

    },
    {
        id:22,
        question:'Tack för att ditt feedback ',
        choices:{
            leftBtn:{btnText:'Gå vidare',pathID:23},
        },
        displayName:true,
        displayFeedback:true,
        classes:'none',
        classesDefault: 'gametagCon none flex center'
        

    },
    {
        id:23,
        question:'Spela om igen?',
        choices:{
            leftBtn:{btnText:'Ja'}
        },
        classes:'none',
        end:true,
        classesDefault: 'gametagCon none flex center'
    
    }
]