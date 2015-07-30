window.onload = function () {
	var equation = "";
	var answers = [];
	var answer_screen = document.getElementById('screen');
	var numbers = document.getElementsByClassName('number');
	var operators = document.getElementsByClassName('operator');
// CLEARING THE EQUATION/SCREEN/ANSWER HISTORY
	document.getElementById('clear_last').onclick = function(){
		answers.pop();
		answer_screen.innerHTML = answers[answers.length-1];
		equation = "";
		console.log(answers);
	};
	document.getElementById('clear_all').onclick = function(){
		for (var i = 0; i < answers.length; i++) {
			answers.pop();
		};
		answers.pop();
		equation = "";
		console.log('answers: '+answers);
	};
// RUNNING THE EQUATION
	document.getElementById('equals').onclick = function(){
		if (eval(equation) != undefined) {
			answers.push(eval('equation: '+equation));
		};
		console.log('answers: '+answers);
		answer_screen.innerHTML = answers[answers.length-1];
		equation = "";
	};
//BUILDING THE EQUATION
	for (var i = 0; i < numbers.length; i++) {
		numbers[i].onclick = function(){
			equation += this.innerHTML;
			answer_screen.innerHTML = equation;
			console.log('equation: '+equation);
		};
	};
	for (var i = 0; i < operators.length; i++) {
		operators[i].onclick = function(){
			if (typeof eval(equation[equation.length-1]) == 'number') {
				equation += this.innerHTML;
				answer_screen.innerHTML = equation;
				console.log('equation: '+equation);
			}
			else if (answers.length && equation.length == 0) {
				equation = answers[answers.length-1]+this.innerHTML;
				answer_screen.innerHTML = equation;
				console.log('equation: '+equation);
			};
		};
	};
};