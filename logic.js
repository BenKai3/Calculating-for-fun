var equation = "";
var answers = [];
var almost_answer = '';
var parens_count;
// var first_parens = '';
// var second_parens = '';
// var third_parens = '';

window.onload = function () {
	var answer_screen = document.getElementById('screen');
	var numbers = document.getElementsByClassName('number');
	var operators = document.getElementsByClassName('operator');
// RUNNING THE EQUATION
	document.getElementById('equals').onclick = function(){
		if (/*equation.search('(') == -1 && */eval(equation) != undefined) {
			answers.push(eval(equation));
		}
		// else {
		// 	parens_count = equation.replace(/[^(]/g, "").length;
		// 	for (var i = 0; i < parens_count; i++) {
		// 		parens_count[i];
		// 	};
		// 	for (var i = 0; i < equation.length; i++) {
		// 		if (equation[i-1] == '(') {
		// 			1st_parens += equation[i]
		// 		};
		// 		if (equation[i+1] == ')') {

		// 		}
		// 		else if (1st_parens != '') {

		// 		};
		// 	};
		// };
		console.log('answers: '+answers);
		answer_screen.innerHTML = answers[answers.length-1];
		equation = "";
	};
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