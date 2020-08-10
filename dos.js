/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let producto;
  let marca;
  let precio;
  let peso;
  let tipo;
  let precioLiquidoCaro = 0;
  let precioSolidoBarato = 0;
  let acumPeso = 0;
  let continuar;
  let flag1 = 0;
  let flag2 = 0;

  do{
    producto = prompt("Ingrese un producto").toLowerCase();
    while(!(isNaN(producto))){
      producto = prompt("Error. Ingrese un producto").toLowerCase();
    }

    precio = parseFloat(prompt("Ingrese el precio"));
    while(!(precio > 0)){
      precio = parseFloat(prompt("Error. Ingrese el precio"));
    }

    marca = prompt("Ingrese una marca").toLowerCase();
    while(!(isNaN(marca))){
      marca = prompt("Error. Ingrese una marca").toLowerCase();
    }

    peso = parseFloat(prompt("Ingrese el peso en Kg"));
    while(!(peso > 0)){
      peso = parseFloat(prompt("Error. Ingrese el peso en Kg"));
    }

    tipo= prompt("Indique si es sólido o líquido").toLowerCase();
    while(tipo != "solido" && tipo != "liquido"){
      tipo= prompt("Error. Indique si es sólido o líquido").toLowerCase();
    }
    
    // a)informar el peso total de la compra.

    acumPeso += peso;

    // b)la marca del más caro de los líquidos
    // c)la marca del más barato de los sólidos
  
    if(( flag1 == 0 || precioLiquidoCaro < precio) && tipo == "liquido")
   {
      marcaLiquidoCaro = marca;  
      precioLiquidoCaro = precio;
      flag1 = 1;
   }
    else if((flag2 == 0 || precioSolidoBarato > precio) && tipo == "solido")
   { 
      marcaSolidoBarato = marca;
      precioSolidoBarato = precio;
      flag2 = 1;
   }

    continuar = prompt("Si desea continuar con la carga de productos ingrese 'Si").toLowerCase();
  }while(continuar == "si");

  console.log(`El peso total de los productos es ${acumPeso}`);
  console.log(`La marca del líquido más caro es ${marcaLiquidoCaro} y cuesta $${precioLiquidoCaro}`);
  console.log(`La marca del sólido más barato es ${marcaSolidoBarato} y cuesta $${precioSolidoBarato}`);
}
