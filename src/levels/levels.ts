import { gameLevels } from "../interfaces/interface";

const gameLevels: gameLevels[] = [{
    id:0,
    question:'Vad heter du?',
    choices:{
        leftBtn:{btnText:'Start',pathID:1},
        rightBtn:null
    },    
    input:true
},  
{
    id:1,
    question:'Det är väldigt sent ute och du är packad som bara den, du är påväg hem från en AW med kollegorna. Hur tar du dig hem?',
    choices:{
        leftBtn: {btnText:'Gå hem',pathID:2},
        rightBtn:{btnText:'Taxi',pathID:3}
    },
    input:false
},
{
    id:2,
    question:'Du blev rånad på vägen hem 🥲',
    choices:{
        leftBtn:{btnText:'Börja om',pathID: 1},
        rightBtn:null
    },
    input:false,
},
{
    id:3,
    question:'Det kommer en Taxi men den verkar skum.',
    choices:{
        leftBtn:{btnText:'Ta den ändå', pathID:5},
        rightBtn:{btnText:'Ring en annan', pathID:4}
    },
    input:false
},
{
    id:4,
    question:'Du blev rånad under tiden du väntade på en ny.🥲',
    choices:{
        leftBtn:{btnText:'Börja om från sist', pathID:3},
        rightBtn:{btnText:'Börja om från början', pathID:1}
    },
    input:false
},
{
    id:5,
    question:'Efter några minuter så kommer samma Taxi.',
    choices: {
        leftBtn:{btnText:'Du tar den ändå trots stelheten',pathID:7},
        rightBtn:{btnText:'Du går hem', pathID:6}
    },
    input:false
    
},
{
    id:6,
    question:'Men.. vafan jag trodde du redan har lärt dig en läxa??',
    choices:{
        leftBtn:{btnText:'En chans till', pathID:5},
        rightBtn:null
    },
    input:false
},
{
    id:7,
    question:'Chafför frågar vart du ska.',
    choices:{
        leftBtn:{btnText:'Ge grannens address.',pathID:9},
        rightBtn:{btnText:'Ge ditt address',pathID:8}
    },
    input:false
},
{
    id:8,
    question:'Du kommer hem men får hela hemmet tömd av taxi chauffören',
    choices:{
        leftBtn:{btnText:'börja om från sist',pathID:7},
        rightBtn:null
    },
    input:false
},
{
    id:9,
    question:'Du har anlänt och inser att det kostar mer än du hade trott.',
    choices:{
        leftBtn:{btnText:'Du tar en springnota', pathID: 10},
        rightBtn:{btnText:'Du betalar honom',pathID: 11}
    },
    input:false
},
{
    id:10,
    question:'Taxi chauffören fångar dig och tömmer din plånbok.',
    choices:{
        leftBtn:{btnText:'Börja om från början', pathID:1},
        rightBtn:null        
    },
    input:false
},
{
    id:11,
    question:'Du är utanför grannen och du har 1km att promenera hem. Du ser någon komma mot dig som ser ändå ganska skeptisk ut.',
    choices:{
        leftBtn:{btnText:'Du börjar springa ifrån honom',pathID:13},
        rightBtn:{btnText:'Du struntar i honom och börjar promenera',pathID:12}
    },
    input:false
},
{
    id:12,
    question:'Du blir rånad och huggen R.I.P🪦',
    choices:{
        leftBtn:{btnText:'Spela igen',pathID:1},
        rightBtn:null
    },
    input:false
},
{
    id:13,
    question:'Du har sprungit en hel del och nu är du vilsen',
    choices:{
        leftBtn:{btnText:'Gå tillbaka?',pathID:14},
        rightBtn:{btnText:'Fortsätt frammåt',pathID:15}
    },
    input:false
},
{
    id:14,
    question:'Du bestämmer att vända tillbaka och träffar på han du sprang iväg från.. du blir huggen och rånad. R.I.P 🪦',
    choices:{
        leftBtn:{btnText:'Spela igen?', pathID:1},
        rightBtn:null
    },
    input:false
},
{
    id:15,
    question:'Du bestämmer att fortsätta frammåt, du blir bara mer vilsen.',
    choices:{
        leftBtn:{btnText:'Du ger upp och sover i en buske',pathID: 16},
        rightBtn:{btnText:'Du ringer taxi',pathID:3}
    },
    input:false
},
{
    id:16,
    question:'Du vaknar upp och det är morgon och du inser att du somna i en buske utanför ditt hem. GRATTIS du klarade dig hem utan att bli rånad 🥳',
    choices:{
        leftBtn:{btnText: 'Spela om igen?',pathID:1},
        rightBtn:null
    },
    input:true //lägg till en input
}
]