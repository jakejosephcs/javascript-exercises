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

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}