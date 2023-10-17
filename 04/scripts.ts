const gerarEtiquetas = (infoProduto: {
	produto: string;
	lote: number;
	ano: number;
	qtd: number;
}): string[] => {
	const resultado: string[] = [];

	for (let i = 1; i <= infoProduto.qtd; i++) {
		resultado.push(
			`${infoProduto.lote}-${infoProduto.ano}-${i
				.toString()
				.padStart(3, "0")}`
		);
	}

	return resultado;
};

const infoProduto = {
	produto: "CPU Dual Core 3.0GHZ",
	lote: 321,
	ano: 2022,
	qtd: 15,
};

console.log(gerarEtiquetas(infoProduto));
