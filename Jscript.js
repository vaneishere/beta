let correctas = [3,1,1,2];

let opcion_elegida =[];

let cantidad_correctas=0;

function respuesta(num_pregunta, seleccionada){

	opcion_elegida[num_pregunta] = seleccionada.value;
}

function corregir(){
	cantidad_correctas = 0;
	for (i = 0; i< correctas.length;i++){
        if (correctas[i]==opcion_elegida[i]) {
        	cantidad_correctas++;
        }

	}

      document.getElementById("resultado").innerHTML = cantidad_correctas
}
