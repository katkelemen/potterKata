"Use strict"

const discounts = [1, 0.95, 0.9, 0.8, 0.75];

const getUniqueSet = function(booklist) {
	let uniques = {};
	booklist.forEach((index, elem) => {
		uniques[i] = true;
	});
	return Object.keys(uniques);
};

const getUniqueSets = function(booklist) {
	booklist.reduce((i, elem))
};

const price = function(booklist) {
	if (booklist.length >= 2) {
		const uniques = getUniqueSets(booklist);
		let price = 0;
		uniques.forEach((index, elem) => {
			price = price + (elem.length * 8 * discounts[elem.length - 1]);
		});
		return price;
	}
	else return 8 * booklist.length;
}
exports.price = price;
