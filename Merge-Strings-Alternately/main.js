const mergeAlternately = (word1, word2) => {
	let m = word1.length;
	let n = word2.length;
	let mergedResult = "";
	let i = 0;
	let j = 0;

	while (i < m || j < n) {
		if (i < m) {
			mergedResult += word1[i++];
		}
		if (j < n) {
			mergedResult += word2[j++];
		}
	}

	return mergedResult;
};
