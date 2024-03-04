const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('#button')!;

const numberresult: Array<Number>= []
const stringresult: Array<string> = []

type numorstring = number | string
type result = {val: number; timestamp: Date}

interface ResultObj {val: number; timestamp: Date}

function adding(num1:numorstring,num2:numorstring){
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }else if (typeof num1 === "string" && typeof num2 === "string"){
        return num1 + ' ' + num2
    }
    return +num1 + +num2
}

function printResults(resultobj:ResultObj){
    console.log(resultobj.val)
}

console.log(adding(1,2))

if (buttonElement){
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = adding(+num1,+num2)
        const stringResult = adding(num1,num2)
        numberresult.push(result as number)
        stringresult.push(stringResult as string)
        printResults({val: result as number, timestamp: new Date()})
        console.log(numberresult,stringresult)
    })
}

const mypromise = new Promise((res,rej) => {
    setTimeout(() => {
        res('I woked')
    },1000)
})

mypromise.then((result) => {
    console.log(result)
})

