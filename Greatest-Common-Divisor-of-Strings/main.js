const gcdOfStrings = function (str1, str2) {
	const n = str1.length;
	const m = str2.length;
	let largerString = n >= m ? str1 : str2;

	let gcd = (x, y) => {
		if (!y) return x;
		return gcd(y, x % y);
	};

	let GCD = gcd(n, m);

	let commonString = largerString.slice(0, GCD);

	if (str1 + str2 !== str2 + str1) return "";

	return commonString;
};

console.log(gcdOfStrings("ABCDEF", "ABC"));
