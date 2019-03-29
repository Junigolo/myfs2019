
		function diag()
		{
			var xpeso = document.getElementById("peso").value;
			var xaltura = document.getElementById("altura").value;
			xpeso = parseFloat(xpeso).toFixed(2);
			xaltura = parseFloat(xaltura).toFixed(2);
			var imc = (xpeso / (xaltura**2));

			imc = parseFloat(imc).toFixed(2);
			// document.write("Valor generado :"+imc)
			var xboolean = document.getElementById("h").checked;
			if (xboolean)
			{
				document.getElementById("mgsgenero").innerHTML = "H O M B R E";
			}
			else
			{
				document.getElementById("mgsgenero").innerHTML = "M U J E R";
			}
			
			if (imc < 19.00)
			{
				document.getElementById("diags").innerHTML = " Peso DEBAJO normal";		

			} 
			if (imc >= 19.00 && imc <= 24.00)
			{
				document.getElementById("diags").innerHTML = "Peso IDEAL";
			}
			if (imc > 24.00) 
			{

				document.getElementById("diags").innerHTML = " Peso SOBREPESO";	
				for (var i = 0; i < 12; i++) 
					{
					  document.getElementById("msgresulta").innerHTML = document.getElementById("msgresulta").innerHTML + " <br> : "+i;
					}
			}
		}
	function val_peso()	
		{									
		var  xvalue = parseInt(document.getElementById("peso").value);
			if ( xvalue < 30 || xvalue > 200)
			{
				document.getElementById("diags").innerHTML  = "Peso DEBE mayor de 30 y menor de 200 Kg  **>"+xvalue;
				document.geElementById("peso").focus();
			}
		}
		function msg_peso()
		{				
			document.getElementById("diags").innerHTML  = " Digite Peso > 30 y < 200 ";
		}

		function val_altura()
		{				
			var  xvalue = parseFloat(document.getElementById("altura").value).toFixed(2);
			document.getElementById("diags").innerHTML  = "Altura DEBE mayor de 0,5  y menor de 2,5 Metros  **> "+xvalue;
			if ( xvalue < 0.50 || xvalue > 2.50)
			{
				document.getElementById("diags").innerHTML  = "Altura DEBE mayor de 0,5  y menor de 2,5 Metros  **>"+xvalue;
				document.getElementById("altura").focus();
			}
		}
		function msg_altura()
		{				
			document.getElementById("diags").innerHTML  = " Digite Altura en Metros  > 0,50 y < 2,50 ";
		}