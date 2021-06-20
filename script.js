const calculatorScreen = document.querySelector('.calculator-screen')

const UpdateScreen = (number)=>{
	calculatorScreen.value = number
}

const inputNumber = (number)=>{
	if (currentNumber === '0'){
		currentNumber = number
	}else{
		currentNumber += number
	}
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
	number.addEventListener("click", (event)=>{
		inputNumber(event.target.value)
		UpdateScreen(currentNumber)
	})
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'


const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
		inputOperator(event.target.value)
		UpdateScreen(calculationOperator)
	})
})

const inputOperator = (operator)=>{
	if (calculationOperator === ''){
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = ''
}

const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", ()=>{
	calculate()
	UpdateScreen(currentNumber)
})

const calculate = ()=>{
	let result = ''
	switch (calculationOperator){
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = prevNumber - currentNumber
			break
		case "*":
			result = prevNumber * currentNumber
			break
		case "/":
			result = prevNumber / currentNumber
			break
		default:
			return
	}
	currentNumber = result
	calculationOperator = ''
}

const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click", ()=>{
	clearAll()
	UpdateScreen(currentNumber)
})

const clearAll = ()=>{
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const decimal = document.querySelector(".decimal")
decimal.addEventListener('click', (event)=>{
	inputDecimal(event.target.value)
	UpdateScreen(currentNumber)
})

const inputDecimal = (dot)=>{
	if (currentNumber.includes('.')){
		return
	}
	currentNumber += dot
}


const percentage = document.querySelector(".percentage")
percentage.addEventListener("click",()=>{
	inputPercentage()
	UpdateScreen(currentNumber)
})

const inputPercentage = ()=>{
	currentNumber = currentNumber/100
}
