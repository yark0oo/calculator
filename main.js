$(document).ready(function() {

let calculator = {
	numberA: null,
	numberB: null,
	func: null,
	output: null,
	enter: null,
}

$("#1").click(function() {
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 1;
		calculator.output = 1;
	}

	else {
		calculator.numberB = 1;
		calculator = 1;
	}

	output();
});

$("#2").click(function() {
	console.log(2);
	if (calculator.numberA === null) {
		calculator.numberA = 2;
		calculator.output = 2;
	}

	else {
		calculator.numberB = 2;
		calculator.output = 2;
	}

	output();
});

$("#plus").click(function() {
	console.log('plus');
	calculator.func = 'plus';
});

$("#enter").click(function() {
	console.log('enter');
	if (calculator.func === 'plus') {
		calculator.enter = calculator.numberA + calculator.numberB;
		calculator.output = calculator.enter;
	}

	output();
});



function output() {
	$("#output").text(calculator.output);
}


});