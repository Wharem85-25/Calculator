function areaPer(valCuadrado) {
	const area = Math.pow(valCuadrado, 2);
	const perimetro= valCuadrado * 4;
	const total = "El valor del area es " + area + " y el perimetro es: " + perimetro;
	return total;
};

function resultadoCuad() {
	const cuadradoVal = document.getElementById("cuadrado");
	const cuadrado = cuadradoVal.value;
	const resultadoCua = areaPer(cuadrado);
	const res = document.getElementById("resultCuadrado");
	res.innerText = resultadoCua;
};

/////////////////////////////////////////////////

function areaPerTriangulo(base, lados, altura) {
	const perimetroTriangulo = lados * 2 + (base);
	const areaTriangulo = (base * altura) / 2;
	const total = "El valor del area es: " + areaTriangulo + " y el perimetro es: " + perimetroTriangulo;
	return total;
}

function resultadoTriangulo() {
	const baseVal = document.getElementById("base");
	const base = baseVal.value;
	const ladoVal = document.getElementById("lados");
	const lados = ladoVal.value;
	const alturaVal = document.getElementById("altura");
	const altura = alturaVal.value;
	const resultadoT = areaPerTriangulo(base, lados, altura);
	const resu = document.getElementById("resultTriangulo");
	resu.innerText = resultadoT;
};

////////////////////////////////////////////

function areaPerCirculo(radio) {
	const perimetroCir = (2* Math.PI) * radio;
	const areaCir= Math.PI * Math.pow(radio, 2);
	const total = "El valor del area es: " + areaCir + " y el perimetro es: " + perimetroCir;
	return total;
}

function resultadoCirculo() {
	const radioVal = document.getElementById("radio");
	const radio = radioVal.value;
	const resultadoC = areaPerCirculo(radio);
	const res = document.getElementById("resultCirculo");
	res.innerText = resultadoC;
}

////////////////////////////////////////////

function alturaIsoseles(lado, lado2, base) {
	if(lado == lado2 && lado != base) {
		console.log("Si es un triangulo isoseles");
		const altura = Math.sqrt(Math.pow(lado, 2)-Math.pow(base,2)/4);
		const resultado = "La altura del isoseles es: " + altura;
		return resultado;
	} else {
		const result = "no es un triangulo isoseles";
		return result;
	}
}

function resultadoI() {
	const lados1 = document.getElementById("lado");
	const lado = lados1.value;
	const lados2 = document.getElementById("lado2");
	const lado2 = lados2.value;
	const bases = document.getElementById("base");
	const base = bases.value;
	const resultadoI = alturaIsoseles(lado, lado2, base);
	const res = document.getElementById("resultIsoseles");
	res.innerText = resultadoI;
}
