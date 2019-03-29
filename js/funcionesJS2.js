function multiplicar()
{
	var n1 = document.getElementById("num1").value;
	var n2 = document.getElementById("num2").value;
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	mult = (n1 * n2);
	document.getElementById("resulta").value = mult ;
	return;
}
function sumar()
{
	var n1 = document.getElementById("num1").value;
	var n2 = document.getElementById("num2").value;
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	suma = (n1 + n2);
	document.getElementById("resulta").value = suma;
	return;
}

function dividir()
{
	var n1 = document.getElementById("num1").value;
	var n2 = document.getElementById("num2").value;
	divi = eval(n1 / n2);
	document.getElementById("resulta").value = divi;
	return;
}

function micalculadora(operador)
{
	var n1 = document.getElementById("num1").value;
	var n2 = document.getElementById("num2").value;
	result = eval(n1 + operador + n2);
	document.getElementById("resulta").value = result;
	return;
}
