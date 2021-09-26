function calcular(cap, tas, t) {
	const tasaM = tas /100;
	const interes = (cap * tasaM * t).toFixed(2);
	const total = interes + cap;
	return total;
}

function interesSimple() {
	const capitalVal = document.getElementById("capital");
	const capital = capitalVal.value;
	const tasaVal = document.getElementById("tasa");
	const tasa = tasaVal.value;
	const tiempoVal = document.getElementById("tiempo");
	const tiempo = tiempoVal.value;

	const res = calcular(capital, tasa, tiempo);
	const result = document.getElementById("resSimple");
	result.innerText = "El interes simple es: " + res;
}

function calcularCompuesto(capit, interes, periodos) {
	const div = interes /100;
	const int = 1 + div;
	const periodo = Math.pow(int, periodos);
	const total = (capit*periodo).toFixed(2);
	return total;
}

function interesCompuesto() {
	const capitalVal = document.getElementById("capital")
	const capital = capitalVal.value;
	const interesVal = document.getElementById("interes");
	const interes = interesVal.value;
	const periodoVal = document.getElementById("periodo");
	const periodo = periodoVal.value;

	const res = calcularCompuesto(capital, interes, periodo);
	const result = document.getElementById("resCompuesta");
	result.innerText = "El interes compuesto es: " + res;
}
