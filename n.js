/*
//задание 3
var a = 3, b = -8;

if (a >= 0 && b>=0){
console.log(a-b);	
} 
if (a <= 0 && b<=0){
console.log(a*b);	
}
if ((a <= 0 && b>=0) ||  (a >= 0 && b<=0)){
console.log(a+b);	
}
*/

//задание 4
/*
//var a = 2;
//var b = 3;

	function operationAddition(a, b) {
		return a + b;
	}

	function operationSubtraction(a, b) {
    	return a - b;
	}

	function operationDivision (a, b) {
    	return a / b;
	}

	function operationMultiplication (a, b) {
    	return a * b;
	}
art = operationAddition(5,6);
alert(art);
*/

//задание 5
/*
function Choice() {
var a = +prompt('Введите значение "a"'),
	b = +prompt('Введите значение "b"'),
	operation = prompt('Введите операцию "+", "-", "*", "/"'),
result;

function operationAddition (a, b) {
	return a+b;
}

function operationSubtraction(a, b) {
	return a-b;
}

function operationMultiplication (a, b) {
	return a*b;
}

function operationDivision (a, b) {
	return a/b;
}

function mathOperation(a, b, operation) {
	switch (operation) {
		case("+"):
	return operationAddition (a, b);
		case("-"):
	return operationSubtraction (a, b);
		case("*"):
	return operationMultiplication (a, b);
		case("/"):
	return operationDivision (a, b);
	}
}

alert ('Ваш результат: ' + mathOperation(a, b, operation));
}
Choice();			
*/

//задание 6
/*
function Choice() {
	var val = +prompt('Введите числo'),
		pow = +prompt('Введите степень');
		function power(val, pow) {
			if (pow == 0)
		return 1;
			else
		return val * power(val, pow-1);
		}
		alert ('Число ' + val + ' в степени ' + pow + ' = ' + power(val, pow));
}
Choice();
*/

//задание 7
/*
var patch = prompt('Введите пароль');

var a=false,b=false,c=false;

function len(a){//проверка кол-ва символов
	if (patch.length>=3 && patch.length<= 12){ 
	a=true
	}
return a;	
}

function spez (b){//содержать хотя бы один из символов. возвратить индекс искомого элемента в массиве при первом совпадении
	if ((patch.indexOf("&") != -1) || (patch.indexOf("$") != -1) || (patch.indexOf("%") != -1) || (patch.indexOf("*") != -1)) {
		b=true;	
	}
return b;
}	

function StartEnd (c){//либо начинаться с буквы ‘q’, либо заканчиваться буквой ‘z’, либо оба условия сразу
	if ((patch.indexOf('q') == 0) || (patch[patch.length-1]=='z' )) {
		c=true;
	}
return c;	
}

function pass(){
if ( (len(a)==true) && (spez(b)==true) && (StartEnd(c)==true)){
		alert("Корректный пароль");	
	} else {
		alert("Некорректный пароль");	
	}	
}

pass();
*/
	

