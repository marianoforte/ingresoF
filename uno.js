/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let pesoMax = 0;
	let sexo;
	let edad;
	let acumNombre;
	let acumEdad = 0;
	let contMujeres = 0;
	let promedioEdad;

	for(let i = 0; i < 5; i++){
		nombre = prompt("Ingrese su nombre").toLowerCase();
		while(!(isNaN(nombre))){
			nombre = prompt("Ingrese un nombre válido");
		}
		peso = parseFloat(prompt("Ingrese su peso"));
		while(!(peso > 0)){
			peso = prompt("Ingrese un peso válido");
		}
		sexo = prompt("Ingrese su sexo: 'F' o 'M'");
		while(sexo != 'm' && sexo != 'f'){
			sexo = prompt("Ingrese un sexo válido: 'F' o 'M'");
		}
		edad = parseInt(prompt("Ingrese su edad"));
		while(edad < 0 || isNaN(edad)){
			edad = prompt("Ingrese una edad válido");
		}
		acumEdad += edad;

		// a) informar la cantidad de mujeres
		if(sexo == 'f'){
			contMujeres++;
		}
		if(contMujeres == 0){
			contMujeres = 0
		}

		// c) el hombre mas pesado.
		if(sexo == 'm' && peso > pesoMax){
			pesoMax = peso;
			acumNombre = nombre;
		}
	}
	// b) la edad promedio en total.
	promedioEdad = acumEdad / 5;

	console.log(`Hay ${contMujeres} mujeres.`);
	console.log(`El promedio de edad es ${promedioEdad}.`);
	console.log(`El hombre más pesado es ${acumNombre}, y pesa ${pesoMax}`);
}
