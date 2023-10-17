const soletrar = (palavra: string): string => {
	let palavraSoletrada: string = "";

	for (const letra of palavra) {
		palavraSoletrada += `${letra}-`;
	}

	return palavraSoletrada.slice(0, palavraSoletrada.lastIndexOf("-"));
};

console.log(soletrar("coisa"));
