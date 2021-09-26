////////////////////////////////////////////////
// Promedio
function calcular (lista) {
	// let sumaPro = 0;

	// for(let i = 0; i < lista.length; i++) {
	// 	sumaPro = sumaPro + lista[i];
	// }

	// Utilizando el metodo reduce

	const sumaPro = lista.reduce(function(valor = 0, element) {
		return valor + element;
	})

	const division = sumaPro / lista.length;
	return division;
}
///////////////////////////////////////////////
// Media aritmetica
function calcularM() {
	const inputMedia = document.getElementById("listMedia");
	const listaMedia = inputMedia.value;

	let arrays = Array.from(listaMedia.split(","), Number);

	const media = arrays.sort((a,b) => a-b)

	const mitad = parseInt(media.length / 2);

	function par(numero) {
		if(numero % 2 === 0) {
			return true;
		} else {
			return false;
		}
	}
	let mediana;

	if(par(media.length)) {
		const elemento1 = media[mitad -1];
		const elemento2 = media[mitad];
		const promed = calcular([elemento1, elemento2]);
		mediana = promed;
	} else {
		mediana = media[mitad];
	}
	const total = mediana;
	const resultado = document.getElementById("rest");
	resultado.innerHTML="La media es: " + total;
}

//////////////////////////////////////////////////
// Moda

function calcularModa() {
	const inputmoda = document.getElementById("listModa");
	const listModa = inputmoda.value;

	let arrayModa = Array.from(listModa.split(","), Number);
	const listaModaCount = {};

	arrayModa.map(function(c) {
		if(listaModaCount[c]) {
			listaModaCount[c] += 1;
		} else {
			listaModaCount[c] = 1;
		}
	})

	const listaArrayModa = Object.entries(listaModaCount).sort((d,e) => d[1]-e[1]);

	const moda = listaArrayModa[listaArrayModa.length - 1];
	const totalModa = moda[1];
	const valorMasAlto = moda[0];
	const resultado2 = document.getElementById("resultModa");
	resultado2.innerHTML = "La moda es: " + valorMasAlto + " con la cantidad de: " + totalModa + " repeticiones";
}


///////////////////////////////////////////////////
// Media geometrica
function calcularMediaG(){
	const inputMediaG = document.getElementById("listMediaG");
	const listMediaG = inputMediaG.value;
	let arrayMediaG = Array.from(listMediaG.split(","), Number);

	const multiplicacion = arrayMediaG.reduce(function(valor = 1, element) {
		return valor * element;
	});
	const raiz = Math.sqrt(multiplicacion).toFixed(3);
	const resultado3 = document.getElementById("resultMediaG");
	resultado3.innerHTML = "La media Geometrica es: " + raiz;
}
