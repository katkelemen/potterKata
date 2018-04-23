"Use strict"

const discounts = [1, 0.95, 0.9, 0.8, 0.75];

const diff = function(left, right) {
	let _left = left.slice();
	right.forEach((elem, index) => {
		_left.splice(_left.indexOf(elem), 1);
	})
	return _left;
}

// [1,2,3,4,5,2,3,3] => [1,2,3,4,5]
const getUniqueSet = function(booklist) {
	let uniques = {};
	booklist.forEach((elem, index) => {
		uniques[elem] = elem;
	});
	return Object.values(uniques);
};

// [1,2,3,4,5,2,3,3] => [[1,2,3,4,5], [2,3], [3]]
const getUniqueSets = function(booklist) {
	if (booklist.length == 0) {
		return [];
	} else {
		let uni = getUniqueSet(booklist);
		let rest = diff(booklist, uni);
		return [uni].concat(getUniqueSets(rest));
	}
};

const price = function(booklist) {
	if (booklist.length >= 2) {
		const uniques = getUniqueSets(booklist);
		let price = 0;
		uniques.forEach((elem, index) => {
			price = price + (elem.length * 8 * discounts[elem.length - 1]);
		});
		return price;
	}
	else return 8 * booklist.length;
}
exports.price = price;
