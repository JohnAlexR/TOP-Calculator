// Psuedocode steps
        // 1. create html
        // 2. create an add number function on all btns 
        //      on each number, pass strings and concatenate to a firstNumber or secondNumber variable
        //      on operator click, adds the operator to an operator variable
        //      displays value(s)
        // 3. create functions to perform the basic arithmetic on the toCalc array
        //      add, subtract, multiply, divide
        // 4. create one main function that, 
        //      performs the function on firstNumber and secondNumber
        //      returns a sum that is displayed
        //      clears secondNumber, and operator variable
        //      first number = sum
        // 5.   create clear functionality (both delete and clear)

let firstNumber = ""
let secondNumber = ""
let operator = ""
let finalValue = ""
let decimal = false

const displayEl = document.getElementById('display-el')
const numButtons = document.querySelectorAll('.num-btn')
const operatorButtons = document.querySelectorAll('.operator-btn')
const evalButton = document.getElementById('eval')
const cEl = document.getElementById('c')
const acEL = document.getElementById('ac')


numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (decimal === true && e.target.id === ".") {
            console.log('do nothing')
        } else {
        if(operator === "") {
        firstNumber += e.target.id
        displayEl.innerText = firstNumber
            if(e.target.id === ".") {
                decimal = true
                console.log("decimal")
            }
    } else {
        secondNumber += e.target.id
        displayEl.innerText = firstNumber + operator + secondNumber
        if (e.target.id === ".") {
            decimal = true
            console.log('decimal')
        }
    }}})
});       

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.id
        displayEl.innerText = firstNumber + operator
    })})

evalButton.addEventListener('click', () => {
    switch(operator) {
        case "+": 
            finalValue = parseFloat(firstNumber)+parseFloat(secondNumber)
            break;
        case "-":
            finalValue = parseFloat(firstNumber)-parseFloat(secondNumber)
           break;
        case "*":
            finalValue = parseFloat(firstNumber)*parseFloat(secondNumber)
            break;
        case "%":
            finalValue = parseFloat(firstNumber) % parseFloat(secondNumber)
            break;
        case "÷":
            finalValue = parseFloat(firstNumber)/parseFloat(secondNumber)
        
    } 
    firstNumber = finalValue
    displayEl.innerText = firstNumber
    secondNumber = ""
    operator = ""
}
)

cEl.addEventListener('click', () => {
    if(secondNumber) {
        console.log('second number is true')
        secondNumber = secondNumber.substring(0,secondNumber.length - 1)
        displayEl.innerText = firstNumber + operator + secondNumber
    } else if (operator) {
        console.log('operator is true')
        operator = ""
        displayEl.innerText = firstNumber + operator
    } else {
        console.log('first number is true')
        firstNumber = firstNumber.toString()
        firstNumber = firstNumber.substring(0,firstNumber.length - 1)
        displayEl.innerText = firstNumber
    }
})

acEL.addEventListener('click', () => {
firstNumber = ""
secondNumber = ""
operator = ""
displayEl.innerText = ""


})