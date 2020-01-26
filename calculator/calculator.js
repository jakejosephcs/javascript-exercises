function add (...args) {
	const add = args.reduce((accumulator, initialValue) => {
		return accumulator + initialValue;
	}, 0);
	return add;
}

function subtract (...args) {
	const subtract = args.reduce((accumulator, initialValue) => {
		return accumulator - initialValue;
	});

	return subtract;
	
}

function sum (givenArray) {
	const summation = givenArray.reduce((accumulator, initialValue) => {
		return accumulator + initialValue;
	}, 0);

	return summation;
}

function multiply (givenArray) {
	const mul = givenArray.reduce((accum, initialValue) => {
		return accum * initialValue;
	});

	return mul;
}

function power(base, exponent) {
	return Math.pow(base,exponent);
}

function factorial(number) {
	if (number == 0) return 1;
	let product = 1
	for (let i = number; i > 0; i--){
		product *= i;
	}
	return product;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}