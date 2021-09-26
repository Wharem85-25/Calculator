const par = (numero) => (numero % 2 === 0);

function calcular (lista) {
	const sumaPro = lista.reduce(function(valor = 0, element) {
		return valor + element;
	})

	const division = sumaPro / lista.length;
	return division;
}

function medianaSalarios(lista) {
	const mitad = parseInt(lista.length /2);

	if(par(lista.length)) {
		const personaMitad1 = (lista[mitad-1]);
		const personaMitad2 = (lista[mitad]);
		const mediana = calcular([personaMitad1, personaMitad2]);
		return mediana;
	} else {
		const personaMitad = (lista[mitad]);
		return personaMitad;
	}
}

const salariosGuate = guatemala.map(function(persona) {
	return persona.salary
});

const salarioGuateSort = salariosGuate.sort((a,b) => a-b);

const medianaGeneral = (medianaSalarios(salarioGuateSort));

const spliceStart = (salarioGuateSort.length * 90)/100;
const spliceCount = salarioGuateSort.length - spliceStart;

const salario10 = salarioGuateSort.splice(spliceStart, spliceCount);

const medianatop10 = (medianaSalarios(salario10));

console.log({medianaGeneral, medianatop10});
