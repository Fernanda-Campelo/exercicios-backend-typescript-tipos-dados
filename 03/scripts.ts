const montarTabuada = (arrayNumeros: number[]): string => {
	let resultado: string = "";

	for (const n of arrayNumeros) {
		for (let i = 0; i <= 10; i++) {
			resultado += `${n} x ${i} = ${n * i} \n`;

			if (i === 10) {
				resultado += "------------------ \n";
			}
		}
	}

	return resultado;
};

console.log(montarTabuada([1, 5, 2]));
