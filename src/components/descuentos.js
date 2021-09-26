const desc = (valor, porcentaje) => {
	const total = valor-((valor*porcentaje)/100);
	return total;
}

const cupones = ["arrs", "fras", "crop"];

const cup = (valor, desc) => {
	const totalCup = valor-((valor*desc)/100);
	return totalCup
}

function cups() {
	const inputProducto = document.getElementById("producto");
	const producto = inputProducto.value;

	const inputCupon = document.getElementById("cupon");
	const cupon = inputCupon.value;


	let descuentos

	switch(cupon) {
		case cupones[0]:
			descuentos = 15;
			break;
		case cupones[1]:
			descuentos = 20;
			break;
		case cupones[2]:
			descuentos = 25;
			break;
	}
	const resultado = cup(producto, descuentos);
	const res = document.getElementById("resulcup");
	res.innerText ="El total del descuento es: " + resultado;
}

function porc() {
	const inputProducto = document.getElementById("producto");
	const producto = inputProducto.value;

	const inputDescuento = document.getElementById("descuento");
	const descuento = inputDescuento.value;

	const resultado2 = desc(producto, descuento);
		const res2 = document.getElementById("resul");
		res2.innerText ="El total del descuento es: " + resultado2;
}
