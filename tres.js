/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let destino;
	let temporada;
	let cantidadPers;
	let contBari = 0;
	let contCata = 0;
	let contSalta = 0;
	let cantMax = 0;
	let destinoMasElegido;
	let sexoMasPas;
	let acumPersonas = 0;
	let promPersonas = 0;
	let contadorViajes = 0;
	let continuar;

	do{
		sexo = prompt("Ingrese el sexo del titular: 'F' o 'M'.").toLowerCase();
		while(sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error. Ingrese un sexo válido: 'F' o 'M'.").toLowerCase();
		}

		destino = prompt("Ingrese el destino: 'Bariloche', 'Cataratas' o 'Salta'.").toLowerCase();
		while(destino != "bariloche" && destino != "cataratas" && destino != "salta"){
			destino = prompt("Error. Ingrese un destino válido: 'Bariloche', 'Cataratas' o 'Salta'.").toLowerCase();
		}

		temporada = prompt("Ingrese la temporada en la que viaja: 'Verano', 'Otoño', 'Invierno' o 'Primavera'.").toLowerCase();
		while(temporada != "verano" && temporada != "otoño" && temporada != "invierno" && temporada != "primavera"){
			temporada = prompt("Error. Ingrese una temporada válida: 'Verano', 'Otoño', 'Invierno' o 'Primavera'.").toLowerCase();
		}

		cantidadPers = parseInt(prompt("Ingrese la cantidad de personas que viajan."));
		while(isNaN(cantidadPers)){
			cantidadPers = parseInt(prompt("Error. Ingrese una cantidad válida de personas."));
		}
		acumPersonas += cantidadPers;
		contadorViajes++;

		// a)el lugar más elegido
		if(destino == "bariloche"){
			contBari++;
		}
		else if(destino == "cataratas"){
			contCata++;
		}
		else{
			contSalta++;
		}
		

		// b)el sexo de titular que lleva más pasajeros.

		if(sexo == 'm' && cantidadPers > cantMax){
			sexoMasPas = "masculino";
		}
		else if(sexo == 'f' && cantidadPers > cantMax){
			sexoMasPas = "femenino";
		}

		// c)el promedio de personas por viaje, que viajan en invierno

		if(temporada == "invierno"){
			promPersonas = acumPersonas / contadorViajes;
		}

		
		continuar = prompt("Si desea seguir ingresando titulares y destinos escriba 'Si', caso contrario presione 'Aceptar'.");
	}while(continuar == "si");

	if(contBari > contCata && contBari > contSalta){
		destinoMasElegido = "Bariloche";
	}
	else if(contCata >= contBari && contCata > contSalta){
		destinoMasElegido = "Cataratas"
	}
	else{
		destinoMasElegido = "Salta";
	}


	console.log(`El destino más elegido es ${destinoMasElegido}`);
	console.log(`El sexo del titular que más pasajeros lleva es ${sexoMasPas}`);
	console.log(`El promedio de personas por viaje en invierno es ${promPersonas}`);

}
