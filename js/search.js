const search = function () {
	const input = document.querySelector(".search-block > input");
	const searchBtn = document.querySelector(".search-block > button");

	input.addEventListener("input", () => {});
	searchBtn.addEventListener("click", () => {
		const val = input.value;
		console.log(`Вы ввели: ${val} `);
	});
};

search();
